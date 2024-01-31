import React from 'react'
import CalendarImg from '../assets/icons/calendar.png'

function TuriPage() {
  return (
    <div className="turi">
        <div className="turi-row">
          <div className="turi-search__table">
            <div className="turi-search__sections">
              <div className="turi-box">
                <p className="turi-title">Отправление из:</p>
                <select className='turi-select1'>
                  <option>Ташкент</option>
                  <option>Хорезмская область</option>
                  <option>Ферганская область</option>
                  <option>Ташкентская область</option>
                  <option>Сырдарьинская область</option>
                  <option>Сурхандарьинская область</option>
                  <option>Самаркандская область</option>
                  <option>Наманганская область</option>
                  <option>Навоийская область</option>
                  <option>Кашкадарьинская область</option>
                  <option>Джизакская область</option>
                  <option>Бухарская область</option>
                  <option>Андижанская область</option>
                </select>
                </div>
              <div className="turi-box">
                <p className="turi-title">Куда:</p>
                <select className='turi-select1'>
                  <option>Мексико</option>
                  <option>Украина</option>
                  <option>Беларуссия</option>
                  <option>Дубаи</option>
                  <option>Флорида</option>
                  <option>Турция</option>
                  <option>Вашингтон</option>
                  <option>Япония</option>
                  <option>Канада</option>
                  <option>Росиия</option>
                  <option>Никарагуа</option>
                  <option>Греция</option>
                  <option>Германия</option>
                </select>
                </div>
              <div className="turi-box">
                <p className="turi-title">Период отправления:</p>
                <div className="turi-box__items">
                <div className="turi-box__item">От <img src={CalendarImg} /></div>
                <div className="turi-box__item">До <img src={CalendarImg} /></div>
                </div>
                </div>
              <div className="turi-box">
              <p className="turi-title">Ночей пребывания:
              <div className="turi-selects">
              <select className='turi-select2'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              <select className='turi-select2'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              </p>
              </div>
              <div className="turi-box">
              <p className="turi-title">Туристов:
              <div className="turi-item">2 взр.</div>
              </p>
              </div>
              <button className="turi-button">НАЙТИ</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TuriPage