import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header main__section main__section_margin_s">
      <nav className="header__links">
        <Link to="/" className="header__link link font font_size_xs">Main</Link>
        <Link to="/#works" className="header__link link font font_size_xs">Works</Link>
      </nav>
      <div className="header__titles">
        <h1 className="header__title font font_size_l">Aleksandra Bogdanova</h1>
        <h2 className="header__subtitle font font_size_2xs">Interior Designer</h2>
      </div>
      <Link to="/#connect" className="header__link header__link_last link font font_size_xs">Contact Me</Link>
    </header>
  )
}

export default Header;
