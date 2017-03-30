/**
 * Awards
 */

import SectionContent from 'canlaw-components/components/SectionContent';
import { Column, Row } from 'hedron';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import AreaHeader from '../AreaHeader';
import Bragging from '../Bragging';
import WhiteArea from '../WhiteArea';
import messages from './messages';

function Awards() {
  return (
    <WhiteArea>
      <SectionContent>
        <AreaHeader>
          <FormattedMessage {...messages.header} />
        </AreaHeader>

        <Row>
          <Column md={4}>
            <Bragging
              title={<FormattedMessage {...messages.cradle} />}
              images={[
                {
                  src: 'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/assets/awards/Cradle-Logo.jpg',
                  url: 'http://www.cradle.com.my/',
                  alt: 'Cradle',
                },
              ]}
            />
          </Column>
          <Column md={4}>
            <Bragging
              title={<FormattedMessage {...messages.maxis} />}
              images={[
                {
                  src: 'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/assets/awards/Maxis-Logo.jpg',
                  url: 'http://www.maxis.com.my/content/maxis/en/about-maxis/maxis-career/maxis-inspire.html',
                  alt: 'Maxis Inspire Challenge',
                },
              ]}
            />
          </Column>
          <Column md={4}>
            <Bragging
              title={<FormattedMessage {...messages.nbos} />}
              images={[
                {
                  src: 'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/assets/awards/NBOS-Logo.jpg',
                  url: 'https://nboscompetition.my',
                  alt: 'National Blue Ocean Strategy Competition',
                },
              ]}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Bragging
              title={<FormattedMessage {...messages.kazanah} />}
              images={[
                {
                  src: 'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/assets/awards/BrainChild-Logo.jpg',
                  url: 'http://codearmy.com/project-brainchild',
                  alt: 'BrainChild',
                },
                {
                  src: 'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/assets/awards/CodeArmy-Logo.jpg',
                  url: 'http://codearmy.com',
                  alt: 'CodeArmy',
                },
                {
                  src: 'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/assets/awards/Lean-Logo.jpg',
                  url: 'https://www.leanstartupmachine.com',
                  alt: 'Lean Startup Machine',
                },
              ]}
            />
          </Column>
        </Row>
        <Row>
          <Column md={6}>
            <Bragging
              title={<FormattedMessage {...messages.knowledge} />}
              images={[
                {
                  src: 'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/assets/awards/BioMed-Logo.jpg',
                  url: 'http://biomedkl.wixsite.com/home',
                  alt: 'BioMed KL',
                },
              ]}
            />
          </Column>
          <Column md={6}>
            <Bragging
              title={<FormattedMessage {...messages.bac} />}
              images={[
                {
                  src: 'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/assets/awards/Bac-Logo.jpg',
                  url: 'http://www.bac.edu.my',
                  alt: 'BAC University',
                },
              ]}
            />
          </Column>
        </Row>
      </SectionContent>
    </WhiteArea>
  );
}

Awards.propTypes = {};

export default Awards;
