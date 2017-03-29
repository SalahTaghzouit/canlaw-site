/**
 *
 * Testimonial
 *
 */

import { Column, Row } from 'hedron';
import LazyLoad from 'react-lazyload';
import React from 'react';
import Img from './Img';
import P from './P';
import Says from './Says';
import What from './What';
import Who from './Who';
import Wrapper from './Wrapper';
import WhoWrapper from './WhoWrapper';
import { HEAD_IMG_HEIGHT } from './constants';

function Testimonial({ who, head, says, what }) {
  return (
    <Wrapper>
      <Row>
        <Column fluid>
          <Says>{says}</Says>
        </Column>
      </Row>

      <WhoWrapper>
        <LazyLoad height={HEAD_IMG_HEIGHT} offset={100}>
          <Img alt={who} src={head} />
        </LazyLoad>
        <P>
          <Who>{who}</Who>
          <br />
          <What>{what}</What>
        </P>
      </WhoWrapper>

    </Wrapper>
  );
}

Testimonial.propTypes = {
  who: React.PropTypes.node.isRequired,
  what: React.PropTypes.node.isRequired,
  head: React.PropTypes.string.isRequired,
  says: React.PropTypes.node.isRequired,
};

export default Testimonial;
