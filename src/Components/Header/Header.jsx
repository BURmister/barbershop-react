import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


function Header(props) {

    const clickOnEnter = () => {
        props.clickOnLogIn();
        props.overflowHidden();
    }

    const clickOnCart = () => {
        props.clickOnCart()
        props.overflowHidden()
    }

    return (
        <div>

            <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="nav">
                        <div className="nav__item">
                            <div className="nav__list">
                                <Link to="/"><li class="nav__list-item"><a className="akor nav__a">ИНФОРМАЦИЯ</a></li></Link>
                                <Link to="/News"><li class="nav__list-item"><a className="akor nav__a">НОВОСТИ</a></li></Link>
                                <Link to="/Price-List"><li class="nav__list-item"><a className="akor nav__a">ПРАЙС-ЛИСТ</a></li></Link>
                                <Link to="/Shop"><li class="nav__list-item"><a className="akor nav__a">МАГАЗИН</a></li></Link>
                                <Link to="/Contacts"><li class="nav__list-item"><a className="akor nav__a">КОНТАКТЫ</a></li></Link>
                            </div>
                        </div>
                        <div className="nav__item">
                            <div className="enter-cart__wrapper nav__enter">
                                <li onClick={clickOnCart} className="nav__enter-item"  >   
                                    <svg fill="none" height="27" viewBox="0 0 30 27" width="25" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.39999 1.70001H6.60001" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                                        <path d="M6.60001 1.70001L11 18.9" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                                        <path d="M11.8 18.9H28.3" stroke="white" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                                        <path d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                                        <path d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                                        <path d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
                                    </svg>
                                </li>
                                <li onClick={clickOnEnter} className="nav__enter-item"  >
                                    <svg className="nav__item-svg" width="14" height="14" viewBox="0 0 14 14" fill="red" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.51 10.93V7L11.57 6.97V3.03C11.5432 2.73627 11.3132 2.50208 11.02 2.47H9.84001C9.42972 2.47877 9.04692 2.2644 8.84001 1.91C8.70931 1.71193 8.64616 1.4769 8.66001 1.24C8.67084 0.967 8.78109 0.707377 8.97001 0.509999C9.13939 0.317686 9.36817 0.187462 9.62001 0.139999H10.94C11.5861 0.141159 12.213 0.359526 12.72 0.759999C13.0915 1.04444 13.3926 1.41055 13.6 1.83C13.7424 2.11102 13.8306 2.41634 13.86 2.73V10.93C13.8675 11.4256 13.7469 11.9147 13.51 12.35C13.3266 12.6767 13.0861 12.968 12.8 13.21C12.6117 13.3753 12.4034 13.5164 12.18 13.63C11.9517 13.75 11.705 13.8311 11.45 13.87C11.2368 13.8814 11.0232 13.8814 10.81 13.87H9.81001C9.55938 13.8709 9.31595 13.7863 9.12001 13.63C8.86601 13.4397 8.7002 13.1544 8.6606 12.8396C8.62101 12.5247 8.71102 12.2072 8.91001 11.96C9.07585 11.749 9.30865 11.6009 9.57001 11.54H10.84C10.985 11.5487 11.1289 11.5101 11.25 11.43C11.4158 11.3182 11.5137 11.13 11.51 10.93ZM6.23001 8.13L6.31001 8.06V8.05H1.31001C1.02275 8.05507 0.744175 7.9515 0.530006 7.76C0.334192 7.60288 0.196843 7.38454 0.140006 7.14C0.0582041 6.78747 0.147117 6.417 0.380006 6.14C0.562687 5.91914 0.817837 5.77031 1.10001 5.72H6.34001L6.26001 5.64L4.76001 4.14C4.47852 3.88755 4.33376 3.51636 4.37001 3.14C4.385 2.8933 4.47976 2.65816 4.64001 2.47C4.81391 2.25066 5.06364 2.10439 5.34001 2.06C5.69919 1.98021 6.07448 2.0853 6.34001 2.34L9.73001 5.73C9.76704 5.7695 9.80408 5.8084 9.84096 5.84714C9.95347 5.96529 10.0646 6.08197 10.17 6.21C10.2994 6.37637 10.3729 6.57937 10.38 6.79C10.397 6.99729 10.3554 7.20519 10.26 7.39C10.21 7.48867 10.146 7.57961 10.07 7.66L8.35001 9.38L6.50001 11.24C6.2936 11.4597 6.01093 11.5921 5.71001 11.61C5.35298 11.6414 5.00172 11.5046 4.76001 11.24C4.42308 10.8808 4.34712 10.3491 4.57001 9.91C4.62912 9.79175 4.70677 9.68372 4.80001 9.59L6.23001 8.13Z" fill="white"/>
                                    </svg>
                                    <a className="akor">ВХОД</a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            </div>   
            
        </div>   
    )
}

export default Header;