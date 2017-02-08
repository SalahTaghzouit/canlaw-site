/**
 *
 * QuoteRequestLocation
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Geosuggest from 'react-geosuggest';
import SectionContent from 'canlaw-components/components/SectionContent';
import { Row, Column } from 'hedron';
import './geosuggest-styles.scss';
import messages from './messages';
import Label from './Label';

function QuoteRequestLocation({ onChoseLocation }) {
  return (
    <SectionContent>
      <Row>
        <Column>
          <Label><FormattedMessage {...messages.where} /></Label>
          <Geosuggest
            onSuggestSelect={(location) => location && onChoseLocation({
              address: location.label,
              lat: location.location.lat,
              lng: location.location.lng,
            })}
            country="MY"
          />
        </Column>
      </Row>
    </SectionContent>
  );
}

QuoteRequestLocation.propTypes = {
  onChoseLocation: React.PropTypes.func.isRequired,
};

export default QuoteRequestLocation;
