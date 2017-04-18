/**
 *
 * MeetTheTeam
 *
 */

import { Column, Row } from 'hedron';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import AreaHeader from '../AreaHeader';
import Aladin from './assets/aladin.jpg';
import Amir from './assets/amir.jpg';
import Edwin from './assets/edwin.jpg';
import Jofan from './assets/jofan.jpg';
import Julius from './assets/julius.jpg';
import Mamta from './assets/mamta.jpg';
import SoonYi from './assets/soonyi.jpg';
import GrayArea from './GrayArea';
import Img from './Img';
import messages from './messages';
import StrongWords from './StrongWords';

function MeetTheTeam() {
  return (
    <GrayArea>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <Row alignItems="middle">
        <Column md={4}>
          <Img src={SoonYi} alt="Soon Yi" />
          <p><StrongWords>Loo Soon Yi </StrongWords><br />
            Founder & CEO<br />
            Business Development & Sales</p>
        </Column>
        <Column md={4}>
          <Img src={Edwin} alt="Edwin" />
          <p><StrongWords>Edwin Lee </StrongWords><br />
            Co-Founder & COO <br />
            Legal & Operations</p>
        </Column>
        <Column md={4}>
          <Img src={Amir} alt="Amir" />
          <p><StrongWords>Amir Rozlan </StrongWords><br />
            Co-Founder <br />
            Consultancy</p>
        </Column>
      </Row>
      <Row alignItems="middle">
        <Column md={4}>
          <Img src={Aladin} alt="Aladin" />
          <p><StrongWords>Aladin Bouzerd </StrongWords><br />
            CTO <br />
            Technology</p>
        </Column>
        <Column md={4}>
          <Img src={Jofan} alt="Jofan" />
          <p><StrongWords>Pang Jo Fan </StrongWords><br />
            Head of Marketing <br />
            Marketing & Communications </p>
        </Column>
        <Column md={4}>
          <Img src={Mamta} alt="Mamta" />
          <p><StrongWords>Mamta Thaker </StrongWords><br />
            Executive <br />
            Business Development & Sales</p>
        </Column>
      </Row>
      <Row alignItems="middle">
        <Column mdShift={4} md={4}>
          <Img src={Julius} alt="Julius" />
          <p><StrongWords>Julius Ting </StrongWords><br />
            Apprentice (Intern) <br />
            Technology</p>
        </Column>
      </Row>
    </GrayArea>
  );
}

MeetTheTeam.propTypes = {};

export default MeetTheTeam;
