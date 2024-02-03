import React, { useEffect, useState } from 'react'
import DateIcon from '../../assets/icons/categorie/date-icon.svg'
import FoodIcon from '../../assets/icons/categorie/food-icon.svg'
import PlaneIcon from '../../assets/icons/categorie/plane-icon.svg'
import { NavLink } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons'
import TelegramBotForm from '../../constants/telegram'
function Categories() {
    const categorie = [
        {
            id: 1,
            img: '../../../public/images/categorie/tursya-img1.png',
            img_title: 'ТУРЦИЯ',
            img_price: '8 680 000',
            img_people: 'за 1x',
            card_name: 'Анталья',
            card_data: '29.10.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'все включено',
        },
        {
            id: 2,
            img: '../../../public/images/categorie/tursiya-img2.png',
            img_title: 'ТУРЦИЯ',
            img_price: '10 580 000',
            img_people: 'за 1x',
            card_name: 'Турецкая Ривьера',
            card_data: '20.11.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'завтрак + ужин  ',
        },
        {
            id: 3,
            img: '../../../public/images/categorie/tursiya-img3.png',
            img_title: 'ТУРЦИЯ',
            img_price: '7 100 000',
            img_people: 'за 1x',
            card_name: 'КАППАДОКИЯ',
            card_data: '11.11.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'завтрак + ужин',
        },
        {
            id: 4,
            img: '../../../public/images/categorie/tursiya-img4.png',
            img_title: 'ТУРЦИЯ',
            img_price: '7 800 000',
            img_people: 'за 1x',
            card_name: 'Великолепный Век',
            card_data: '10.11.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из ',
            card_food: 'завтрак + ужин',
        },
        {
            id: 5,
            img: '../../../public/images/categorie/vetnam-img1.png',
            img_title: 'ВЬЕТНАМ',
            img_price: '12 177 000',
            img_people: 'за 1x',
            card_name: 'ФУКУОК',
            card_data: '07.11.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'завтрак',
        },
        {
            id: 6,
            img: '../../../public/images/categorie/katar-img1.png',
            img_title: 'КАТАР',
            img_price: '5 602 000',
            img_people: 'за 1x',
            card_name: 'ДОХА',
            card_data: '29.10.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'завтрак',
        },
        {
            id: 7,
            img: '../../../public/images/categorie/oae-img1.png',
            img_title: 'ОАЭ',
            img_price: '6 376 000',
            img_people: 'за 1x',
            card_name: 'ДУБАЙ + АБУ ДАБИ',
            card_data: '04.11.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'завтрак + ужин',
        },
        {
            id: 8,
            img: '../../../public/images/categorie/vetnam-img2.png',
            img_title: 'ВЬЕТНАМ',
            img_price: '13 900 000',
            img_people: 'за 1x',
            card_name: 'ФУКУОК',
            card_data: '28.11.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 9,
            img: '../../../public/images/categorie/umra-img1.png',
            img_title: 'УМРА',
            img_price: '19 150 000',
            img_people: 'за 1x',
            card_name: 'Umra Safari',
            card_data: '06.11.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: '2х разовое питание',
        },
        {
            id: 10,
            img: '../../../public/images/categorie/tursiya-img5.png',
            img_title: 'ТУРЦИЯ',
            img_price: '7 300 000',
            img_people: 'за 1x',
            card_name: 'Анталия',
            card_data: '29.12.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 11,
            img: '../../../public/images/categorie/egipet-img2.png',
            img_title: 'ЕГИПЕТ',
            img_price: '6 900 000',
            img_people: 'за 1x',
            card_name: 'Шарм эль шейх',
            card_data: '17.11.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        }
        ,
        {
            id: 12,
            img: '../../../public/images/categorie/tursiya-img6.png',
            img_title: 'ТУРЦИЯ',
            img_price: '9 400 000',
            img_people: 'за 1x',
            card_name: 'Турецкая Ривьера на Новый год',
            card_data: '27.12.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 13,
            img: '../../../public/images/categorie/umra-img2.png',
            img_title: 'Умра',
            img_price: '19 500 000',
            img_people: 'за 1x',
            card_name: 'Umra Safari',
            card_data: '25.11.2023',
            card_data_day: '10 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: '2х разовое питание',
        },
        {
            id: 14,
            img: '../../../public/images/categorie/oae-img2.png',
            img_title: 'ОАЭ',
            img_price: '4 500 000',
            img_people: 'за 1x',
            card_name: 'Дубай',
            card_data: '09.11.2023',
            card_data_day: '5 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 15,
            img: '../../../public/images/categorie/tursiya-img7.png',
            img_title: 'ТУРЦИЯ',
            img_price: '5 200 000',
            img_people: 'за 1x',
            card_name: 'Каппадокия',
            card_data: '15.11.2023',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 16,
            img: '../../../public/images/categorie/malaysiya-img1.png',
            img_title: 'МАЛАЙЗИЯ ',
            img_price: '14 000 000',
            img_people: 'за 1x',
            card_name: 'Куала-Лумпур',
            card_data: '09.09.2022',
            card_data_day: '8 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 17,
            img: '../../../public/images/categorie/vetnam-img3.png',
            img_title: 'ВЬЕТНАМ ',
            img_price: '15 000 000',
            img_people: 'за 1x',
            card_name: 'о. Фукуок',
            card_data: '01.11.2022',
            card_data_day: '9 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 18,
            img: '../../../public/images/categorie/azerbayjan-img1.png',
            img_title: 'АЗЕРБАЙДЖАН ',
            img_price: '8 600 000',
            img_people: 'за 1x',
            card_name: 'НАФТАЛАН',
            card_data: '11.09.2022',
            card_data_day: '8 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 19,
            img: '../../../public/images/categorie/gruziya-img1.png',
            img_title: 'ГРУЗИЯ ',
            img_price: '5 000 000',
            img_people: 'за 1x',
            card_name: 'Тбилиси, Батуми, Боржоми.',
            card_data: '01.02.2022',
            card_data_day: '8 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 20,
            img: '../../../public/images/categorie/tursiya-img8.png',
            img_title: 'ТУРЦИЯ ',
            img_price: '8 000 000',
            img_people: 'за 1x',
            card_name: 'Анталия',
            card_data: '06.08.2022',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 21,
            img: '../../../public/images/categorie/oae-img3.png',
            img_title: 'ОАЭ ',
            img_price: '7 000 000',
            img_people: 'за 1x',
            card_name: 'Дубай',
            card_data: '20.09.2022',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },

        {
            id: 22,
            img: '../../../public/images/categorie/egipet-img2.png',
            img_title: 'ЕГИПЕТ',
            img_price: '7 500 000',
            img_people: 'за 1x',
            card_name: 'Шарм-эль-Шейх',
            card_data: '14.05.2022',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 21,
            img: '../../../public/images/categorie/oae-img3.png',
            img_title: 'ОАЭ ',
            img_price: '7 000 000',
            img_people: 'за 1x',
            card_name: 'Дубай',
            card_data: '20.09.2022',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },
        {
            id: 21,
            img: '../../../public/images/categorie/oae-img3.png',
            img_title: 'ОАЭ ',
            img_price: '7 000 000',
            img_people: 'за 1x',
            card_name: 'Дубай',
            card_data: '20.09.2022',
            card_data_day: '7 ночей',
            card_flymesta: 'вылет из Ташкента',
            card_food: 'По концепции отеля',
        },

    ]
    const [modal, setModal] = useState(false)
    const [number, setNumber] = useState(18)
    const [modalInfo, setModalInfo] = useState({
        id: "",
    })

    function openModal(id, img_price, card_name, card_data, card_data_day, card_flymesta, card_food) {

        setModalInfo({
            id: id,
            img_price: img_price,
            card_name: card_name,
            card_data: card_data,
            card_data_day: card_data_day,
            card_flymesta: card_flymesta,
            card_food: card_food,
        })
        setModal(true)
    }
    function seeProduct() {
        if (categorie.length >= number) {
            setNumber(number + 1)
        }
        if (categorie.length <= number) {
            alert("boshqa ma'lumot yo'q")
        }
    }

    return (
        <>
            <div className='categorie'>
                <div className="container">
                    <TelegramBotForm modalInfo={modalInfo} modal={modal} setModal={setModal} />
                    <div className="categorie-row">
                        <div className="categorie__toptitle">
                            <div className="categorie__toptitle-wrap">
                                <h1 className="categorie__toptitle-title">
                                    Специальные <span>предложения</span>
                                </h1>
                            </div>
                            <div className="categorie__toptitle-wrap2">
                                <p className='categorie__toptitle-text'>Лучшие предложения</p>
                            </div>
                        </div>
                        <div className="categorie__offer">
                            <div className="categorie__offer__col">
                                {
                                    categorie.slice(0, number).map((item) => (
                                        <div className="categorie__offer__card" key={item.id} onClick={() => openModal(item.id, item.img_price, item.card_name, item.card_data, item.card_data_day, item.card_flymesta, item.card_food)}>
                                            <div className="categorie__offer__card-content">
                                                <div className="categorie__offer__card-imginfo">
                                                    <div className="categorie__offer__card-imginfo-wrap">
                                                        <p className="categorie__offer__card-imginfo-price">{item.img_price} </p>
                                                        <p className="categorie__offer__card-imginfo-people">{item.img_people}</p>
                                                    </div>
                                                    <div className="categorie__offer__card-imginfo-wrap2">
                                                        <p className="categorie__offer__card-imginfo-title">{item.img_title}</p>
                                                    </div>
                                                </div>
                                                <div className="categorie__offer__card__image">
                                                    <img src={item.img} alt="" />
                                                </div>
                                            </div>
                                            <div className="categorie__offer__card-info">
                                                <div className="categorie__offer__card__toptitle">
                                                    <h3 className="categorie__offer__card__toptitle-title">{item.card_name}</h3>
                                                </div>
                                                <div className="categorie__offer__card__wrapper">
                                                    <div className="categorie__offer__card__wrapper-wrap">
                                                        <img src={DateIcon} alt="" />
                                                        <p className="categorie__offer__card__wrapper-date">{item.card_data} </p>
                                                        -
                                                        <p className="categorie__offer__card__wrapper-day">{item.card_data_day} </p>
                                                    </div>
                                                    <div className="categorie__offer__card__wrapper-wrap">
                                                        <img src={PlaneIcon} alt="" />
                                                        <p className="categorie__offer__card__wrapper-fly">{item.card_flymesta} </p>
                                                    </div>
                                                    <div className="categorie__offer__card__wrapper-wrap">
                                                        <img src={FoodIcon} alt="" />
                                                        <p className="categorie__offer__card__wrapper-fly">{item.card_food}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="categorie__offer-button">
                                <NavLink to='/tour'><button className='categorie__offer-button-btn'>Показать еще</button></NavLink>
                                <button className='categorie__offer-button-btn' onClick={() => seeProduct()}> Yana korsatish</button>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Categories;