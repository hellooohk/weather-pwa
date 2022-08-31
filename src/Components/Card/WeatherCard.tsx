import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import './Card.scss';
const WeatherCard = (props:any) => {
    const navigate = useNavigate();
    const icon = props.data.weather[0].icon;
    const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const handleClick = () => {
        navigate("/weather",{state:{props,imgUrl}});
    }
    return(
        <div onClick={handleClick} className="WeatherCard column">
            <div className="row sp-btw mb">
                <span className="WeatherCard__city">{props.data.name}</span>
                <span className='WeatherCard__btn' onClick={handleClick}>&#10097;</span>
            </div>
            <div className="row sp-btw mb temp-img">
                <span className="WeatherCard__temp">{Math.floor(parseFloat(props.data.main.temp) - 273.15)}<sup>&deg;</sup></span>
               <img  src={imgUrl} alt="" className="WeatherCard__img" />
            </div>
            <div className="row sp-btw">
                <span className="WeatherCard__something">
                    {props.something || "Warning"}
                </span>
                <span className="WeatherCard__about">
                    {_.startCase(_.toLower(props.data.weather[0].description))}
                </span>
            </div>
        </div>
    )
}
export default WeatherCard;