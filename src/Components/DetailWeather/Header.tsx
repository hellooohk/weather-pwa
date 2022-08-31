import BackArrow from "../../assets/icons/left-arrow-angle-big-gross-symbol.png";
export const Header = (props:any) => {
    return(
        <div className="DetailWeather-header x" >
          {!props.status && (
            <div onClick={props.handleBack} className="DetailWeather__back x">
              <img src={BackArrow} className="Back__icon" alt=""/>
              <span className="Back__text">Back</span>
            </div>
          )}
          <div className="DetailWeather__addToList x">
            {!props.status ? (
              !props.isAdded ? (
                <div>
                  <span className="addToList__title">Add to List</span>
                  <button onClick={props.handleAdd} className="addToList__btn">
                    +
                  </button>
                </div>
              ) : (
                <div>
                  <button className="added">Added to list &#10003;</button>
                  <button className="remove" onClick={props.handleRemove}>
                    Remove
                  </button>
                </div>
              )
            ) : (
              <button className="remove" onClick={props.handleRemove}>
                Remove
              </button>
            )}
          </div>
        </div>
      
    )
}

