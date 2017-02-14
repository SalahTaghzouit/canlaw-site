/**
 * Reasons
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'hedron';
import SectionContent from 'canlaw-components/components/SectionContent';
import GrayArea from '../GrayArea';
import messages from './messages';
import AreaHeader from '../AreaHeader';
import OtherNiceBox from '../OtherNiceBox';

function Reasons() {
  return (
    <GrayArea>
      <SectionContent>
        <AreaHeader>
          <FormattedMessage {...messages.header} />
        </AreaHeader>
        <Row>
          <Column md={4}>
            <OtherNiceBox
              type="map-o"
              heading={<FormattedMessage {...messages.near} />}
              content={<span />}
            />
          </Column>

          <Column md={4}>
            <OtherNiceBox
              type="clock-o"
              heading={<FormattedMessage {...messages.saveTime} />}
              content={<span />}
            />
          </Column>

          <Column md={4}>
            <OtherNiceBox
              type="envelope-o"
              heading={<FormattedMessage {...messages.message} />}
              content={<span />}
            />
          </Column>
        </Row>
        <Row>
          <Column md={4}>
            <OtherNiceBox
              type="binoculars"
              heading={<FormattedMessage {...messages.findYou} />}
              content={<span />}
            />
          </Column>

          <Column md={4}>
            <OtherNiceBox
              type="check"
              heading={<FormattedMessage {...messages.serve} />}
              content={<span />}
            />
          </Column>

          <Column md={4}>
            <OtherNiceBox
              type="users"
              heading={<FormattedMessage {...messages.establish} />}
              content={<span />}
            />
          </Column>
        </Row>
      </SectionContent>
    </GrayArea>
  );
}

Reasons.propTypes = {};

export default Reasons;
