

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import DateIcon from '../assets/icons/categorie/date-icon.svg'
import FoodIcon from '../assets/icons/categorie/food-icon.svg'
import PlaneIcon from '../assets/icons/categorie/plane-icon.svg'

const TelegramBotForm = ({ modalInfo, modal ,setModal}) => {

  const [tekshiruv, setTekshiruv] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    tel: "+998 ",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const apiToken = '6363926670:AAGMCzumLRvYglsRFwlG3iwgEynQRpjqn0U';
  const chatId = '1135324282';

  const message = `
      Yangi foydalanuvchi:
      Shahahar: ${modalInfo.card_name}  
      Bilet Narxi:${modalInfo.img_price}
      Uchish joyi: ${modalInfo.card_flymesta}
      Ovkatlanish:${modalInfo.card_food}
      Name: ${formData.name}
      Phone Number: ${formData.tel}
    `;

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      if (formData.name == '') {
        alert('iltimos Hamma joylarni toldiring')
      }
      else {

        
        await axios.post(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
          chat_id: chatId,
          text: message,
        });
        setTekshiruv(true);
        // Malumotlarni uzatganizdan keyin input ishidegi malumot ochib ketadi
        setFormData({ name: "", tel: "+998" });
      }


    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };

  if (formData.name == ! '' || formData.tel == ! '+998 ') {
    setTekshiruv(true);
  }

  console.log(modalInfo.id);

  return (
    <div className={modal ? "categorie__modal-container" : "none"} >
      <div className="categorie__modal" >
        <div className="categorie__modal-body">
          <div className="categorie__modal__toptitle">
            <h3 className="categorie__modal__toptitle-title">Заказать тур</h3>
            <CloseOutlined className='categorie__modal__toptitle-icon' onClick={() => setModal(false)}/>
          </div>
          <form className='categorie__modal-form' onSubmit={handleSubmit} method='get'>
            <hr />
            <div className="categorie__modal__info">
              <h3 className="categorie__modal__info-title">{modalInfo.card_name}</h3>
              <p className="categorie__modal__info-price">{modalInfo.img_price}</p>
              <div className="categorie__offer__card__wrapper">
                <div className="categorie__offer__card__wrapper-wrap">
                  <img src={DateIcon} alt="" />
                  <p className="categorie__offer__card__wrapper-date">{modalInfo.card_data} -  {modalInfo.card_data_day}</p>
                </div>
                <div className="categorie__offer__card__wrapper-wrap">
                  <img src={PlaneIcon} alt="" />
                  <p className="categorie__offer__card__wrapper-fly">{modalInfo.card_flymesta}</p>
                </div>
                <div className="categorie__offer__card__wrapper-wrap">
                  <img src={FoodIcon} alt="" />
                  <p className="categorie__offer__card__wrapper-fly">{modalInfo.card_food}</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="categorie__modal__form">
              <div className="categorie__modal__form-wrap">
                <label htmlFor="name">Ваше имя</label>
                <input className='input-name' type="text" name='name' value={formData.name} onChange={handleChange} />
              </div>
              <div className="categorie__modal__form-wrap">
                <label htmlFor="tel">Ваш телефон</label>
                <input className='input-number' type="tel" name='tel' value={formData.tel} onChange={handleChange} placeholder='+998' />
              </div>
              <div className="categorie__modal-button">
                <button onClick={setTekshiruv} className='categorie__modal__form-btn'>Отправить</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default TelegramBotForm;
