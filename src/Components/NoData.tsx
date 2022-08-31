import Cloud from "../assets/Cloud.svg";
export const NoData = () => {
    return(
        <div className="column Home__cloud">
          <img  src={Cloud} alt="" />
          <p>No locations added to watchlist</p>
        </div>
    )
}