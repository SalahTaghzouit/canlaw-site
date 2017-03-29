/**
 *
 * HowLawyersWork
 *
 */

import SectionContent from 'canlaw-components/components/SectionContent';
import { Column, Row } from 'hedron';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import AreaHeader from '../AreaHeader';
import NiceBox from '../NiceBox';
import GrayArea from './GrayArea';
import messages from './messages';
import A from './A';

function HowLawyersWork() {
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
              heading={<FormattedMessage {...messages.signup} />}
              content={<div><A href={'https://auth.canlaw.asia/register?role=lawyer'}>
                <FormattedMessage {...messages.clickhere} />
              </A>
                <FormattedMessage {...messages.signuphere} /></div>}
            />
          </Column>

          <Column md={4}>
            <NiceBox
              type="address-card-o"
              heading={<FormattedMessage {...messages.updateProfile} />}
              content={<FormattedMessage {...messages.buildProfile} />}
            />
          </Column>

          <Column md={4}>
            <NiceBox
              type="calendar-check-o"
              heading={<FormattedMessage {...messages.work} />}
              content={<FormattedMessage {...messages.bookings} />}
            />
          </Column>
        </Row>
      </SectionContent>
    </GrayArea>
  );
}

HowLawyersWork.propTypes = {};

export default HowLawyersWork;
