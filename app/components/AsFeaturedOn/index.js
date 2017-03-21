/**
 *
 * AsFeaturedOn
 *
 */

import { Column, Row } from 'hedron';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import AreaHeader from '../AreaHeader';
import Bragging from '../Bragging';
import alp from './assets/alp.png';
import officeparrots from './assets/officeparrots.png';
import timeout from './assets/timeoutkl.png';
import tso from './assets/tso.png';
import messages from './messages';

function AsFeaturedOn() {
  return (
    <div>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <Row alignItems="middle">
        <Column md="6">
          <Bragging
            title={<FormattedMessage {...messages.alp} />}
            images={[
              {
                src: alp,
                url: 'https://asialawportal.com/2017/03/15/how-legal-startup-canlaw-is-helping-the-malaysian-public-find-lawyers/',
                alt: 'Asia Law Portal',
              },
            ]}
          />
        </Column>
        <Column md="6">
          <Bragging
            title={<FormattedMessage {...messages.officeparrots} />}
            images={[
              {
                src: officeparrots,
                url: 'http://www.officeparrots.com/single-post/2016/11/07/CanLaw---A-New-Way-to-Find-Hire-a-Lawyer',
                alt: 'Office Parrots',
              },
            ]}
          />
        </Column>
      </Row>
      <Row>
        <Column md="6">
          <Bragging
            title={<FormattedMessage {...messages.timeout} />}
            images={[
              {
                src: timeout,
                url: 'https://www.timeout.com/kuala-lumpur/things-to-do/best-apps-and-services-to-make-your-life-easier',
                alt: 'TimeOut Kuala Lumpur',
              },
            ]}
          />
        </Column>
        <Column md="6">
          <Bragging
            title={<FormattedMessage {...messages.tso} />}
            images={[
              {
                src: tso,
                url: 'http://www.thestar.com.my/news/nation/2017/03/17/canlaw-hopes-to-make-it-easier-for-clients-to-find-lawyers/',
                alt: 'The Star Online',
              },
            ]}
          />
        </Column>
      </Row>
    </div>
  );
}

AsFeaturedOn.propTypes = {};

export default AsFeaturedOn;
