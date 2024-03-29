import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './Header.css'

type HeaderProps = {
    setLogin: (state: boolean) => void,
    overflowHidden: () => void,
    modalRef: any
}

const Header: React.FC<HeaderProps> = ({ setLogin, overflowHidden, modalRef}) => {

    const activePage = useSelector((state: any) => state.activePage.value)
    const loginRef = React.useRef<HTMLLIElement>(null)
    const location = useLocation()
    

    const clickOnEnter = () => {
        setLogin(true);
        overflowHidden();
    }

    console.log('adjdiaodoandownd', activePage)

    const headerList = [
        {name: 'ИНФОРМАЦИЯ', url: "/", index: 0},
        {name: 'НОВОСТИ', url: "/News", index: 1},
        {name: 'ПРАЙС-ЛИСТ', url: "/Price-List", index: 2},
        {name: 'МАГАЗИН', url: "/Shop", index: 3},
        {name: 'КОНТАКТЫ', url: "/Contacts", index: 4}
    ]

    React.useEffect(() => {
        const loginClickOutside = (event: MouseEvent) => {
            const _event = event as MouseEvent & {
                path: Node[]
            }
             
            if (loginRef.current && !_event.path.includes(loginRef.current) && !_event.path.includes(modalRef.current)) {
                setLogin(false)
            }

            console.log('second')
        }

        document.body.addEventListener('click', loginClickOutside)

        return () => {
            document.body.removeEventListener('click', loginClickOutside)
            console.log("second's dead")
        }
    }, [])

    return(
        <div className="header">
            <div className={location.pathname === '/' ? 'first__container' : 'second__container'}>
                <div className="header__wrapper">
                    <div className="nav">
                        <div className="nav__item">
                            <div className="nav__list">
                                { location.pathname !== '/' && (
                                    <Link to="/"><div className="nav__list-svg">
                                        <svg className="mini-logo" xmlns="http://www.w3.org/2000/svg" width="111" height="24" viewBox="0 0 111 24"><path d="M13.93 8.17c5-1.67 5.34-7.88.45-7.88a5.06 5.06 0 0 0-4.06 2.88l-6.6 11.42A9.54 9.54 0 0 1 2.77 16 5.24 5.24 0 0 1 4 8.62L3 7.37c-5.14 3.28-3.63 12.75 5 12.75 7.26 0 10.66-8.81 5.93-11.95zM7.87 18.23a7.06 7.06 0 0 1-3.54-.85 12.72 12.72 0 0 0 1.23-1.75l4.13-7.15.66.07c5.76 1.21 3.47 9.68-2.48 9.68zM10.51 7l2-3.4c1.79-3.09 4.08-1.27 2.85 1C14.41 6.45 13 7 10.51 7z" fill="#fff"/><path d="M110.08 13.37l-.17.19a11.55 11.55 0 0 1-4.49 3.44c.4-.64.71-1.32 1-1.84l2.71-4.65c2.29-3.89-1.42-5.19-3.92-2.95l.5-.85h-2.46l-3.84 6.66-.17.19a5.29 5.29 0 0 1-3.71 1.82l2.32-4c1.49-2.57.12-5-2.2-5-1.89 0-3.35.76-4.77 3.21l-1.2 2.1-1 1.72-.13.15c-1.77 2.05-3.49 3.68-4.58 3.68-.54 0-.85-.38-.28-1.34l3.54-6.21c1.06-1.87 0-3.21-1.32-3.21a5 5 0 0 0-3.42 1.87l3.92-6.82H84L77.13 13.4l-.14.16A15.28 15.28 0 0 1 74 16.22c.78-2.34.62-5.92 2.13-9.07l-1.85-1c-1 1.39-3.23 4.6-5.45 7.2l-.17.19c-1.77 2.05-3.49 3.68-4.58 3.68-.54 0-.85-.38-.28-1.34l2.46-4.3a2.51 2.51 0 0 0-.35-3.33l-1.34-1.63a1 1 0 0 1 .14-1.42l-1.27-1.39C62 5.06 61.92 6.45 62.8 7.59l.21.28c-1.09 1.53-2.55 3.61-4.15 5.5l-.17.19c-1.77 2.05-4 3.68-5.76 3.68-1.51 0-2.41-.94-1.28-2.93l.24-.42c1.58.66 4.56.35 6.4-2.83l.35-.61c1.32-2.27 0-4-2-4a5.19 5.19 0 0 0-4.6 2.83l-2.34 4.11-.15.17a5.24 5.24 0 0 1-3.71 1.82l2.31-4a6 6 0 0 0 .92-2.81 2.1 2.1 0 0 0-2.22-2.2 2.86 2.86 0 0 0-1.6.54l3.12-5.41h-2.5L39 13.41l-.13.15c-1.77 2.05-3.49 3.68-4.58 3.68-.54 0-.85-.38-.28-1.34l2.45-4.3a2.51 2.51 0 0 0-.35-3.33l-1.38-1.65a1 1 0 0 1 .14-1.42L33.6 3.81c-1.39 1.25-1.51 2.64-.6 3.78l.21.28c-1.09 1.53-2.55 3.61-4.15 5.5l-.17.19c-1.77 2.05-3.49 3.68-4.58 3.68-.54 0-.85-.38-.28-1.34L28 9h-1.43A2.55 2.55 0 0 0 24 6.48a5.45 5.45 0 0 0-4.2 2.83l-3.44 5.95c-1 1.82-.31 3.49 1.68 3.49a6 6 0 0 0 3.4-1.6 1.9 1.9 0 0 0 2.13 1.6c2 0 4.36-2.17 6.4-4.53C31.13 12.85 32 11.62 34 9l.32.4a1.21 1.21 0 0 1 .14 1.39l-2.6 4.51c-1 1.82-.31 3.49 1.68 3.49 1.43 0 3-1.07 4.51-2.52a2.58 2.58 0 0 0 2.83 2.62 5.43 5.43 0 0 0 4.18-2.29 4.16 4.16 0 0 0 .54 0 7.2 7.2 0 0 0 3.26-1c-.13 1.77 1.16 3.12 3.33 3.12 2.79 0 5.55-2.17 7.58-4.53 1.18-1.37 2.1-2.6 4.06-5.26l.33.4a1.21 1.21 0 0 1 .14 1.39l-2.6 4.51c-1 1.82-.31 3.49 1.68 3.49s4.36-2.17 6.4-4.53c1.39-1.6 2.62-3.33 3.49-4.48-1 2.55-.45 7.13-2.78 7.13a1.37 1.37 0 0 1-1.16-.9l-1.53.8a2.67 2.67 0 0 0 2.68 2 6.65 6.65 0 0 0 .68 0h.07A8.61 8.61 0 0 0 75 17.06l-.84 1.47h2.48L80.38 12c3.78-4.74 5.46-4.13 4.39-2.31l-3.19 5.55c-1 1.81-.3 3.49 1.68 3.49 1.43 0 3-1.07 4.52-2.53 0 3.13 4.34 3.74 7 .38h.54A6.77 6.77 0 0 0 98 16l-4.47 7.75H96l7.34-12.77c2.74-3.73 4.46-2.36 3.82-1.25l-3.71 6.42a1 1 0 0 1-1.77 0l-1.39.66a2.67 2.67 0 0 0 2.69 2h.14c3.56-.07 5.9-2.2 7.91-4.53a1.54 1.54 0 0 0-.95-.91zm-55.9-3.45c1.42-2.43 3.92-2 2.45.52l-.35.61c-1.18 2-2.76 2-3.68 1.63zm-31.46 3.87c-1.49 2.34-3 3.45-4 3.45-.54 0-.85-.38-.28-1.34l3.42-6c1.32-2.29 3.94-1.7 2.74.52zm18.48 3.35a.92.92 0 0 1-1-.94 2.76 2.76 0 0 1 .43-1.27l.87-1.51A3.61 3.61 0 0 0 43.06 16a2.3 2.3 0 0 1-1.86 1.14zm2.57-2.38a2.65 2.65 0 0 1-1-2.22c0-1.75 1.7-4.6 3.09-4.6A.94.94 0 0 1 46.75 9a3 3 0 0 1-.47 1.46zm50.42-1.23h-.12A1.45 1.45 0 0 0 92.63 15a1.62 1.62 0 0 0 .24.83c-1.16 2-4 1.6-2.5-.94l1.87-3.23 1.18-2c1.72-2.93 4.08-1.77 2.6.78z" fill="#fff"/></svg>
                                    </div></Link>
                                )}
                                {headerList.map((item) => (
                                    <Link to={`${item.url}`}>
                                        <li className={`nav__list-item ${activePage === item.index ? 'list-item__active' : ''}`}>
                                            <a className={activePage === item.index ? 'list-item__active' : ''}>{item.name}</a>
                                        </li>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="nav__item">
                            <div className="enter-cart__wrapper nav__enter" >
                                <Link to="/Cart"><li className="svg-cart nav__enter-item"> 
                                    <svg fill="none" height="27" viewBox="0 0 30 27" width="25" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.39999 1.70001H6.60001" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                                        <path d="M6.60001 1.70001L11 18.9" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                                        <path d="M11.8 18.9H28.3" stroke="white" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                                        <path d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                                        <path d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                                        <path d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z" stroke="#ffffff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                                    </svg>
                                </li>
                                </Link> 
                                <li ref={loginRef} onClick={clickOnEnter} className="nav__enter-item"  >
                                    <svg className="nav__item-svg" width="18" height="18" viewBox="0 0 14 14" fill="red" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.51 10.93V7L11.57 6.97V3.03C11.5432 2.73627 11.3132 2.50208 11.02 2.47H9.84001C9.42972 2.47877 9.04692 2.2644 8.84001 1.91C8.70931 1.71193 8.64616 1.4769 8.66001 1.24C8.67084 0.967 8.78109 0.707377 8.97001 0.509999C9.13939 0.317686 9.36817 0.187462 9.62001 0.139999H10.94C11.5861 0.141159 12.213 0.359526 12.72 0.759999C13.0915 1.04444 13.3926 1.41055 13.6 1.83C13.7424 2.11102 13.8306 2.41634 13.86 2.73V10.93C13.8675 11.4256 13.7469 11.9147 13.51 12.35C13.3266 12.6767 13.0861 12.968 12.8 13.21C12.6117 13.3753 12.4034 13.5164 12.18 13.63C11.9517 13.75 11.705 13.8311 11.45 13.87C11.2368 13.8814 11.0232 13.8814 10.81 13.87H9.81001C9.55938 13.8709 9.31595 13.7863 9.12001 13.63C8.86601 13.4397 8.7002 13.1544 8.6606 12.8396C8.62101 12.5247 8.71102 12.2072 8.91001 11.96C9.07585 11.749 9.30865 11.6009 9.57001 11.54H10.84C10.985 11.5487 11.1289 11.5101 11.25 11.43C11.4158 11.3182 11.5137 11.13 11.51 10.93ZM6.23001 8.13L6.31001 8.06V8.05H1.31001C1.02275 8.05507 0.744175 7.9515 0.530006 7.76C0.334192 7.60288 0.196843 7.38454 0.140006 7.14C0.0582041 6.78747 0.147117 6.417 0.380006 6.14C0.562687 5.91914 0.817837 5.77031 1.10001 5.72H6.34001L6.26001 5.64L4.76001 4.14C4.47852 3.88755 4.33376 3.51636 4.37001 3.14C4.385 2.8933 4.47976 2.65816 4.64001 2.47C4.81391 2.25066 5.06364 2.10439 5.34001 2.06C5.69919 1.98021 6.07448 2.0853 6.34001 2.34L9.73001 5.73C9.76704 5.7695 9.80408 5.8084 9.84096 5.84714C9.95347 5.96529 10.0646 6.08197 10.17 6.21C10.2994 6.37637 10.3729 6.57937 10.38 6.79C10.397 6.99729 10.3554 7.20519 10.26 7.39C10.21 7.48867 10.146 7.57961 10.07 7.66L8.35001 9.38L6.50001 11.24C6.2936 11.4597 6.01093 11.5921 5.71001 11.61C5.35298 11.6414 5.00172 11.5046 4.76001 11.24C4.42308 10.8808 4.34712 10.3491 4.57001 9.91C4.62912 9.79175 4.70677 9.68372 4.80001 9.59L6.23001 8.13Z" fill="white"/>
                                    </svg>
                                    <a className="akor" href="#">ВХОД</a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>      
    )
}

export default Header;