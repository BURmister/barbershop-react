import React from 'react';
import axios from 'axios'

import iconClear from '../imgs/clear.svg'
import DrawerCard from '../DrawerCard/DrawerCard'
import { useCart } from '../../Hooks/useCart'

import styles from'./Cart.css'

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))


function Cart(props) {

    React.useEffect(() => {
        axios.get('https://6241abd3042b562927a77458.mockapi.io/itemsOfCart').then((res) => {
          props.setCartItems(res.data)
        })
    }, [])

    const { totalPrice } = useCart()

    const [loading, setLoading] = React.useState(false)

    const onClickClose = () => {
        props.normalOverflow();
        props.clickOnClose();
    }

    const addNote = async (cartItems) => {
        try { 
            if (props.cartItems.length > 0) {
            setLoading(true)
            await axios.post('https://6241abd3042b562927a77458.mockapi.io/notes', {category: "order", cartItems})
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://6241abd3042b562927a77458.mockapi.io/itemsOfCart/' + item.id)
                await delay()
            }
            props.setCartItems([])
            alert('ваш заказ оформлен')   
            }
            else {
                alert('корзина пуста, мы воздух не продаем')
            }        
        } catch (error) {
            alert("не удалось обработать запрос")
        }
        setLoading(false)
    }

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://6241abd3042b562927a77458.mockapi.io/itemsOfCart/${id}`);
            props.setCartItems((prev) => prev.filter(item => item.id !== id));
            console.log(id)
        } catch (error) {
            alert("не удалось обработать запрос")
        }
    }

    const addToCart = (obj) => {
        try {
            const { data } = axios.post('https://6241abd3042b562927a77458.mockapi.io/itemsOfCart', obj) 
        } catch (error) {
            alert('товар не получилось добавить')
        }
    } 



    return(
        <div className={props.cart ? 'show' : 'hide'}>   
        
            <div className="drawer__wrapper">

                <div onClick={onClickClose} className="drawer__shadow" ></div>

                

                <div className='drawer'> 
                    <div className="drawer__flex">
                        
                        <div className="drawer__header">
                            <h2 className="drawer__h2">это ваша корзина</h2>
                            <div onClick={onClickClose} className="drawer__close"><img className="drawer__close__img" width="20" src={iconClear}></img></div>
                        </div>

                        <div className="drawer__content">
                            <div className="content__wrapper">
                                {props.cartItems.length 
                                    ? <>{loading 
                                    &&  <svg class="spinner" viewBox="0 0 50 50">
                                            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                                        </svg>
                                    }
                                    {props.cartItems
                                    .map((item) => (
                                        <DrawerCard 
                                         id={item.id}
                                         code={item.code}
                                         title={item.title}
                                         price={item.price}
                                         addToCart={(obj) => addToCart(obj)}
                                         userItemAmount={item.userAmount}
                                         onRemoveItem={onRemoveItem} 
                                        />
                                    ))}</>
                                : <div className="cart__void"> корзина пустая :( </div> 
                                }
                            </div>
                        </div>

                        <div className="drawer__container__footer">
                            <div className="drawer__footer">
                                <div className="drawer__priceCount"><p>итого к оплате:</p> <p>
                                    {totalPrice}
                                     ₽</p></div>
                                <button disabled={loading} onClick={() => addNote(props.cartItems)} className=" button drawer__button__buy">оформление заказа</button>
                            </div>
                        </div>

                        

                    </div>

                    
                </div>

                
                {loading && <div className="drawer__loading"></div>}

            </div> 
            

        </div>
    )
}

export default Cart;
    
   