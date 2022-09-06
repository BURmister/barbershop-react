import React from 'react'
import AppContext from '../Components/Context/Context'

export const useCart = () => {

    const { cartItems, setCartItems } = React.useContext(AppContext)
    let totalPrice = cartItems.reduce( (sum, obj) => obj.price*obj.amount + sum, 0)

    return { cartItems, setCartItems, totalPrice }
}
