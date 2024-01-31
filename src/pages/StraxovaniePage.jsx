import React from 'react'
import PaymentImg from '../assets/icons/payment.jpg'

function StraxovaniePage() {
  return (
    <div className="strax">
      <div className="strax-row">
      <div className="strax-header">
            <h2>ОНЛАЙН ОФОРМЛЕНИЕ ПОЛИСА</h2>
          </div>

          <div className="container">
            <div className="strax-table">
              <form  className="strax-table__form">
                <div className="strax-table__left">
                  <h4 className="strax-table__title">Рассчитать стоимость Вашего полиса</h4>
                  <input type="text" className="strax-table__input" placeholder=' Укажите страну...'/>
                  <h4 className="strax-table__title">Укажите период поездки</h4>
                  <div className="strax-table__item">
                    <div>
                      <p>Начало страхования</p>
                      <input type="text" placeholder='Укажите дату'/>
                    </div>
                    <div>
                      <p>Конец страхования</p>
                      <input type="text" placeholder='Укажите дату'/>
                    </div>
                    
                  </div>
                  <h4 className="strax-table__title">Укажите цель поездки</h4>
                  <div className="strax-table__item2">
                    <div>
                      <input type="radio" name="" id="input1" />
                    <label htmlFor="input1">Путешествие</label>
                    </div>
                    <div>
                      <input type="radio" name="" id="input2" />
                    <label htmlFor="input2">Обучение за рубежом</label>
                    </div>
                    <div>
                      <input type="radio" name="" id="input3" />
                    <label htmlFor="input3">Спорт (активный отдых)</label>
                    </div>
                    <div>
                      <input type="radio" name="" id="input4" />
                    <label htmlFor="input4">Работа</label>
                    </div>
                  </div>
                  <h4 className="strax-table__title">Дополнительное страхование</h4>
                  <div className="strax-table__item3">
                  <input type="checkbox" name="" id="input" />
                    <label htmlFor="input">Я хочу защиту от COVID-19</label>
                  </div>
                  <h4 className="strax-table__title">Укажите количество участников поездки</h4>
                  <div className="strax-table__item3">
                  <input type="checkbox" name="" id="inputt" />
                    <label htmlFor="inputt">Путешествуем с семьей</label>
                  </div>
                  <h4 className="strax-table__title">Укажите дату рождения участников поездки</h4>
                  <div className="strax-table__item3 strax-table__item3__input">
                    <label htmlFor="inputtt">1-й путешественник</label>
                    <input type="date" name="" id="inputtt" />
                  </div>
                  <div className="strax-table__item3">
                  <input type="checkbox" name="" id="input" />
                    <label htmlFor="input">Согласен с условиями публичной оферты страхования</label>
                  </div>
                  <div className="strax-table__button">
                  <button>
                  Оформить онлайн
                  </button>  
                  </div>
                  
                </div>  
                <div className="strax-table__right">
                <h4 className="strax-table__title">Стоимость полиса</h4>
                <h3><b>сум</b></h3>
                <div className="strax-table__right__img">
                  <img src={PaymentImg} alt="" />
                </div>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default StraxovaniePage