import React from 'react';
import PageNotFound from './PageNotFound';
import { useParams, useHistory  } from 'react-router-dom';

function Project(props) {
  let { id } = useParams();
  const history = useHistory();

  let works = props.data;
  const work = works.find(w => w.id === id);

  if (!work) {
    return (
      <PageNotFound />
    )
  }

  return (
    <>
      <div className="header__back-link main__section main__section_margin_m">
        {/* <a href="index.html#works" className="back-link font"><img src="./blocks/back-link/Vector.svg" alt="Left arrow" className="back-link__arrow" /> Back to works</a> */}
        <button className="back-link font button" onClick={() => history.goBack()}>Back to works</button>
      </div>
      <section className="project main__section main__section_margin_s">
        <div className="project__review">
          <div className="icon font font_size_3xs">{work.type}</div>
          <h2 className="project__title font">{work.name}</h2>
          <p className="project__copy font">{work.description}</p>
        </div>
        <div className="project__images">
          {work.photos.map(photo => (
            <div key={photo.title}>
              <img src={photo.src} alt={photo.title} className="project__image" />
              <p className="project__image-text font">{photo.title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Project;
