/**
 *
 * CoreValues
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import AreaHeader from '../AreaHeader';
import StepsContainer from '../StepsContainer';
import messages from './messages';
import PaddedDiv from './PaddedDiv';

function CoreValues() {
  return (
    <PaddedDiv>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <StepsContainer
        heading={<FormattedMessage {...messages.ship} />}
        content={<FormattedMessage {...messages.problems} />}
      />
      <StepsContainer
        heading={<FormattedMessage {...messages.knowledge} />}
        content={<FormattedMessage {...messages.passion} />}
      />
      <StepsContainer
        heading={<FormattedMessage {...messages.smile} />}
        content={<FormattedMessage {...messages.benice} />}
      />
      <StepsContainer
        heading={<FormattedMessage {...messages.pencil} />}
        content={<FormattedMessage {...messages.moon} />}
      />
      <StepsContainer
        heading={<FormattedMessage {...messages.life} />}
        content={<FormattedMessage {...messages.team} />}
      />
      <StepsContainer
        heading={<FormattedMessage {...messages.tesla} />}
        content={<FormattedMessage {...messages.proactivity} />}
      />
      <StepsContainer
        heading={<FormattedMessage {...messages.transparency} />}
        content={<FormattedMessage {...messages.trust} />}
      />
      <StepsContainer
        heading={<FormattedMessage {...messages.champion} />}
        content={<FormattedMessage {...messages.justice} />}
      />
    </PaddedDiv>
  );
}

CoreValues.propTypes = {};

export default CoreValues;
