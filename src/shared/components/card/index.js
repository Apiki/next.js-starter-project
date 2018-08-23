import React from 'react';
import t from 'prop-types';
import { getThumbnail } from 'shared/helpers/media';

import './card.scss';

const Card = ({
  link,
  title,
  excerpt,
  featuredMedia,
}) => (
  <div className="card">
    <div className="card__image">
      <img src={getThumbnail(featuredMedia.sizes, 'medium')} alt={featuredMedia.alt} />
      <span className="card__title">{title}</span>
    </div>

    <div className="card__content">
      <p>{excerpt}</p>
    </div>

    <div className="card__action">
      <a href={link} className="card__link">This is a link</a>
    </div>
  </div>
);

Card.defaultProps = {
  title: 'Lorem Ipsum',
};

Card.propTypes = {
  link: t.string.isRequired,
  title: t.string,
  excerpt: t.string,
  featuredMedia: t.shape({
    alt: t.string,
    sizes: t.objectOf(t.object).isRequired,
  }).isRequired,
};

export { Card };
