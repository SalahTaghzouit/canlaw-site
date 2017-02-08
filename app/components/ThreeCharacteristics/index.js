/**
 *
 * ThreeCharacteristics
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Column } from 'hedron';
import messages from './messages';
import WhiteArea from '../WhiteArea';
import AreaHeader from '../AreaHeader';
import NiceBox from '../NiceBox';

function ThreeCharacteristics() {
  return (
    <WhiteArea>
      <AreaHeader>
        <FormattedMessage {...messages.header} />
      </AreaHeader>
      <Row>
        <Column md={4}>
          <NiceBox
            heading={<FormattedMessage {...messages.budget} />}
            content={<FormattedMessage {...messages.budgetExplanation} />}
          />
        </Column>

        <Column md={4}>
          <NiceBox
            heading={<FormattedMessage {...messages.hassle} />}
            content={<FormattedMessage {...messages.hassleExplanation} />}
          />
        </Column>

        <Column md={4}>
          <NiceBox
            heading={<FormattedMessage {...messages.unique} />}
            content={<FormattedMessage {...messages.uniqueExplanation} />}
          />
        </Column>
      </Row>
    </WhiteArea>
  );
}

ThreeCharacteristics.propTypes = {};

export default ThreeCharacteristics;
