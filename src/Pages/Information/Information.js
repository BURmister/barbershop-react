import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


import './Information.css'
import NewsCard from '../../Components/NewsCard/NewsCard'
import Carousel from '../../Components/Carousel/Carousel'


import imgShape from './imgs/Shape 1.svg'
import imgLogo from './imgs/index-logo.svg'
import imgClear from './imgs/clear.svg'
import imgCarousel__1 from './imgs/Object.png'
import imgCarousel__2 from './imgs/squad.jpg'
import imgCarousel__3 from './imgs/gwen.jpg'
import imgCarousel__4 from './imgs/gwen-filter.jpg'
import imgCarousel__5 from './imgs/nervyOnRoof.jpg'

function Information(props) {

    //проверка на хедер
    React.useEffect(() => {
        props.isHeader()
        }, [] )

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


    const addNote = ({dateValue, timeValue, nameValue, telValue}) => {
        try {
            axios.post('https://6241abd3042b562927a77458.mockapi.io/notes', {category: "record", dateValue, timeValue, nameValue, telValue})
            alert('ваша завка успешно отправлена')
        } catch (error) {
            alert("не удалось обработать запрос")
        }
    }


    return (
        <div className="Information__main">


            <div className="logo__wrapper">
                    <div className="header__logo">  
                        <img src={imgLogo} width="371px" height="153px" alt="" />
                    </div>
            </div>

            <div className="container animate-features">
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

                <div className="container">
                    <div className="news__gallery-wrapper">
                
                        <div className="news"> 
                            <div className="news__item-h3"><h3> новости </h3></div>

                            <div>
                                {props.newsCards.slice(0, 2).map((obj) => (
                                    <NewsCard li={obj.li} date={obj.date} /> 
                                ))}
                            </div>

                            <Link to="/News" ><div className="news__button"><a className="news_button akor"> все новости </a></div></Link>
                        </div>

                        {/* КАРУСЕЛЬ ЗДЕСЬ */}
                        <div className="gallery">
                            <div className="gallery__item-h3"><h3> фотогалерея </h3></div>
                                <div className="gallery__wrapperr">

                                    {/* <div className="slider">
                                        <div className="slider-line">
                                            <img className="gallery__item-img" src={imgCarousel__1} alt="" />
                                            <img className="gallery__item-img" src={imgCarousel__2} alt="" />  
                                        </div>
                                    </div> */}

                                    <Carousel>
                                        <div className="item-gallery"><img className="gallery__item-img" src={imgCarousel__4} alt="" /></div>
                                        <div className="item-gallery"><img className="gallery__item-img" src={imgCarousel__1} alt="" /> </div>
                                        <div className="item-gallery"><img className="gallery__item-img" src={imgCarousel__2} alt="" /> </div>
                                        <div className="item-gallery"><img className="gallery__item-img" src={imgCarousel__3} alt="" /> </div>
                                        <div className="item-gallery"><img className="gallery__item-img" src={imgCarousel__5} alt="" /> </div>
                                    </Carousel>                              
                    
                                    
                            </div>                           
                        </div>    
                                      
                    </div>
                </div>

                <div className="info">
                    <div className="container">
                        <div  className="info__wrapper">

                            <div className="contacts">
                                <div className="contacts__item-h3"><h3> контактная информация </h3></div>
                                <div className="contacts__info">
                                    <div className="contacts__item-p">
                                        <p> Барбершоп Бородинский <br/>
                                            Адрес: г. Санкт-Петербург, <br/>Б. Конюшенная, д. 19/8 <br/>
                                            Телефон: 000-00-00-00
                                        </p>
                                    </div>
                                    <div className="contacts__item-time">
                                        <p> Время работы:<br/>
                                            пн-пт: с 10:00 дo 22:00 <br/>
                                            сб-вс: с 10:00 до 19:00
                                        </p>
                                    </div>
                                </div>
                                <Link to="/Contacts" ><div className="sign__button"><a className="contacts__button sign__button-item "> как проехать | обратаня связь </a></div></Link>
                            </div>

                            <div className="sign">
                                
                                <div className="sign__form">
                                    <div className="appointment_form">
                                        <div className="sign__item-h3"><h3> записаться </h3></div>

                                        <div>
                                            <div className="sign__item-p">
                                                <p className="appointment_info"> укажите желаемую дату и время и мы свяжемся с вами для подтверждения брони</p>
                                            </div>
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
                                                    <input onChange={onInputTel} value={telValue} id="appointment-phone" type="tel" name="phone" placeholder="+7 232 323-23-23" inputmode="tel"/>
                                                    {telValue && <img className="Information__clear" src={imgClear} onClick={() => setTelValue('')} /> }</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sign__button"><button onClick={() => addNote({dateValue, timeValue, nameValue, telValue})} className="sign__button-item"> Отправить </button></div>
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