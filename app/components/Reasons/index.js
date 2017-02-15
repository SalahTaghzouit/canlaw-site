/**
 * Reasons
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'hedron';
import SectionContent from 'canlaw-components/components/SectionContent';
import WhiteArea from '../WhiteArea';
import messages from './messages';
import AreaHeader from '../AreaHeader';
import OtherNiceBox from '../OtherNiceBox';
import Heading from './Heading';

function Reasons() {
  return (
    <WhiteArea>
      <SectionContent>
        <AreaHeader>
          <FormattedMessage {...messages.header} />
        </AreaHeader>
        <Row>
          <Column md={6}>
            <Heading>
              <FormattedMessage {...messages.client} />
            </Heading>

            <Row>
              <Column fluid>
                <OtherNiceBox
                  type="map-o"
                  heading={<FormattedMessage {...messages.near} />}
                  content={<FormattedMessage {...messages.nearExplain} />}
                />
              </Column>

              <Column fluid>
                <OtherNiceBox
                  type="clock-o"
                  heading={<FormattedMessage {...messages.saveTime} />}
                  content={<FormattedMessage {...messages.saveTimeExplain} />}
                />
              </Column>

              <Column fluid>
                <OtherNiceBox
                  type="envelope-o"
                  heading={<FormattedMessage {...messages.message} />}
                  content={<FormattedMessage {...messages.messageExplain} />}
                />
              </Column>
            </Row>
          </Column>

          <Column md={6}>
            <Heading>
              <FormattedMessage {...messages.lawyer} />
            </Heading>

            <Row>
              <Column fluid>
                <OtherNiceBox
                  type="binoculars"
                  heading={<FormattedMessage {...messages.findYou} />}
                  content={<FormattedMessage {...messages.findYouExplain} />}
                />
              </Column>

              <Column fluid>
                <OtherNiceBox
                  type="check"
                  heading={<FormattedMessage {...messages.serve} />}
                  content={<FormattedMessage {...messages.serveExplain} />}
                />
              </Column>

              <Column fluid>
                <OtherNiceBox
                  type="users"
                  heading={<FormattedMessage {...messages.grow} />}
                  content={<FormattedMessage {...messages.growExplain} />}
                />
              </Column>
            </Row>
          </Column>
        </Row>
      </SectionContent>
    </WhiteArea>
  );
}

Reasons.propTypes = {};

export default Reasons;
