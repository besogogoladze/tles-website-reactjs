import React from 'react';
import Contact from './Contact/Contact';

function Footer() {
  return <div className='position-relative'>
      <div className='bottom-0 p-xxl-5 w-100 bg-success d-flex justify-content-around align-items-baseline'>
        <h1>parteners place 👇👇👇</h1>
        <Contact/>
      </div>
  </div>;
}

export default Footer;
