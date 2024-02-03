// const sendTelegram=()=>{
//     event.preventDefault()
//     let telegram_bot_id = '6363926670:AAGMCzumLRvYglsRFwlG3iwgEynQRpjqn0U';
//     let chat_id = 1135324282;
//     let message = 'ok';
//     let settings = {
//         'async':true,
//         'crossDomain':true,
//         'url':'https://api.telegram.org/bot'+telegram_bot_id+ '/sendMessage',
//         'method':'POST',
//         'headers':{
//             'Content-Type':'application/json',
//             'cache-control':'no-cache',
//         },
//         'data':JSON.stringify({
//             'chatd_id':chat_id,
//             'text':message
//         })
//     };
//     $.ajax(settings).done(function(response){
//         console.log(response);
//     });
//     return false
// }

// export default sendTelegram

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import DateIcon from '../assets/icons/categorie/date-icon.svg'
import FoodIcon from '../assets/icons/categorie/food-icon.svg'
import PlaneIcon from '../assets/icons/categorie/plane-icon.svg'

const TelegramBotForm = ({ categorie }) => {

  const [tekshiruv, setTekshiruv] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    // tel: '+998 ',
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiToken = '6363926670:AAGMCzumLRvYglsRFwlG3iwgEynQRpjqn0U';
    const chatId = '1135324282'; 
    
    const message = `
      Yangi foydalanuvchi:  
      Name: ${formData.name}
    `;

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
        setFormData({ name: '' });
      }


    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };

  if (formData.name == ! '') {
    setTekshiruv(true);
  }


  return (
    <div className="categorie__modal-container">
{
    categorie.map((item)=>(
    <div className="categorie__modal" key={item.id}>
        <div className="categorie__modal-body">
            <div className="categorie__modal__toptitle">
            <h3 className="categorie__modal__toptitle-title">Заказать тур</h3>
            <CloseOutlined className='categorie__modal__toptitle-icon' />
            </div>
            <form className='categorie__modal-form' onSubmit={handleSubmit} method='get'>
                <hr />
                <div className="categorie__modal__info">
                <h3 className="categorie__modal__info-title">{item.card_name}</h3>
                <p className="categorie__modal__info-price">{item.img_price} {item.img_people}</p>
                <div className="categorie__offer__card__wrapper">
                    <div className="categorie__offer__card__wrapper-wrap">
                        <img src={DateIcon} alt="" />
                        <p className="categorie__offer__card__wrapper-date">{item.card_data} - {item.card_data_day} </p>
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
                <hr />
                <div className="categorie__modal__form">
                <div className="categorie__modal__form-wrap">
                    <label htmlFor="name" value={formData.name} onChange={handleChange}>Ваше имя</label>
                    <input className='input-name' type="text" name='name' />
                </div>
                {/* <div className="categorie__modal__form-wrap">
                    <label htmlFor="number">Ваш телефон</label>
                    <input className='input-number' type="text" name='number' value={formData.tel} onChange={handleChange} placeholder='+998' />
                </div> */}
                <div className="categorie__modal-button">
                    <button onClick={setTekshiruv} className='categorie__modal__form-btn'>Отправить</button>
                </div>
                </div>
            </form>
        </div>
    </div>
    ))
}
</div>
  );
};

export default TelegramBotForm;
