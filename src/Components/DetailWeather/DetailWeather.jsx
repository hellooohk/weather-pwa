import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../../features/weather/weatherSlice";
import { hoursMinutesCalculator, formatAMPM } from "./utils";
import { Characterstics } from "./Characterstics";
import { Graph } from "./Graph";
import "./DetailWeather.scss";
import "../Home.scss";
import Weather from "./Weather";
import { Header } from "./Header";
const DetailWeather = (props) => {
  //Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //States
  const [isReceived, setIsReceived] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [temp, setTemp] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [pressure, setPressure] = useState("");
  const [rainPercent, setRainPercent] = useState("");
  const [humidity, setHumidity] = useState("");
  const [lengthOfDay, setLengthOfDay] = useState("");
  const [remainingDay, setRemainingDay] = useState("");
  useEffect(() => {
    if (!location.state && !props) {
      navigate("/");
      return;
    } else if (props.status) {
      const {
        temperature,
        imgUrl,
        city,
        pressure,
        time,
        rainPercent,
        humidity,
        lengthOfDay,
        remainingDay,
      } = props.data;
      setTemp(temperature);
      setImgUrl(imgUrl);
      setCity(city);
      setPressure(pressure);
      setTime(time);
      setRainPercent(rainPercent);
      setHumidity(humidity);
      setLengthOfDay(lengthOfDay);
      setRemainingDay(remainingDay);
    } else {
      setTemp(
        Math.floor(parseFloat(location.state.props.data.main.temp) - 273.15)
      );

      setImgUrl(location.state.imgUrl);
      setCity(location.state.props.data.name);
      setPressure(location.state.props.data.main.pressure);
      setTime(formatAMPM(new Date(location.state.props.data.dt * 1000)));
      setRemainingDay(
        hoursMinutesCalculator(
          new Date(),
          new Date(location.state.props.data.sys.sunset * 1000)
        )
      );
      setLengthOfDay(
        hoursMinutesCalculator(
          new Date(location.state.props.data.sys.sunrise * 1000),
          new Date(location.state.props.data.sys.sunset * 1000)
        )
      );
      setRainPercent("--");
      setHumidity(location.state.props.data.main.humidity);
    }

    setIsReceived(true);
  }, [location.state, navigate, props]);
  const handleBack = () => {
    navigate("/");
  };
  const handleAdd = () => {
    setIsAdded(true);
    const weatherData = {
      imgUrl: imgUrl,
      city: location.state.props.data.name,
      temperature: Math.floor(
        parseFloat(location.state.props.data.main.temp) - 273.15
      ),
      time: time,
      pressure: location.state.props.data.main.pressure,
      rainPercent: "--",
      humidity: location.state.props.data.main.humidity,
      remainingDay,
      lengthOfDay,
    };
    dispatch(add(weatherData));
  };
  const handleRemove = () => {
    setIsAdded(false);
    dispatch(remove(city));
  };
  return (
    <div>
      {isReceived && (
        <div
          className={
            props.status
              ? "DetailWeather DetailWeather-center"
              : "DetailWeather"
          }
         
        >
          <div>
          <Header
            status={props.status}
            handleBack={handleBack}
            isAdded={isAdded}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
          <div style={{position:"relative",top:"-5rem",zIndex:"-1"}}>
            <Weather temperature={temp} imgUrl={imgUrl} city={city} />
            <Characterstics
              time={time}
              pressure={pressure}
              humidity={humidity}
              rainPercent={rainPercent}
            />
            <Graph
              lengthOfDay={lengthOfDay}
              remainingDay={remainingDay}
              city={city}
            />
          </div>
          </div>
       
        </div>
      )}
    </div>
  );
};
export default DetailWeather;
