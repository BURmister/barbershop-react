import React from 'react';
import "./DrawerCard.css"
import iconPlus from '../imgs/Plus.svg'

function DrawerCard(props) {
    return(
        <div className="drawerCard__item">
            <a><img className="drawerCard__img" src={props.img} width="100px" height="50px" /></a>
            
            <div className="drawerCard__item__price">
                <div className="drawerCard__akor__wrapper"><img src={iconPlus} className="button buttonInCart button__buy"></img></div>
                <div className="drawerCard__price__wrapper"><li>{props.price}</li></div>
                <div className="drawerCard__akor__wrapper"><img src={iconPlus} className="button buttonInCart button__buy"></img></div>
            </div>
        </div>

    //     {<div className="drawerCard__a">
    //     <li className="drawerCard__li"><a href="../барбершоп/shop-item.html">{props.title}</a></li>
    // </div>}
    )
}

export default DrawerCard;