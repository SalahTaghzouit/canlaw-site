/**
 * Bragging
 */
import A from 'canlaw-components/components/A';
import { Column, Row } from 'hedron';
import React from 'react';
import LazyLoad from 'react-lazyload';
import Title from '../Bragging/Title';
import { BRAG_IMG_HEIGHT } from './constants';
import Img from './Img';

function Bragging({ title, images }) {
  return (
    <div>
      <Title>{title}</Title>
      <Row alignItems="middle">
        {images.map((image, index) =>
          (
            <Column key={index} md={12 / images.length}>
              <A href={image.url}>
                <LazyLoad height={BRAG_IMG_HEIGHT} offset={200}>
                  <Img src={image.src} alt={image.alt} />
                </LazyLoad>
              </A>
            </Column>
          ),
        )}
      </Row>
    </div>
  );
}

Bragging.propTypes = {
  images: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      src: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      alt: React.PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  title: React.PropTypes.node.isRequired,
};

export default Bragging;
