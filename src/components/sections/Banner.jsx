import React , { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// const [dropdown,setDropdown] = useState(false)

// function DropdownToggle(){
//     setDropdown(true)
// }

// useEffect(function(){
//     DropdownToggle()
// },[dropdown])

function Banner() {
  return (
    <section className="banner">
        <div className="container">
            <div className="banner-background"></div>
            <div className="banner-row">
                <div className="banner__toptitle">
                    <h1 className="banner__toptitle-title">
                        Путешествуйте легко и выгодно!
                    </h1>
                </div>
                <div className="banner__form">
                    <div className="banner__form-wrapper">
                        <div className="banner__form-wrapper-links">
                            <Link className='banner__form-wrapper-links-item'>Авиабилеты</Link>
                            <Link to='/tour' className='banner__form-wrapper-links-item'>Туры</Link>
                        </div>
                    </div>
                    <div className="banner__form__avia">
                        <div className="banner__form__avia-wrapper-inputs">
                            <input  className='banner__form__avia-wrapper-inputs-input' type="text" placeholder='Откуда *' />
                            <input  className='banner__form__avia-wrapper-inputs-input' type="text" placeholder='Куда *' />
                            <input  className='banner__form__avia-wrapper-inputs-input' type="text" placeholder='Дата *' />
                            <div className='banner__form__avia-wrapper-inputs-button'>
                                <div className='banner__form__avia-wrapper-inputs-button-wrap'>
                                    <p>Пассажиры:</p>
                                    <p>1</p>
                                </div>
                                <div className='banner__form__avia-wrapper-inputs-button-wrap'>
                                    <p className='banner__form__avia-wrapper-inputs-button-wrap-text'>Эконом</p>
                                </div>
                            </div>
                            
                        </div>
                        <div  className="banner__form__avia__dropdown__all">
                            <div className="banner__form__avia__dropdown">
                                <div className="banner__form__avia__dropdown__top">
                                    <div className="banner__form__avia__dropdown-wrapper">
                                        <div className="banner__form__avia__dropdown__texts">
                                            <p className='banner__form__avia__dropdown__texts-toptext'>Взрослые</p>
                                            <p className='banner__form__avia__dropdown__texts-subtext'>Старше 12 лет</p>
                                        </div>
                                        <div className="banner__form__avia__dropdown__buttons">
                                            <button className="banner__form__avia__dropdown__buttons-btn banner__form__avia__dropdown__buttons-btn-one">-</button>
                                            <p className="banner__form__avia__dropdown__buttons-num">1</p>
                                            <button className="banner__form__avia__dropdown__buttons-btn banner__form__avia__dropdown__buttons-btn-two">+</button>
                                        </div>
                                    </div>
                                    <div className="banner__form__avia__dropdown-wrapper">
                                        <div className="banner__form__avia__dropdown__texts">
                                            <p className='banner__form__avia__dropdown__texts-toptext'>Дети</p>
                                            <p className='banner__form__avia__dropdown__texts-subtext'>От 2 до 12 лет</p>
                                        </div>
                                        <div className="banner__form__avia__dropdown__buttons">
                                            <button className="banner__form__avia__dropdown__buttons-btn banner__form__avia__dropdown__buttons-btn-one">-</button>
                                            <p className="banner__form__avia__dropdown__buttons-num">0</p>
                                            <button className="banner__form__avia__dropdown__buttons-btn banner__form__avia__dropdown__buttons-btn-two">+</button>
                                        </div>
                                    </div>
                                    <div className="banner__form__avia__dropdown-wrapper">
                                        <div className="banner__form__avia__dropdown__texts">
                                            <p className='banner__form__avia__dropdown__texts-toptext'>Младенцы</p>
                                            <p className='banner__form__avia__dropdown__texts-subtext'>До 2 лет, без места</p>
                                        </div>
                                        <div className="banner__form__avia__dropdown__buttons">
                                            <button className="banner__form__avia__dropdown__buttons-btn banner__form__avia__dropdown__buttons-btn-one">-</button>
                                            <p className="banner__form__avia__dropdown__buttons-num">0</p>
                                            <button className="banner__form__avia__dropdown__buttons-btn banner__form__avia__dropdown__buttons-btn-two">+</button>
                                        </div>
                                    </div>
                                </div>
                                <hr  />
                                <div className="banner__form__avia__dropdown__bottom">
                                    <div className="banner__form__avia__dropdown__bottom-wrap">
                                        <input type="checkbox" />
                                        <p className='banner__form__avia__dropdown__bottom-text'>Эконом</p>
                                    </div>
                                    <div className="banner__form__avia__dropdown__bottom-wrap">
                                        <input type="checkbox" />
                                        <p className='banner__form__avia__dropdown__bottom-text'>Комфорт</p>
                                    </div>
                                    <div className="banner__form__avia__dropdown__bottom-wrap">
                                        <input type="checkbox" />
                                        <p className='banner__form__avia__dropdown__bottom-text'>Бизнес</p>
                                    </div>
                                    <div className="banner__form__avia__dropdown__bottom-wrap">
                                        <input type="checkbox" />
                                        <p className='banner__form__avia__dropdown__bottom-text'>Первый класс</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner__form__avia-wrapper-chekbox">
                            <div className="banner__form__avia-wrapper-chekbox-wrap">
                                <input type="checkbox" name="" id="" />
                                <p>Чартеры</p>
                            </div>
                            <div className="banner__form__avia-wrapper-chekbox-wrap">
                                 <input type="checkbox" name="" id="" />
                                <p>Прямые рейсы</p>
                            </div>
                            <div className="banner__form__avia-wrapper-chekbox-wrap">
                                 <input type="checkbox" name="" id="" />
                                 <p>± 1 день</p>
                            </div>
                        </div>
                        
                        <div className="banner__form__avia-button">
                            <button className='banner__form__avia-button-btn' type='submit'>Найти билеты
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M7.16614 24.3651L9.38771 24.3651L16.791 14.9865L21.4803 14.9865C22.1022 14.9865 22.6986 14.7394 23.1383 14.2997C23.578 13.86 23.825 13.2636 23.825 12.6418C23.825 12.02 23.578 11.4236 23.1383 10.9839C22.6986 10.5442 22.1022 10.2971 21.4803 10.2971L16.6679 10.2971L9.26462 0.918456L7.16731 0.918456L10.4616 10.2971L5.06766 10.2971L2.72299 6.78013L0.37832 6.78013L2.72299 12.6418L0.37832 18.5035L2.72299 18.5035L5.06766 14.9865L10.56 14.9865L7.16614 24.3651Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Banner