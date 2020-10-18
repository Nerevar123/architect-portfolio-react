import React from 'react';

function WorkPreview(props) {
  return (
    <article className="work">
      <img src={props.data.preview} alt="L’Hotel” Reconstruction" className="work__image" />
      <div className="icon work__icon font font_size_3xs">{props.data.type}</div>
      <h3 className="work__title font font_size_sm">{props.data.name}</h3>
      <p className="work__year font font_size_xss">{props.data.year}</p>
    </article>
  )
}

export default WorkPreview;
