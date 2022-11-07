import React from 'react';
import axios from 'axios'

//ReactComponents
import DrawerCard from '../../Components/DrawerCard/DrawerCard'
import { useCart } from '../../Hooks/useCart'


//Redux 
import { useAppDispatch } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { changeActivePage } from '../../redux/slice/activePageSlice'
import { addItem, removeItem, clearItems, fetchCart } from '../../redux/slice/cartSlice'


//Styles
import './Cart.css'


const delay = () => new Promise((resolve) => setTimeout(resolve, 100))


type CartProps = {
    isHeader: () => void,
    overflowHidden: () => void,
}

const Cart: React.FC<CartProps> = ({isHeader, overflowHidden}) => {

    const dispatch = useAppDispatch()
    const cart = useSelector((state: any) => state.cart)

    React.useEffect(() => {
        isHeader()
        dispatch(changeActivePage(100500))
        dispatch(fetchCart())
    }, [])

    const [loading, setLoading] = React.useState(false)

    const addNote = async (cartItems: []) => {
        try { 
            window.scrollTo(0, 0)
            overflowHidden()
            if (cart.cartItems.length > 0) {
                setLoading(true)
                await axios.post('https://6241abd3042b562927a77458.mockapi.io/notes', {category: "order", cartItems})
                cart.cartItems.map(async (item: {
                    id: string,
                    img: string,
                    code: string,
                    title: string,
                    price: number,
                    count: number,
                    producer: string,
                    rating: number
                }) => {
                    await axios.delete('https://6241abd3042b562927a77458.mockapi.io/itemsOfCart/' + item.id)
                    await delay()
                })
                dispatch(clearItems())
                alert('ваш заказ оформлен')   
            }
            else {
                alert('корзина пуста, а мы воздух не продаем')
            }        
        } catch (error) {
            alert("не удалось обработать запрос")
        }
        setLoading(false)
        overflowHidden()
    }

    const clearCart = () => {
        if (window.confirm('вы действительно хотите очистить корзину?')){
            cart.cartItems.map(async (item: {
                id: string,
                img: string,
                code: string,
                title: string,
                price: number,
                count: number,
                producer: string,
                rating: number
            }) => {
                await axios.delete('https://6241abd3042b562927a77458.mockapi.io/itemsOfCart/' + item.id)
                await delay()
            })
            dispatch(clearItems())
        }
    }

    return (
        <div className="drawer"> 
            <div className="drawer__wrapper">
                
            { cart.cartItems.length > 0  &&
                    <div className="drawer__header">
                        <h2 className="drawer__h2">ваша корзина</h2>
                        <button onClick={() => clearCart()} className="button drawer__button__clear">очистить</button>
                    </div> 
                }

                <div className="drawer__content">
                    {cart.cartItems.length 
                        ? <>
                            {loading 
                            &&  <svg className="spinner" viewBox="0 0 50 50">
                                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                                </svg>
                            }
                            {cart.cartItems
                            .map((item: {
                                id: string,
                                img: string,
                                code: string,
                                title: string,
                                price: number,
                                count: number,
                                producer: string,
                                rating: number
                            }) => (
                                <DrawerCard 
                                    id={item.id}
                                    img={item.img}
                                    code={item.code}
                                    title={item.title}
                                    price={item.price}
                                    count={item.count}
                                    producer={item.producer}
                                    rating={item.rating}
                                    overflowHidden={() => overflowHidden()}
                                    setLoading={(state) => setLoading(state)}
                                />
                            ))}
                        </>
                        : <div className="cart__void"> ваша корзина пустая :( </div> 
                    }
                </div>

                {cart.cartItems.length ?   
                    <div className="drawer__footer">
                        <div className="drawer__priceCount"><p>итого к оплате:</p> <p>
                            {cart.cartItems.length === 0 ? '0' : cart.totalPrice}
                                ₽</p></div>
                        <button disabled={loading} onClick={() => addNote(cart.cartItems)} className=" button drawer__button__buy">оформление заказа</button>
                    </div>
                    : 
                    <div className="cart__void"> вперед за покупками</div> 
                }
            </div>
                
            {loading && <div className="drawer__loading"></div>}
        </div>
    )
}

export default Cart;
    
   