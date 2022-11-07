import React,  { Component } from 'react';
import './Modal.css'

import iconUser from '../imgs/user.svg'
import iconLock from '../imgs/lock.svg'
import iconClear from '../imgs/clear.svg'
import iconVisible from '../imgs/view.svg'
import iconNotVisible from '../imgs/view-hide.svg'

type LoginProps = {
    normalOverflow: () => void,
    clickOnClose: () => void,
    modalRef: any
}

const Login: React.FC<LoginProps> = ({ normalOverflow, clickOnClose, modalRef}) => {

    // контролируемые инпуты
    // инпут логина
    const [loginValue, setLoginValue] = React.useState<string>();
    const onInputLogin = (event: { target: HTMLInputElement }) => {
        setLoginValue(event.target.value)
    }

    // инпут пароляй
    const [passwordValue, setPasswordValue] = React.useState<string>();
    const onInputPassword = (event: { target: HTMLInputElement }) => {
        setPasswordValue(event.target.value)
    }

    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const onClickClose = () => {
        normalOverflow();
        clickOnClose();
    }

    return(
        <div ref={modalRef}>
            <div onClick={onClickClose} className="modal__shadow"></div>
            <div className="modal">
                <div className="modal modal__login">
                    <h3>Личный кабинет</h3>  
                    <p className="modal__description">введите свой логин и пароль</p> 
                    <form className="login__form" action="#" method="post"> 

                        <p className="p-relative"> 
                            <input onChange={onInputLogin} value={loginValue} className="user__login" id="user__login" type="text" name="login" placeholder="email@example.com" />
                            {loginValue ?  <img onClick={() => setLoginValue('')} src={iconClear} className="clear" /> : <img className="login__icon-user" src={iconUser} width="20px"/>} 
                        </p> 
                        
                        <p className="p-relative"> 
                            <input onChange={onInputPassword} value={passwordValue} className="login__icon-password" id="user__password" type={passwordVisible ? "text" : "password"} name="password" placeholder="password123" /> 
                            { passwordValue ?  
                                <div> 
                                    <div onClick={() => setPasswordVisible(!passwordVisible)} >
                                        { passwordVisible ? <img src={iconNotVisible} className="eye-1" /> : <img src={iconVisible} className="eye"/>}
                                    </div>
                                    <img src={iconClear}  onClick={() => setPasswordValue('') }  className="clear"/> 
                                </div>  :
                                <img className="login__icon-lock" src={iconLock} width="20px"/>
                            } 
                        </p> 
                        
                        <p className="login__help"> 
                            <div className="login__help"> 
                                <label className="login__checkbox"> 
                                    <input type="checkbox" name="remember" className="visually__hidden" /> 
                                    <span className="checkbox__indicator"></span> 
                                    Запомните меня 
                                </label>    
                                <div className="restore__wrapper"> 
                                    <a className="restore">Я забыл пароль</a> 
                                </div> 
                            </div> 
                        </p> 
                        <button className="button login__button" type="submit">Войти</button> 
                    </form> 
                    <button onClick={onClickClose} className="modal__close" type="button"></button> 
                </div> 
            </div>
        </div>
    )
}

export default Login;
