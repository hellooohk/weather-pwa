interface KeyValue{
    title:String;
    value:String;
}
const KeyValueCard = (props:KeyValue) => {
    return(
        <div className="KeyValueCard column center">
            <span className="KeyValueCard__title">{props.title}</span>
            <span className="KeyValueCard__value">{props.value}</span>
        </div>
    )
}
export default KeyValueCard;