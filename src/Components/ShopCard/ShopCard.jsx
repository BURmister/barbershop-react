import React from 'react';
import "./ShopCard.css"
import iconPlus from '../imgs/plus.svg'
import iconCheck from '../imgs/check.svg'

function ShopCard(props) {

    const [cardIcon, setCardIcon ] = React.useState(true)

    return(
        <div className="slider__item">
            <a><img class="slider__img" src={props.img} width="200px" height="165px" /></a>
            <div class="slider__a">
                <li class="slider__li"><a href="../барбершоп/shop-item.html">{props.title}</a></li>
            </div>
            <div class="item__price">
                <div class="price__wrapper"><li>{props.price}</li></div>
                <div onClick={() => setCardIcon(!cardIcon)} class="akor__wrapper"> 
                    {cardIcon ? 
                        <img src={iconPlus} class="button button__buy"></img> : 
                        <img src={iconCheck} class="button button__buy"></img>   
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopCard;