/**
 *
 * CoreValues
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import AreaHeader from '../AreaHeader';
import OtherNiceBox from '../OtherNiceBox';
import messages from './messages';
import PaddedDiv from './PaddedDiv';

function CoreValues() {
  return (
    <PaddedDiv>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <OtherNiceBox
        type="ship"
        heading={<FormattedMessage {...messages.ship} />}
        content={<FormattedMessage {...messages.problems} />}
      />
      <OtherNiceBox
        type="book"
        heading={<FormattedMessage {...messages.knowledge} />}
        content={<FormattedMessage {...messages.passion} />}
      />
      <OtherNiceBox
        type="smile-o"
        heading={<FormattedMessage {...messages.smile} />}
        content={<FormattedMessage {...messages.benice} />}
      />
      <OtherNiceBox
        type="pencil"
        heading={<FormattedMessage {...messages.pencil} />}
        content={<FormattedMessage {...messages.moon} />}
      />
      <OtherNiceBox
        type="life-ring"
        heading={<FormattedMessage {...messages.life} />}
        content={<FormattedMessage {...messages.team} />}
      />
      <OtherNiceBox
        type="car"
        heading={<FormattedMessage {...messages.tesla} />}
        content={<FormattedMessage {...messages.proactivity} />}
      />
      <OtherNiceBox
        type="superpowers"
        heading={<FormattedMessage {...messages.transparency} />}
        content={<FormattedMessage {...messages.trust} />}
      />
      <OtherNiceBox
        type="gavel"
        heading={<FormattedMessage {...messages.champion} />}
        content={<FormattedMessage {...messages.justice} />}
      />
    </PaddedDiv>
  );
}

CoreValues.propTypes = {};

export default CoreValues;
