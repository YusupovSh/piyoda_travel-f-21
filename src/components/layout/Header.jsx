import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
        <div className='container'>
            <div className="header-row">
                <div className="header-logo">
                    <Link to='/'><h1  className='header-logo-title'>Piyoda-Travel</h1></Link>
                </div>
                <div className="header-background"></div>
                <nav className="header__nav">
                    <button className='header__nav-button'>
                        <svg  className='header__nav-button-icon' width="18" height="21" viewBox="0 0 18 21" fill="#145CE6" xmlns="http://www.w3.org/2000/svg">
                         <path className='header__nav-button-icon' d="M17.4489 14.7704L13.6042 12.8873C13.44 12.8073 13.2575 12.7904 13.0841 12.8392C12.9108 12.888 12.756 12.9999 12.6431 13.158L10.9404 15.5354C8.26828 14.0955 6.11782 11.6378 4.85793 8.58396L6.93817 6.63808C7.07675 6.50927 7.17483 6.33238 7.21756 6.13417C7.2603 5.93596 7.24537 5.72724 7.17503 5.5396L5.52731 1.14567C5.45012 0.943401 5.31358 0.778251 5.14125 0.678702C4.96892 0.579154 4.7716 0.551446 4.58331 0.600358L1.01325 1.54191C0.831713 1.58982 0.669748 1.70664 0.553786 1.87329C0.437824 2.03995 0.374714 2.24661 0.374756 2.45954C0.374756 12.5224 7.51144 20.6629 16.3027 20.6629C16.4891 20.6631 16.67 20.591 16.8159 20.4584C16.9618 20.3259 17.064 20.1408 17.106 19.9332L17.9298 15.8532C17.9724 15.6369 17.9476 15.4105 17.8598 15.2129C17.772 15.0152 17.6267 14.8588 17.4489 14.7704Z" fill="#145CE6"></path>
                        </svg>
                         <p className="header__nav-button-text">+998 (93) 094 0305</p>
                    </button>
                    <NavLink to='/aviabilet' className='header__nav-item'>Авиабилеты</NavLink>
                    <NavLink to='/tour' className='header__nav-item'>Туры</NavLink>
                    <NavLink to='/visa' className='header__nav-item'>Визы</NavLink>
                    <NavLink to='/straxovaniya' className='header__nav-item'>Страхование</NavLink>
                    <NavLink to='/contact' className='header__nav-item'>Контакты</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header