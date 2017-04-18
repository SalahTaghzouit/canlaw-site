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

function MeetTheTeam() {
  return (
    <GrayArea>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <Row alignItems="middle">
        <Column md="4">
          <Img src={SoonYi} alt="Soon Yi" />
          <p>Loo Soon Yi <br />
            Founder & CEO<br />
            Business Development & Sales</p>
        </Column>
        <Column md="4">
          <Img src={Edwin} alt="Edwin" />
          <p>Edwin Lee <br />
            Co-Founder & COO <br />
            Legal & Operations</p>
        </Column>
        <Column md="4">
          <Img src={Amir} alt="Amir" />
          <p>Amir Rozlan <br />
            Co-Founder <br />
            Consultancy</p>
        </Column>
      </Row>
      <Row alignItems="middle">
        <Column md="4">
          <Img src={Aladin} alt="Aladin" />
          <p>Aladin Bouzerd <br />
            CTO <br />
            Technology</p>
        </Column>
        <Column md="4">
          <Img src={Jofan} alt="Jofan" />
          <p>Pang Jo Fan <br />
            Head of Marketing <br />
            Marketing & Communications </p>
        </Column>
        <Column md="4">
          <Img src={Mamta} alt="Mamta" />
          <p>Mamta Thaker<br />
            Executive <br />
            Business Development & Sales</p>
        </Column>
      </Row>
      <Row alignItems="middle">
        <Column mdShift="4" md="4">
          <Img src={Julius} alt="Julius" />
          <p>Julius Ting<br />
            Apprentice (Intern) <br />
            Technology</p>
        </Column>
      </Row>
    </GrayArea>
  );
}

MeetTheTeam.propTypes = {};

export default MeetTheTeam;
