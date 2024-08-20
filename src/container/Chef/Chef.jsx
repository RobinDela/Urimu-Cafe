import React from 'react';

import { images } from '../../constants';
import './Chef.css';
// This part will be change with the info from inlaw
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.aboutUs} alt="chef_image" />
    </div>
    <div className="app__wrapper_info flex justify-start items-start">
      <div className="app__chef-content flex flex-col w-full mt-10">
        <div className="app__chef-content_quote flex justify-start items-end">
          <img src={images.quote} alt="quote_image" className='w-[47px] h-[40px] mt-0 mr-4 mb-4 ml-0' />
          <p className="p__background">
            想像を超えたくつろぎと味を提供する事をコンセプトにしています。
            うりむぅは国道沿いで有りながら木々に囲まれた静かな空間です。
            <br />二人は兵庫県と北海道の二拠点居住で、店主は冬季、猪の猟をしています。 </p>
        </div>
      </div>

      <div className="app__chef-sign wi-full mt-10">
      </div>
    </div>
  </div >
);

export default Chef;
