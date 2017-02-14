/**
 *
 * ThreeCharacteristics
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'hedron';
import SectionContent from 'canlaw-components/components/SectionContent';
import messages from './messages';
import WhiteArea from '../WhiteArea';
import AreaHeader from '../AreaHeader';
import NiceBox from '../NiceBox';

function ThreeCharacteristics() {
  return (
    <SectionContent>
      <WhiteArea>
        <AreaHeader>
          <FormattedMessage {...messages.header} />
        </AreaHeader>
        <Row>
          <Column md={4}>
            <NiceBox
              type="list"
              heading={<FormattedMessage {...messages.budget} />}
              content={<FormattedMessage {...messages.budgetExplanation} />}
            />
          </Column>

          <Column md={4}>
            <NiceBox
              type="address-card-o"
              heading={<FormattedMessage {...messages.hassle} />}
              content={<FormattedMessage {...messages.hassleExplanation} />}
            />
          </Column>

          <Column md={4}>
            <NiceBox
              type="calendar-check-o"
              heading={<FormattedMessage {...messages.unique} />}
              content={<FormattedMessage {...messages.uniqueExplanation} />}
            />
          </Column>
        </Row>
      </WhiteArea>
    </SectionContent>
  );
}

ThreeCharacteristics.propTypes = {};

export default ThreeCharacteristics;
