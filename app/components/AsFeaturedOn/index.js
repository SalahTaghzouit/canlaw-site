/**
 *
 * AsFeaturedOn
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import AreaHeader from '../AreaHeader';
import Bragging from '../Bragging';
import alp from './assets/alp.png';
import officeparrots from './assets/officeparrots.png';
import timeout from './assets/timeoutkl.png';
import tso from './assets/tso.png';
import vulcan from './assets/vulcan.jpg';
import BragginContainer from './BragginContainer';
import WhiteArea from '../WhiteArea';
import messages from './messages';

function AsFeaturedOn() {
  return (
    <WhiteArea>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <BragginContainer alignItems="center">
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
        <Bragging
          title={<FormattedMessage {...messages.vulcan} />}
          images={[
            {
              src: vulcan,
              url: 'https://vulcanpost.com/608350/canlaw-lawyer-search-malaysia-legal-startup/',
              alt: 'Vulcan Post',
            },
          ]}
        />
      </BragginContainer>
    </WhiteArea>
  );
}

AsFeaturedOn.propTypes = {};

export default AsFeaturedOn;
