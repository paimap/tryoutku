import DateRangeIcon from '@mui/icons-material/DateRange';
import CategoryIcon from '@mui/icons-material/Category';
import "../css/TryoutCard.css"
import CardInfo from './CardInfo';

function TryoutCard({detail}) {
    return (
        
            <div className="to-card">
                <h1>{detail.title}</h1>
                <hr />
                <CardInfo icon={<DateRangeIcon fontSize="medium" className="date-icon"/>} text={detail.date} />
                <CardInfo icon={<CategoryIcon fontSize="medium" className="category-icon"/>} text={detail.category} />
            </div>
    )
}

export default TryoutCard