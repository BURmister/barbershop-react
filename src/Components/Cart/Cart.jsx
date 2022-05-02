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
                    <div className="drawer__flex">
                        
                        <div className="drawer__header">
                            <h2 className="drawer__h2">это ваша корзина</h2>
                            <div onClick={props.clickOnClose} className="drawer__close"><img className="drawer__close__img" width="20" src={iconClear}></img></div>
                        </div>

                        <div className="drawer__content">
                            <div className="content__wrapper">
                                <ShopCard/>
                                <ShopCard/>
                                <ShopCard/>
                            </div>
                        </div>
                        <div className="drawer__container__footer">
                            <div className="drawer__footer">
                                <div>итого к оплате: </div>
                                <button className=" button drawer__button__buy">оформление заказа</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default Cart;
    
   