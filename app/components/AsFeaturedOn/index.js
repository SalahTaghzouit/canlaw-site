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
                url: 'http://lmgtfy.com/?q=alp',
                alt: 'ALP',
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
                url: 'http://lmgtfy.com/?q=officeparrots',
                alt: 'officeparrots',
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
                url: 'http://lmgtfy.com/?q=timeout',
                alt: 'timeout',
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
                url: 'http://lmgtfy.com/?q=thestaronline',
                alt: 'the star online',
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
