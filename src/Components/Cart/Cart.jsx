import React from 'react';
import './Cart.css'
import axios from 'axios'

import iconClear from '../imgs/clear.svg'
import DrawerCard from '../DrawerCard/DrawerCard'

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))


function Cart(props) {

    React.useEffect(() => {
        axios.get('https://6241abd3042b562927a77458.mockapi.io/itemsOfCart').then((res) => {
          props.setCartItems(res.data)
        })
    }, [])

    const [loading, setLoading] = React.useState(false)

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

    const addNote = async (cartItems) => {
        try { 
            setLoading(true)
            await axios.post('https://6241abd3042b562927a77458.mockapi.io/notes', {category: "order", cartItems})
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://6241abd3042b562927a77458.mockapi.io/itemsOfCart/' + item.id)
                await delay()
            }
            props.setCartItems([])
            alert('ваш заказ оформлен')           
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
                                {loading 
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
                                        //  priceCounter={(price) => priceCounter(price)} 
                                         onRemoveItem={onRemoveItem} />
                                ))}
                            </div>
                        </div>

                        <div className="drawer__container__footer">
                            <div className="drawer__footer">
                                <div className="drawer__priceCount"><p>итого к оплате:</p> <p>
                                     {/* {priceCount}  */}
                                     ₽</p></div>
                                <button disabled={loading} onClick={() => addNote(props.cartItems)} className=" button drawer__button__buy">оформление заказа</button>
                            </div>
                        </div>

                        {loading && <div className="drawer__loading"></div>}

                    </div>

                    
                </div>

                


            </div> 
            

        </div>
    )
}

export default Cart;
    
   