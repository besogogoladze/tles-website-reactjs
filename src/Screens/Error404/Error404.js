import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo404 from '../../images/depositphotos_410228760-stock-illustration-404-error-page-not-found.jpg';

function Error404() {
    const {t} = useTranslation();
  return (
    <div className='d-flex justify-content-center align-items-center flex-column p-5 gap-5'>
        <h1>{t('Data.ErrorPage.1')}</h1>
        <img className='w-70 text-success' src={Logo404} alt="Logo404"/>
    </div>
  )
}

export default Error404