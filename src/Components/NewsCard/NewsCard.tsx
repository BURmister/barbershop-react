import react from 'react';
import './NewsCard.css'

type NewsCardProps = {
    li: string,
    date: string
}
const NewsCard: React.FC<NewsCardProps> = ({ li, date }) => {
    return (
        <div className="news">

            <div >
                <li className="news__item-li"> {li} </li>
                <li className="news__item-time"> {date} </li>
            </div>

        </div>
    )
}

export default NewsCard;