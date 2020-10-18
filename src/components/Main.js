import React from 'react';
import bioPortrait from '../images/bio-portrait.jpg';
import bioScroll from '../images/bio-scroll.svg';
import data from '../utils/data';
import { Link } from 'react-router-dom';
import WorkPreview from './WorkPreview';

function Main() {
  return (
    <>
      <section className="bio main__section main__section_margin_s" id="main">
        <h2 className="bio__heading font font_size_xl">
          <span className="bio__title">Hi! My name is Aleksandra.</span>
          <span className="bio__title">I am an <span className="bio__title-accent">Architect</span></span>
          <span className="bio__title">and <span className="bio__title-accent">Interior Designer.</span></span>
        </h2>
        <div className="bio__body">
          <img src={bioScroll} alt="Scroll line" className="bio__scroll" />
          <p className="bio__copy font font_size_m">My dream is to create a design of a hotel. I would like to work in different countries to travel all over the world, to know more about my profession and architecture, to develop myself.</p>
        </div>
        <img src={bioPortrait} alt="Aleksandra portrait" className="bio__portrait" />
      </section>
      <section className="works main__section main__section_margin_m" id="works">
        <h2 className="works__title font font_size_l">Works</h2>
        <div className="works__body">
          {data.map(work => (
            <Link to={"/work/" + work.id} key={work.id} className="link">
              <WorkPreview data={work} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Main;
