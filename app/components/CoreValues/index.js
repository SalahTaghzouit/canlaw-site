/**
 *
 * CoreValues
 *
 */

import { Column, Row } from 'hedron';
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
      <Row alignItems="middle">
        <Column md="4">
          <StepsContainer
            type={'ship'}
            heading={<FormattedMessage {...messages.ship} />}
            content={<FormattedMessage {...messages.problems} />}
          />
        </Column>
        <Column md="4">
          <StepsContainer
            type={'book'}
            heading={<FormattedMessage {...messages.knowledge} />}
            content={<FormattedMessage {...messages.passion} />}
          />
        </Column>
        <Column md="4">
          <StepsContainer
            type={'smile-o'}
            heading={<FormattedMessage {...messages.smile} />}
            content={<FormattedMessage {...messages.benice} />}
          />
        </Column>
      </Row>
      <Row alignItems="middle">
        <Column md="4">
          <StepsContainer
            type={'pencil'}
            heading={<FormattedMessage {...messages.pencil} />}
            content={<FormattedMessage {...messages.moon} />}
          />
        </Column>
        <Column md="4">
          <StepsContainer
            type={'life-ring'}
            heading={<FormattedMessage {...messages.life} />}
            content={<FormattedMessage {...messages.team} />}
          />
        </Column>
        <Column md="4">
          <StepsContainer
            type={'car'}
            heading={<FormattedMessage {...messages.tesla} />}
            content={<FormattedMessage {...messages.proactivity} />}
          />
        </Column>
      </Row>
      <Row alignItems="middle">
        <Column mdShift="2" md="4">
          <StepsContainer
            type={'superpowers'}
            heading={<FormattedMessage {...messages.transparency} />}
            content={<FormattedMessage {...messages.trust} />}
          />
        </Column>
        <Column md="4">
          <StepsContainer
            type={'gavel'}
            heading={<FormattedMessage {...messages.champion} />}
            content={<FormattedMessage {...messages.justice} />}
          />
        </Column>
      </Row>
    </PaddedDiv>
  );
}

CoreValues.propTypes = {};

export default CoreValues;
