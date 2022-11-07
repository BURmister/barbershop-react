import React from 'react';
import ContentLoader from "react-content-loader"

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import "./ShopCard.css"
import iconPlus from '../imgs/plus.svg'
import gwen from './gwen-filter.jpg'


type shopCardObject = {
    id: string, 
    code: string, 
    title: string,
    img: string,
    price: number,
    producer: string,
    rating: number,
    count?: number
}

type ShopCardProps = {
    id: string, 
    code: string, 
    title: string,
    img: string,
    price: number,
    onPlus: (obj: shopCardObject) => void,
    status: string,
    producer: string,
    rating: number
}

const ShopCard: React.FC<ShopCardProps> = ({id, code, title, img, price, onPlus, status, producer, rating}) => {

    const dispatch = useDispatch()
    const cartItem = useSelector((state: any) => state.cart.cartItems.find((obj: shopCardObject) => Number(obj.code) === Number(code)))

    const onClickPlus = () => {
        onPlus({id, code, title, img, price, producer, rating, count: 1 })
    }

    const addedCount: number = cartItem ? cartItem.count : 0


    return(
        <>
            {status === 'loading' ? (
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

                    <Link className="slider__item-wrapper" to={`/shop/${code}`}>
                        <img className="slider__img" src={img} width="200px" height="165px" />
                        <div className="slider__a">
                            <li className="slider__li"><a href="../барбершоп/shop-item.html">{title}</a></li>
                        </div>
                    </Link>

                <div className="item__price">
                    <div className="price__wrapper"><li>{price} ₽</li></div>
                    <div onClick={onClickPlus} className="akor__wrapper"> 
                        <img src={iconPlus} className="button button__buy"></img> 
                        { addedCount > 0 && <span>{addedCount}</span>}
                    </div>
                </div>
            </div>
            )}
        
        
        </>
    )
}

export default ShopCard;