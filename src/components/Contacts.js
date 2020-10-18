import React from 'react';
import icon1 from '../images/icon 1.svg';
import icon2 from '../images/icon 2.svg';
import icon3 from '../images/icon 3.svg';

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
      <form className="form connect__form" name="form" method="GET" action="#">
        <h3 className="connect__subtitle font font_size_s">Send a message</h3>
        <fieldset className="form__fieldset">
          <input type="text" className="form__field form__field_type_text font font_size_xs" name="name" placeholder="Name*" required />
          <input type="email" className="form__field form__field_type_email font font_size_xs" name="email" placeholder="Email*" required />
          <input type="text" className="form__field form__field_type_title font font_size_xs" name="title" placeholder="Title" />
          <textarea className="form__field form__field_type_textarea font font_size_xs" name="message" placeholder="Message"></textarea>
        </fieldset>
        <button type="submit" className="form__button font font_size_2xs">Submit</button>
      </form>
    </section>
  )
}

export default Contacts;
