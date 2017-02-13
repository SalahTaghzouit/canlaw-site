/**
 * Header
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import SectionContent from 'canlaw-components/components/SectionContent';
import Wrapper from './Wrapper';
import H2 from './H2';
import H3 from './H3';
import Hr from './Hr';
import Yellow from './Yellow';
import messages from './messages';

function Header({ children }) {
  return (
    <Wrapper>
      <SectionContent>
        <H2>
          <FormattedMessage
            {...messages.headline}
            values={{ cheap: <Yellow><FormattedMessage {...messages.cheap} /></Yellow> }}
          />
        </H2>
        <Hr />
        <H3>
          <FormattedMessage {...messages.looking_for_lawyer} />
        </H3>
        {children}
      </SectionContent>
    </Wrapper>
  );
}

Header.propTypes = {
  children: React.PropTypes.node,
};

export default Header;
