import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="bg-primary-black app__wrapper section__padding font-CormorantUpright text-primary-golden" id="home">
    <div className="flex-1 w-full flex items-start justify-center flex-col">
      <h1 className="headtext__cormorant font-bold mb-4">カフェ　うりむぅ</h1>

      <button type="button" className="custom__button">メニューを見る</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.cafeView} alt="header_img" />
    </div>
  </div>
);

export default Header;
