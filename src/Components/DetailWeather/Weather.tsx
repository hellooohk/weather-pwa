import Arrow from "../../assets/Vector.svg";
interface WeatherShort{
    city:String;
    imgUrl:string;
    temperature:String;

}
const Weather = ({city,imgUrl,temperature}:WeatherShort) => {
    return(
        <div className="DetailWeather__top column center">
        <img src={imgUrl} alt="weather-icon" className="DetailWeather__top--img" />
        <div className="row">
          <span className="DetailWeather__title">{city}</span>
          <img src={Arrow} alt="arrow" className="icon" />
        </div>
        <p className="DetailWeather__temp">
          {temperature}
          <sup>&deg;</sup>
        </p>
      </div>
    )
}
export default Weather;