import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding w-full relative z-1 flex justify-start items-center flex-col bg-primary-black pt-0 sm:px-0 sm:pb-8" id="login">

    <div className="app__footer-links w-full flex items-start flex-col justify-between lg:flex-row mt-20 py-0 px-8">
      <div className="app__footer-links_contact flex-one my-8 mx-0 xl:m-4 text-left lg:text-center">
        <h1 className="p__cormorant">Contact US</h1>
        < br />
        <p className="p__opensans">北海道川上郡弟子屈町字美留和原野315-1
          <br />カフェ　うりむぅ</p>
        <p className="p__opensans">電話番号: 015−482−6033</p>
        <p className="p__opensans">
          <a href="https://tesikaga-urimuu.asablo.jp/blog/" style={{ color: 'blue' }} target="_blank" rel="noopener noreferrer">
            店主ブログ
          </a>
        </p>
      </div>

      <div className="app__footer-links_logo flex-one my-8 mx-0 xl:m-4 text-left lg:text-center">
      </div>

      <div className="app__footer-links_work flex-one my-8 mx-0 xl:m-4 text-left lg:text-center">
        <h1 className="app__footer-headtext font-CormorantUpright text-primary-white font-normal leading-10 tracking-wider capitalize text-size-xl mb-4 big:text-[50px]">Business hours</h1>
        <p className="p__opensans">5月から10月</p>
        <p className="p__opensans">定休日　第1第2第3水曜日木曜日、第4以降の木曜日 < br />
          営業時間　9時〜21時
          < br />
          ※営業期間・時間・定休日は異なる場合あり</p>
      </div>
    </div>

    <div className="footer__copyright mt-12">
      <p className="p__opensans">URIMU</p>
    </div>

  </div >
);

export default Footer;
