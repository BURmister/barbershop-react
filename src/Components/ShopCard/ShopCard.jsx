import React from 'react';
import "./ShopCard.css"
import iconPlus from '../imgs/plus.svg'
import iconCheck from '../imgs/check.svg'

function ShopCard({title, img, price, onPlus}) {

    const [cardIcon, setCardIcon ] = React.useState(true)

    const onClickPlus = () => {
        setCardIcon(!cardIcon)
        onPlus({title, img, price })
    }

    return(
        <div className="slider__item">
            <a><img class="slider__img" src={img} width="200px" height="165px" /></a>
            <div class="slider__a">
                <li class="slider__li"><a href="../барбершоп/shop-item.html">{title}</a></li>
            </div>
            <div class="item__price">
                <div class="price__wrapper"><li>{price} ₽</li></div>
                <div onClick={onClickPlus} class="akor__wrapper"> 
                    {   
                        cardIcon ? 
                            <img src={iconPlus} class="button button__buy"></img> 
                        : 
                            <img src={iconCheck} class="button button__buy"></img>   
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopCard;