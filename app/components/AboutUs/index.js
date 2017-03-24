/**
 * AboutUs
 */

import Container from 'canlaw-components/components/Container';
import React from 'react';
import CoreValues from '../CoreValues';
import Introduction from '../Introduction';
import MeetTheTeam from '../MeetTheTeam';
import MissionAndVision from '../MissionAndVision';
import Gphoto from './Gphoto.jpg';
import Img from './Img';

function AboutUs() {
  return (
    <div>
      <Container>
        <Img src={Gphoto} alt="Soon Yi" />
        <MissionAndVision />
        <Introduction />
        <MeetTheTeam />
        <CoreValues />
      </Container>
    </div>
  );
}

AboutUs.propTypes = {};

export default AboutUs;
