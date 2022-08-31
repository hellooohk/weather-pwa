import KeyValueCard from "../Card/KeyValueCard";
interface Traits{
    time:String;
    pressure:String;
    rainPercent:String;
    humidity:String;
}
export const Characterstics = (props:Traits) => {
    return(
        <div className="DetailWeather__chars row sp-btw Characterstics">
        <KeyValueCard title={"TIME"} value={props.time} />
        <KeyValueCard title={"PRESSURE"} value={props.pressure} />
        <KeyValueCard title={"% RAIN"} value={props.rainPercent} />
        <KeyValueCard title={"HUMIDITY"} value={props.humidity} />
      </div>
    )
}