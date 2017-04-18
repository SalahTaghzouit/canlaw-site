/**
 * Reasons
 */

import SectionContent from 'canlaw-components/components/SectionContent';
import { Column, Row } from 'hedron';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectAppUrl } from '../../containers/App/selectors';
import AreaHeader from '../AreaHeader';
import OtherNiceBox from '../OtherNiceBox';
import WhiteArea from '../WhiteArea';
import Button from './Button';
import Heading from './Heading';
import messages from './messages';

function Reasons({ registerUrl, onClickFindLawyer }) {
  const lawyerUrl = `${registerUrl}/lawyers`;
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
              <Column fluid>
                <Button onClick={onClickFindLawyer}>
                  <FormattedMessage {...messages.findLawyerNow} />
                </Button>
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
              <Column fluid>
                <Button href={lawyerUrl}>
                  <FormattedMessage {...messages.signUpLawyer} />
                </Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </SectionContent>
    </WhiteArea>
  );
}

Reasons.propTypes = {
  registerUrl: React.PropTypes.string.isRequired,
  onClickFindLawyer: React.PropTypes.func.isRequired,
};
const mapStateToProps = () => createStructuredSelector({
  registerUrl: makeSelectAppUrl(),
});

export default connect(mapStateToProps)(Reasons);
