import React from 'react';
import carousel_camions from '../../images/camions.png';
import carousel_livraison from '../../images/livraison.png';
import carousel_amazon from '../../images/amazon.jpeg';

function Home() {
  return <div className='d-flex justify-content-center'>
     <section className="align-self-center w-75 pt-4">
        <div id="carouselExampleInterval" className="carousel slide w-100" data-bs-ride="carousel">
            <div className="carousel-inner w-100 max-height-480">
              <div className="carousel-item active" data-bs-interval="3000">
                <img src={carousel_camions} className="d-block w-100" alt="slid_1"/>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={carousel_livraison} className="d-block w-100" alt="slid_2"/>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={carousel_amazon} className="d-block w-100" alt="slid_3"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </section>
  </div>;
}

export default Home;
