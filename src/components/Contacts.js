import React from 'react';
import icon1 from '../images/icon 1.svg';
import icon2 from '../images/icon 2.svg';
import icon3 from '../images/icon 3.svg';
import SubscribeForm from './SubscribeForm';

function Contacts() {
  return (
    <section className="connect main__section main__section_margin_m" id="connect">
      <h2 className="connect__title font font_size_l">Contact Me</h2>
      <div className="connect__details">
        <h3 className="connect__subtitle font font_size_s">Details</h3>
        <ul className="connect__links">
          <li className="connect__links-list">
            <img src={icon1} alt="Mail icon" className="connect__icon" />
            <a href="mailto:aleksandra.architect@gmail.com" className="connect__link link font font_size_xs">aleksandra.architect@gmail.com</a>
          </li>
          <li className="connect__links-list">
            <img src={icon2} alt="Tel icon" className="connect__icon" />
            <a href="tel:+972585577936" className="connect__link link font font_size_xs">+972 58-557-7936</a>
          </li>
          <li className="connect__links-list">
            <img src={icon3} alt="Map icon" className="connect__icon" />
            <a href="https://goo.gl/maps/DNoD9ChzmgDNuJs36" className="connect__link link font font_size_xs" target="_blank" rel="noopener noreferrer">Tel Aviv, Israel</a>
          </li>
      </ul>
      </div>
      <SubscribeForm />
    </section>
  )
}

export default Contacts;
