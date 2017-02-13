/**
 *
 * QuoteRequestLocation
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Geosuggest from 'react-geosuggest';
import { Column, Row } from 'hedron';
import './geosuggest-styles.scss';
import messages from './messages';
import Label from './Label';
import Error from './Error';

class QuoteRequestLocation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
    };

    this.setLocation = this.setLocation.bind(this);
  }

  setLocation(location) {
    if (!location) {
      return;
    }

    const loc = {
      address: location.label,
      lat: location.location.lat,
      lng: location.location.lng,
    };

    this.setState({
      location: loc,
    });

    this.props.onChoseLocation(loc);
  }

  // TODO: warning, there may be a discrepancy between state and props
  render() {
    return (
      <Row>
        <Column>
          <Label><FormattedMessage {...messages.where} /></Label>
          <Geosuggest
            className={this.props.showErrors ? 'has-errors' : ''}
            initialValue={this.props.location.address}
            onSuggestSelect={this.setLocation}
            country="MY"
          />

          {this.props.showErrors && (!this.props.location.lat || !this.props.location.lat) && <Error>
            <FormattedMessage {...messages.pleaseChooseAnAddress} />
          </Error>}
        </Column>
      </Row>
    );
  }
}

QuoteRequestLocation.propTypes = {
  onChoseLocation: React.PropTypes.func.isRequired,
  showErrors: React.PropTypes.bool,
  location: React.PropTypes.object,
};

export default QuoteRequestLocation;
