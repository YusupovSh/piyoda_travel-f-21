import React from 'react'

function AboutHome() {
    const abouthome = [
        {
            id:1,
            number:'01',
            title:'ЗАБРОНИРУЙТЕ',
            text:'Оставьте заявку и наш менеджер свяжется с Вами. Мы ответим на все интересующие Вас вопросы и поможем выбрать оптимальный тур',
        },
        {
            id:2,
            number:'02',
            title:'ОПЛАТИТЕ',
            text:'Быстро, надёжно и без переплат. Оплатить можно банковской картой, перечислением на расчётный счёт или наличными через кассу.',
        },
        {
            id:3,
            number:'03',
            title:'ПОЛУЧИТЕ ДОКУМЕНТЫ',
            text:'Быстро, надёжно и без переплат. Оплатить можно банковской картой, перечислением на расчётный счёт или наличными через кассу.',
        },
        {
            id:4,
            number:'04',
            title:'ПРИЯТНОГО ПУТЕШЕСТВИЯ!',
            text:'Компания "A-travel" желает Вам приятного путешествия. Растворитесь в удовольствиях и наслаждайтесь каждым мгновением!',
        },
    ]
  return (
    <div className='abouthome'>
        <div className="container">
            <div className="abouthome-row">
                <div className="abouthome__toptitle">
                    <div className="abouthome__toptitle-wrap">
                        <h1 className="abouthome__toptitle-title">
                            Как мы <span>работаем</span>
                        </h1>
                    </div>
                    <div className="abouthome__toptitle-wrap2">
                        <p className='abouthome__toptitle-text'>Купите путешествие онлайн за 4 шага!</p>
                    </div>
                </div>
                <div className="abouthome__col">
                    {
                        abouthome.map((item)=>(
                            <div className="abouthome__col__card" key={item.id}>
                                <div className="abouthome__col__card__info">
                                    <span className='abouthome__col__card-number'>{item.number}</span>
                                    <h3 className="abouthome__col__card-title">{item.title}</h3>
                                    <p className="abouthome__col__card-text">{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutHome