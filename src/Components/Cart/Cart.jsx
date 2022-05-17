import React from 'react';
import './Cart.css'
import axios from 'axios'

import iconClear from '../imgs/clear.svg'
import DrawerCard from '../DrawerCard/DrawerCard'

function Cart(props) {

    React.useEffect(() => {
        axios.get('https://6241abd3042b562927a77458.mockapi.io/itemsOfCart').then(res => {
            setCartItems(res.data)
        })
    })

    const [cartItems, setCartItems] = React.useState([])

    return(
        <div>   
        
            <div className="drawer__wrapper">

                <div onClick={props.clickOnClose} className="drawer__shadow" ></div>

                <div className={`drawer ${props.stateOfCart ? 'show' : 'hide'} `}> 
                    <div className="drawer__flex">
                        
                        <div className="drawer__header">
                            <h2 className="drawer__h2">это ваша корзина</h2>
                            <div onClick={props.clickOnClose} className="drawer__close"><img className="drawer__close__img" width="20" src={iconClear}></img></div>
                        </div>

                        <div className="drawer__content">
                            <div className="content__wrapper">
                                {cartItems
                                    .map((item) => (
                                        <DrawerCard title={item.title}/>
                                ))}
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
    
   