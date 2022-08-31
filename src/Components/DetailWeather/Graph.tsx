import { Chart } from "./Chart/Chart";

interface SunsetSunrise{
    lengthOfDay : String;
    remainingDay : String;
    city: String;
}
export const Graph = (props:SunsetSunrise) => {
  return (
    <div className="DetailWeather__graph row">
      <div className="Graph__left">
        <div className="Graph__left--head">SUNRISE & SUNSET</div>
        <div className="Graph">
        
        <Chart city={props.city}/>
      </div>
        <div className="Graph__left--lod">
          <span className="lod--text">Length of day: </span>
          <span>{props.lengthOfDay}</span>
        </div>
        <div className="Graph__left--rd">
          <span className="lod--text">Remaining daylight: </span>
          <span> {props.remainingDay}</span>
        </div>
      </div>
    </div>
  );
};
