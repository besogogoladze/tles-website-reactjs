import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import logo from '../../images/logo-tle.png'
import { useTranslation } from 'react-i18next';
import './style.css'

function Header() {

    const [language, setLanguage] = useState("fr");
    const [isActive, setActive] = useState(false);
    
    const {t, i18n} = useTranslation();


    function handleClick(lang) {

        i18n.changeLanguage(lang);
        setLanguage(lang);
    }
    function toggleClass() {
        setActive(!isActive);
    };
    
    

  return <div>
        <main>
            <header>
                <div className="page">
                    <nav className="page__menu menu">
                        <ul className="menu__list r-list w-100  justify-content-around align-items-center">
                            <li className="menu__group"><NavLink exact to="/" className="menu__link r-link text-underlined">{t('Data.Header.1')}</NavLink></li>
                            <li className="menu__group"><NavLink exact to="Who-we-are" className="menu__link r-link text-underlined">{t('Data.Header.2')}</NavLink></li>
                                <div className="align-center">
                                    <NavLink className="bg-transparent" exact to="/"><img className="fit-picture" src={logo} alt="Logo TLE" /></NavLink>
                                </div>
                            <li className="menu__group"><NavLink exact to="/Hire" className="menu__link r-link text-underlined">{t('Data.Header.3')}</NavLink></li>
                            <li className="menu__group"><NavLink exact to="/ContactUs" className="menu__link r-link text-underlined">{t('Data.Header.4')}</NavLink></li>
                            <li className={`menu__group translate_section ${isActive ? 'languages': 'languagesOff'}`}>
                                <div className="languageButton ml-4">
                                    <button className='r-link lang-h btn' onClick={() => handleClick('fr')}>
                                        <p className={` ${language === "fr" && "FR"} m-0`}>FR</p>
                                    </button>
                                    <p className='m-0 pe-none'>|</p>
                                    <button className="r-link lang-h btn" onClick={() => handleClick('en')}>
                                        <p className={` ${language === "en" && "EN"} m-0`}>EN</p>
                                    </button>
                                </div>
                                <button onClick={toggleClass} className=" translate_section_hover d-flex justify-content-center align-items-center text-light border-0">
                                    <p className={`m-0 ${isActive ? 'languageArrow' : 'null'}`}>▽</p>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </main>
  </div>;
}

export default Header;
