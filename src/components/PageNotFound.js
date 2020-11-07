import React from 'react';
import { Link } from 'react-router-dom';
// import Bye from '../images/404.svg';

function PageNotFound () {
  return (
    <div className="not-found main__section main__section_margin_s">
      <h3 className="not-found__title font font_size_l">
       <span>404</span> - Page not found
      </h3>
      {/* <img className="not-found__image" src={Bye} alt=""/> */}
      <p className="not-found__text font font_size_xs">
       Oops!
      </p>
      <Link className="button button_type_to-main font font_size_s" to="/">Go back</Link>
    </div>
  )
}

export default PageNotFound;
