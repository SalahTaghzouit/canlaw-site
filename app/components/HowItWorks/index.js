/**
 *
 * HowItWorks
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'hedron';
import SectionContent from 'canlaw-components/components/SectionContent';
import messages from './messages';
import GrayArea from '../GrayArea';
import AreaHeader from '../AreaHeader';
import NiceBox from '../NiceBox';

function HowItWorks() {
  return (
    <GrayArea>
      <SectionContent>
        <AreaHeader>
          <FormattedMessage {...messages.header} />
        </AreaHeader>
        <Row>
          <Column md={4}>
            <NiceBox
              type="list"
              heading={<FormattedMessage {...messages.answer} />}
              content={<FormattedMessage {...messages.answerExplanation} />}
            />
          </Column>

          <Column md={4}>
            <NiceBox
              type="address-card-o"
              heading={<FormattedMessage {...messages.review} />}
              content={<FormattedMessage {...messages.reviewExplanation} />}
            />
          </Column>

          <Column md={4}>
            <NiceBox
              type="calendar-check-o"
              heading={<FormattedMessage {...messages.book} />}
              content={<FormattedMessage {...messages.bookExplanation} />}
            />
          </Column>
        </Row>
      </SectionContent>
    </GrayArea>
  );
}

HowItWorks.propTypes = {};

export default HowItWorks;
