import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>カフェ　うりむぅ</h1>
      <div className="app__wrapper-content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.7864998322825!2d144.42731527617119!3d43.54849217110729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f6d791c1c40a9fd%3A0x6472db200775f5ac!2z44Kr44OV44Kn44GG44KK44KA44GF!5e0!3m2!1sfr!2sjp!4v1723962047221!5m2!1sfr!2sjp"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}></p>
        <p className="p__opensans"></p>
      </div>
      <button type="button" className="custom__button mt-8">Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.cafeView} alt="finus_img" className='md:w-5/6' />
    </div>
  </div>
);

export default FindUs;
