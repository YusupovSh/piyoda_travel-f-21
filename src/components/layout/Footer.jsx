import { FacebookOutlined, InstagramOutlined, SendOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-cards">
            <div className="footer-card">
              <Link to='/'><h1  className='header-logo-title'>Piyoda-Travel</h1></Link>
              <p className="footer-card__subtitle">© 2024 A-travel Авиабилеты и туры</p>
            </div>
            <div className="footer-card">
              <h4 className="footer-card__title">УСЛУГИ</h4>
              <Link to='/' className="footer-card__link">Авиабилеты</Link>
              <Link to='/turi' className="footer-card__link">Туры</Link>
              <Link to='/vizi' className="footer-card__link">Визы</Link>
            </div>
            <div className="footer-card">
              <h4 className="footer-card__title">ИНФОРМАЦИЯ</h4>
              <a href="" className="footer-card__link">О нас</a>
              <a href="" className="footer-card__link">Блог</a>
              <a href="" className="footer-card__link">Отзывы</a>
            </div>
            <div className="footer-card">
              <h4 className="footer-card__title">КОНТАКТЫ</h4>
              <a href="" className="footer-card__link">+998 (93) 094 0305</a>
              <a href="" className="footer-card__link">+998 (91) 999 0525</a>
              <a href="" className="footer-card__link"></a>
            </div>
            <div className="footer-card">
              <p className="footer-card__location">г. Ургенч<br /> Махтумкули 79</p>
              <div className="footer-icons">
              <Link to='https://t.me/yusupov_0305'>
                <SendOutlined className="footer-icon" />
              </Link>
              <Link to='https://www.instagram.com/yusupov_0305/'>
                <InstagramOutlined className="footer-icon" />
              </Link>
              <Link to='/tour'>
                <FacebookOutlined className="footer-icon" />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer