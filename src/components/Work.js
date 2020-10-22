import React from 'react';
import PageNotFound from './PageNotFound';
import { useParams, useHistory } from 'react-router-dom';

function Project(props) {
  let { id } = useParams();
  const history = useHistory();

  let works = props.data;
  const work = works.find(w => w.id === id);

  React.useEffect(() => {
    props.hidingHeader(true);

    return () => {
      props.hidingHeader(false);
    };
  });


  if (!work) {
    return (
      <PageNotFound />
    )
  };

  return (
    <>
      <div className="header__back-link main__section main__section_margin_m">
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
            <figure className="project__figure" key={photo.title}>
              <img src={photo.src} alt={photo.title} className="project__image" />
              <figcaption className="project__image-text font">{photo.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

export default Project;
