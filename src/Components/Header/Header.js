import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import logo from '../../images/logo-tle.png'
import { useTranslation } from 'react-i18next';
import './style.css'

function Header() {

    const {t, i18n} = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }
    
    

  return <div>
        <main>
            <header>
                <div className="page">
                    <nav className="page__menu menu">
                        <ul className="menu__list r-list w-100  justify-content-around align-items-center">
                            <li className="menu__group"><NavLink exact to="/" className="menu__link r-link text-underlined">{t('Data.Header.1')}</NavLink></li>
                            <li className="menu__group"><NavLink exact to="qui-sommes-nous.html" className="menu__link r-link text-underlined">{t('Data.Header.2')}</NavLink></li>
                                <div className="align-center">
                                    <NavLink className="bg-transparent" exact to="/"><img className="fit-picture" src={logo} alt="Logo TLE" /></NavLink>
                                </div>
                            <li className="menu__group"><NavLink exact to="/ContactUs" className="menu__link r-link text-underlined">{t('Data.Header.3')}</NavLink></li>
                            <li className="menu__group">
                                <div className="languageButton ml-4">
                                    <button className='r-link lang-h btn' onClick={() => handleClick('fr')}>
                                        <p className="FR m-0">FR</p>
                                    </button>
                                    <button className="r-link lang-h btn" onClick={() => handleClick('en')}>
                                        <p className="EN m-0">EN</p>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </main>
  </div>;
}

export default Header;
