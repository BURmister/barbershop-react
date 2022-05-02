import react from 'react';
import './NewsCard.css'


function NewsCard(props) {
    return (
        <div className="news">

            <div >
                <li className="news__item-li"> {props.li} </li>
                <li className="news__item-time"> {props.date} </li>
            </div>

        </div>
    )
}

export default NewsCard;