import React from 'react';
import './Cart.css'

import iconClear from '../imgs/clear.svg'
import ShopCard from '../ShopCard/ShopCard'

function Cart(props) {
    return(
        <div>   
        
            <div className="drawer__wrapper">
                <div onClick={props.clickOnClose} className="drawer__shadow" ></div>
                <div className="drawer"> 
                    <div className="drawer__container">
                        <div className="drawer__content__container">
                            <h2 className="drawer__h2">это твоя корзина</h2>
                            <div onClick={props.clickOnClose} className="drawer__close"><img className="drawer__close__img" width="20" src={iconClear}></img></div>
                        </div>
                        <div className="drawer__content">
                            <ShopCard/>
                        </div>
                        <div className="drawer__buy">
                            <div className="drawer__button__buy">это кнопка</div>
                        </div>
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default Cart;
    
   