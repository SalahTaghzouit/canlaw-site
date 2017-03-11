/**
 *
 * Testimonial
 *
 */

import { Column, Row } from 'hedron';
import React from 'react';
import Img from './Img';
import P from './P';
import Says from './Says';
import What from './What';
import Who from './Who';
import Wrapper from './Wrapper';
import WhoWrapper from './WhoWrapper';

function Testimonial({ who, head, says, what }) {
  return (
    <Wrapper>
      <Row>
        <Column fluid>
          <Says>{says}</Says>
        </Column>
      </Row>

      <WhoWrapper>
        <Img alt={who} src={head} />
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
