import React, { useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo-tle.png'
import './style.css';

function BurgerMenu() {

  const [language, setLanguage] = useState("fr");
    
    const {t, i18n} = useTranslation();


    function handleClick(lang) {

        i18n.changeLanguage(lang);
        setLanguage(lang);
    }



  return (
        <Menu isOpen={false} width={ '50%' } right >
            <div className=" h-100">
                    <nav className="h-100 page__menu menu">
                        <ul className="menu__list r-list w-100 h-100 flex-column justify-content-around align-items-center">
                            <div className="align-center">
                                <NavLink className="bg-transparent" exact to="/"><img className="fit-picture" src={logo} alt="Logo TLE" /></NavLink>
                            </div>
                            <li className="menu__group"><NavLink exact to="/" className="menu__link r-link text-underlined">{t('Data.Header.1')}</NavLink></li>
                            <li className="menu__group"><NavLink exact to="Who-we-are" className="menu__link r-link text-underlined">{t('Data.Header.2')}</NavLink></li>
                            <li className="menu__group"><NavLink exact to="/Hire" className="menu__link r-link text-underlined">{t('Data.Header.3')}</NavLink></li>
                            <li className="menu__group"><NavLink exact to="/ContactUs" className="menu__link r-link text-underlined">{t('Data.Header.4')}</NavLink></li>
                            <li className="menu__group">
                                <div className="languageButton ml-4">
                                    <button className='r-link lang-h btn' onClick={() => handleClick('fr')}>
                                        <p className={` ${language === "fr" && "FR"} m-0`}>FR</p>
                                    </button>
                                    <p className='m-0 pe-none'>|</p>
                                    <button className="r-link lang-h btn" onClick={() => handleClick('en')}>
                                        <p className={` ${language === "en" && "EN"} m-0`}>EN</p>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
        </Menu>
  )
}

export default BurgerMenu;