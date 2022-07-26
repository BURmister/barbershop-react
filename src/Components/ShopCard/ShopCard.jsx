import React from 'react';
import "./ShopCard.css"
import iconPlus from '../imgs/plus.svg'
import iconCheck from '../imgs/check.svg'
import ContentLoader from "react-content-loader"

function ShopCard({id, code, title, img, price, onPlus, loading}) {

    const [cardIcon, setCardIcon ] = React.useState(true)

    const onClickPlus = () => {
        setCardIcon(!cardIcon)
        onPlus({id, code, title, img, price, amount: 1 })
    }

    const loaded = loading
    return(
        <>
            {loaded ? (
                <ContentLoader 
                speed={2}
                width={200}
                height={330}
                viewBox="0 0 200 330"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                
                >
                <rect x="0" y="0" rx="0" ry="0" width="200" height="165" /> 
                <rect x="-2" y="185" rx="0" ry="0" width="200" height="48" /> 
                <rect x="160" y="253" rx="0" ry="0" width="40" height="40" /> 
                <rect x="0" y="253" rx="0" ry="0" width="160" height="40" />
                </ContentLoader>
            ) : (
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
            )}
        
        
        </>
    )
}

export default ShopCard;