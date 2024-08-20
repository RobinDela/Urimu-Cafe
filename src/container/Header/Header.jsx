import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="bg-primary-black app__wrapper section__padding font-CormorantUpright text-primary-golden" id="home">
    <div className="flex-1 w-full flex justify-center flex-col items-center">

      <h1 className="headtext__cormorant font-bold mb-4 text-center text-3xl">
        カフェ
      </h1>
      <h1 className="headtext__cormorant font-bold mb-4 text-xl">
        うりむぅ
      </h1>


    </div>

    <div className="app__wrapper_img">
      <img src={images.cafeView} alt="header_img" />
    </div>
  </div>
);

export default Header;
