import "../css/CardInfo.css"

function CardInfo({icon, text}) {
    return (
        <div className="card-info">
            {icon}
            <p>{text}</p>
        </div>
    )
}

export default CardInfo;