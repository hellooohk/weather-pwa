import logo from '../../assets/5729382_cloud_raining_sun_weather_forecast_icon 1.svg';
import './Header.scss';
const Header = () => {
    return(
        <header className="header row center">
            <img className='header__img' src={logo} alt="" />
            <span className='header__title'>Weather Wala</span>
        </header>
    )
}
export default Header;