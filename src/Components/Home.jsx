import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSearch } from "../features/weather/weatherSlice";
import "./index.scss";
import SearchIcon from "../assets/icons/icon-wrapper.svg";
import WeatherCard from "./Card/WeatherCard";
import DetailWeather from "./DetailWeather/DetailWeather";
import _ from "lodash";
import { NoData } from "./NoData";
import { getWeather } from "../api/api";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const recentSearches = useSelector((state) => state.counter.recentSearches);
  const [searchValue, setSearchValue] = useState("");
  const [focus, setFocus] = useState(false);
  const [isReceived, setIsReceived] = useState(false);
  const [weatherData, setWeatherData] = useState();
  const getWeatherData = async (keyword = searchValue) => {
    getWeather(keyword).then((res) => {
      setWeatherData(res);
      setIsReceived(true);
      setSearchValue("");
    });
  };
  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setFocus(false);
    }, 5000);
  };
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleOption = (event) => {
    getWeatherData(event.target.innerText);
    setFocus(false);
  };
  const handleClick = () => {
    if (searchValue.length === 0) {
      setFocus(true);
      return;
    }
    setFocus(false);
    getWeatherData();
    dispatch(addSearch(_.startCase(_.toLower(searchValue))));
  };

  return (
    <div className="Home column center">
      <div className="Search row">
        <input
          className="Search__input"
          type="text"
          placeholder="Search Location"
          value={searchValue}
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <img
          className="Search__icon"
          src={SearchIcon}
          alt=""
          onClick={handleClick}
        />
      </div>
      {(focus || isReceived) && recentSearches.size > 0 && (
        <div className="Home__suggestions row">
          {Array.from(recentSearches).map((item) => (
            <p
              onClick={handleOption}
              className="Home__suggestions--card"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
      )}
      {!isReceived && !focus && count.length === 0 && <NoData />}
      {!focus && count.length > 0 && !isReceived && (
        <>
          <Carousel width={"65vw"} showArrows={false} showStatus={false}>
            {count.map((item) => (
              <DetailWeather data={item} status={true} key={item.city} />
            ))}
          </Carousel>
        </>
      )}
      {isReceived && !focus && <WeatherCard data={weatherData} />}
    </div>
  );
};
export default Home;
