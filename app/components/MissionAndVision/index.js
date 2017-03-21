/**
 *
 * MissionAndVision
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import AreaHeader from '../AreaHeader';
import messages from './messages';
import PaddedDiv from './PaddedDiv';

function MissionAndVision() {
  return (
    <PaddedDiv>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <FormattedMessage {...messages.mission} />
    </PaddedDiv>
  );
}

MissionAndVision.propTypes = {};

export default MissionAndVision;
