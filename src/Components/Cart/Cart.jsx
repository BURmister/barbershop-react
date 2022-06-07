import React from 'react';
import './Cart.css'
import axios from 'axios'

import iconClear from '../imgs/clear.svg'
import DrawerCard from '../DrawerCard/DrawerCard'

function Cart(props) {

    const onClickClose = () => {
        props.normalOverflow();
        props.clickOnClose();
    }

    // let priceCount = 0

    // const priceCounter = (price) => {
    //     priceCount = priceCount + Number(price)
    //     console.log(priceCount)
    //     return ( priceCount )
    // }

    const onRemoveItem =(id) => {
        axios.delete(`https://6241abd3042b562927a77458.mockapi.io/itemsOfCart/${id}`);
        props.setCartItems(prev => prev.filter(item => item.id !== id));
    }

    return(
        <div>   
        
            <div className="drawer__wrapper">

                <div onClick={onClickClose} className="drawer__shadow" ></div>

                <div className={`drawer ${props.stateOfCart ? 'show' : 'hide'} `}> 
                    <div className="drawer__flex">
                        
                        <div className="drawer__header">
                            <h2 className="drawer__h2">это ваша корзина</h2>
                            <div onClick={onClickClose} className="drawer__close"><img className="drawer__close__img" width="20" src={iconClear}></img></div>
                        </div>

                        <div className="drawer__content">
                            <div className="content__wrapper">
                                {props.cartItems
                                    .map((item) => (
                                        <DrawerCard id={item.id} title={item.title} price={item.price}
                                        //  priceCounter={(price) => priceCounter(price)} 
                                         onRemoveItem={(id) => onRemoveItem(id)} />
                                ))}
                            </div>
                        </div>

                        <div className="drawer__container__footer">
                            <div className="drawer__footer">
                                <div className="drawer__priceCount"><p>итого к оплате:</p> <p>
                                     {/* {priceCount}  */}
                                     ₽</p></div>
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
    
   