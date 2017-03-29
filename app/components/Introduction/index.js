/**
 *
 * Introduction
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import AreaHeader from '../AreaHeader';
import messages from './messages';
import PaddedDiv from './PaddedDiv';

function Introduction() {
  return (
    <div>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <PaddedDiv>
        <FormattedMessage {...messages.whoweare} />
      </PaddedDiv>
    </div>
  );
}

Introduction.propTypes = {};

export default Introduction;
