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
import Mamta from './assets/mamta.jpg';
import Pauline from './assets/pauline.jpg';
import SoonYi from './assets/soonyi.jpg';
import Ashlyn from './assets/ashlyn.jpg';
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
            Founder<br />
            Chief Get-Sh*t-Done Officer <br />
            Business & Sales</p>
        </Column>
        <Column md="4">
          <Img src={Amir} alt="Amir" />
          <p>Amir Rozlan <br />
            Co-Founder <br />
            Ninja Services On-Call</p>
        </Column>
        <Column md="4">
          <Img src={Edwin} alt="Edwin" />
          <p>Edwin Lee <br />
            Co-Founder & COO <br />
            Legal & Ops</p>
        </Column>
      </Row>
      <Row alignItems="middle">
        <Column md="4">
          <Img src={Aladin} alt="Aladin" />
          <p>Aladin Bouzerd <br />
            Original Crew <br />
            Tech Voodoo</p>
        </Column>
        <Column md="4">
          <Img src={Jofan} alt="Jofan" />
          <p>Jo Fan Pang <br />
            Original Crew <br />
            Ambassador of Buzz</p>
        </Column>
        <Column md="4">
          <Img src={Mamta} alt="Mamta" />
          <p>Mamta Thaker<br />
            Bounty hunter <br />
            Roti Winner</p>
        </Column>
      </Row>
      <Row alignItems="middle">
        <Column md="4">
          <Img src={Pauline} alt="Pauline" />
          <p>Pauline Ting<br />
            Chief Storyteller</p>
        </Column>
        <Column md="4">
          <Img src={Ashlyn} alt="Ashlyn" />
          <p>Ashlyn<br />
            Chief Everything Officer</p>
        </Column>
      </Row>
    </GrayArea>
  );
}

MeetTheTeam.propTypes = {};

export default MeetTheTeam;
