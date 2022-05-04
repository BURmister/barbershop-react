import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


import './Information.css'
import NewsCard from '../../Components/NewsCard/NewsCard'


import imgShape from './imgs/Shape 1.svg'
import imgLogo from './imgs/index-logo.svg'
import imgCarousel from './imgs/Object.png'
import imgClear from './imgs/clear.svg'

function Information(props) {

    //контролируемые инпуты
    //input date
    const [dateValue, setDateValue]= React.useState();
    const onInputDate = (event) => {
        setDateValue(event.target.value)
    }

    //input time
    const [timeValue, setTimeValue]= React.useState();
    const onInputTime = (event) => {
        setTimeValue(event.target.value)
    }

    //input name
    const [nameValue, setNameValue]= React.useState();
    const onInputName = (event) => {
        setNameValue(event.target.value)
    }

    //input telephone-number
    const [telValue, setTelValue]= React.useState();
    const onInputTel = (event) => {
        setTelValue(event.target.value)
    }


    //проверка на хедер
    //запрос на бэкенд с целью получить новости
    React.useEffect(() => {
        props.isHeader()
        axios.get('https://6241abd3042b562927a77458.mockapi.io/news').then(res => {
          setNewsCards(res.data)
        })
    })
    
    const [newsCards, setNewsCards] = React.useState([])  


    return (
        <div className="Information__main">


            <div className="logo__wrapper" onClick={props.clickOnCloseMap}>
                    <div className="header__logo">  
                        <img src={imgLogo} width="371px" height="153px" alt="" />
                    </div>
            </div>

            <div className="container animate-features" onClick={props.clickOnCloseMap}>
                <div className="features__list">
                    <div className="features__list-item">
                        <div className="feature__h3-wrapper"><h3>быстро</h3></div>
                        <div className="feature__img-wrapper"><img src={imgShape} alt="" /></div>
                        <div className="feature__p-wrapper"><p> Мы делаем свою работу быстро! <br/>2 часа пролетят не заметно и вы - счастливый обладатель стильной стрижки-минутки </p></div>
                    </div>
                    <div className="features__list-item">
                        <div className="feature__h3-wrapper"><h3> круто </h3></div>
                        <div className="feature__img-wrapper"><img src={imgShape} alt="" /></div>
                        <div className="feature__p-wrapper"><p> Забудьте, как вы стригличь раньше. Мы сделаем из вас звезду кино!<br/> Во всяком случае внешне </p></div>
                    </div>
                    <div className="features__list-item">
                        <div className="feature__h3-wrapper"><h3> дорого </h3></div>
                        <div class="feature__img-wrapper"><img src={imgShape} alt="" /></div>
                        <div className="feature__p-wrapper"><p> Наши мастера - профессионалы своего дела и не могут стоить дешево. К тому же, разве цена не дает определенный статус </p></div>
                    </div>
                </div>
            </div>

            {/* В ЭТОМ БЛОКЕ НАХОДИТСЯ КАРУСЕЛЬ */}
            <div className="index_colums" >

                <div className="container" onClick={props.clickOnCloseMap}>
                    <div className="news__gallery-wrapper">
                
                        <div className="news">
                            <div className="news__item-h3"><h3> новости </h3></div>

                            {newsCards.slice(0, 2).map((obj) => (
                                <NewsCard li={obj.li} date={obj.date} /> 
                            ))}

                            <Link to="/News" ><div className="news__button"><a className="news_button akor"> все новости </a></div></Link>
                        </div>

                        {/* КАРУСЕЛЬ ЗДЕСЬ */}
                        <div className="gallery">
                            <div className="gallery__item-h3"><h3> фотогалерея </h3></div>
                            <div className="gallery__wrapperr">
                                <div className="gallery__item-img"><img src={imgCarousel} alt="" /></div>

                                {/* КНОПКИ ДЛЯ КАРУСЕЛИ */}
                                <div className="gallery__buttons">
                                    <div className="gallery__button-back"><button className="button gallery_button_back" type="button"> назад </button></div>
                                    <div className="gallery__button-next"><button className="button gallery_button_next" type="button"> вперед </button></div>
                                </div>
                            </div>
                        </div>    
                                      
                    </div>
                </div>

                <div className="info">
                    <div className="container">
                        <div className="info__wrapper">

                            <div className="contacts">
                                <div className="contacts__item-h3" onClick={props.clickOnCloseMap}><h3> контактная информация </h3></div>
                                <div className="contacts__item-p" onClick={props.clickOnCloseMap}>
                                    <p> Барбершоп Бородинский <br/>
                                        Адрес: г. Санкт-Петербург, <br/>Б. Конюшенная, д. 19/8 <br/>
                                        Телефон: 000-00-00-00
                                    </p>
                                </div>
                                <div className="contacts__item-time" onClick={props.clickOnCloseMap}>
                                    <p> Время работы:<br/>
                                        пн-пт: с 10:00 дo 22:00 <br/>
                                        сб-вс: с 10:00 до 19:00
                                    </p>
                                </div>
                                <div className="contacts__buttonS">
                                    <a className="contacts__button akor" onClick={props.clickOnMap}> как проехать </a>
                                    <Link to="/Contacts" ><a className="contacts__button akor"> обратаня связь </a></Link>
                                </div>
                            </div>

                            <div className="sign" onClick={props.clickOnCloseMap}>
                                <div className="sign__item-h3"><h3> записаться </h3></div>
                                <div  className="sign__itemS-wrapper">
                                    <div className="sign__item-p">
                                        <p className="appointment_info"> укажите желаемую дату и время и мы свяжемся с вами для подтверждения брони</p>
                                    </div>
                                    <div className="sign__form">
                                        <form className="appointment_form" action="" method="POST">
                                            <div className="sign__form-wrapper">
                                                <div className="sign__form-item first">
                                                    <p class="appointment__item" >
                                                    <label for="appointment-date">Дата</label>
                                                    <input onChange={onInputDate} value={dateValue} id="appointment-date" type="date" name="date" /></p>
                                                </div>
                                    
                                                <div className="sign__form-item second">
                                                    <p class="appointment__item">  
                                                    <label for="appointment-time">Время</label>
                                                    <input onChange={onInputTime} value={timeValue} id="appointment-time" type="time" name="time" /></p>
                                                </div>
                                    
                                                <div className="sign__form-item third">
                                                    <p class="appointment__item">  
                                                    <label for="appointment-name">Ваше имя</label>
                                                    <input onChange={onInputName} value={nameValue} id="appointment-name" type="text" name="name" placeholder="Борода" />
                                                    {nameValue && <img className="Information__clear" src={imgClear} onClick={() => setNameValue('')} /> }</p>
                                                </div>
                                    
                                                <div className="sign__form-item firth">
                                                    <p class="appointment__item"> 
                                                    <label for="appointment-phone">Телефон</label>
                                                    <input onChange={onInputTel} value={telValue} id="appointment-phone" type="tel" name="phone" placeholder="+7 232 323-23-23" />
                                                    {telValue && <img className="Information__clear" src={imgClear} onClick={() => setTelValue('')} /> }</p>
                                                </div>
                                            </div>
                                            <div className="sign__button"><button className="sign__button-item" type="submit"> Отправить </button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Information;