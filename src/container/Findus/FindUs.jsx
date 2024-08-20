import React from 'react';
import './FindUs.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <div className="flex-1 w-full flex justify-center flex-col items-center">

        <h1 className="headtext__cormorant font-bold mb-4 text-center text-3xl">
          カフェ
        </h1>
        <h1 className="headtext__cormorant font-bold mb-4 text-xl">
          うりむぅ
        </h1>
      </div>      <div className="map-container">
        <div className="app__wrapper-content">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.7864998322825!2d144.42731527617119!3d43.54849217110729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f6d791c1c40a9fd%3A0x6472db200775f5ac!2z44Kr44OV44Kn44GG44KK44KA44GF!5e0!3m2!1sfr!2sjp!4v1723962047221!5m2!1sfr!2sjp"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}></p>
        <p className="p__opensans"></p>
      </div>
      <a
        href="https://www.google.com/maps/place/%E3%82%AB%E3%83%95%E3%82%A7%E3%81%86%E3%82%8A%E3%82%80%E3%81%85/@43.5484922,144.4273153,17z/data=!4m8!3m7!1s0x5f6d791c1c40a9fd:0x6472db200775f5ac!8m2!3d43.5484922!4d144.4298902!9m1!1b1!16s%2Fg%2F11mtjvl5wm?entry=ttu"
        className="custom__button mt-8"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Us
      </a>    </div>

    <div className="app__wrapper_img">
      <img src={images.cafeView} alt="finus_img" className='md:w-5/6' />
    </div>
  </div>
);

export default FindUs;
