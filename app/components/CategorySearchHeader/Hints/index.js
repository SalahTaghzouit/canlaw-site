/**
 * Hints
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Clarify from './Clarify';
import CluesWrapper from './CluesWrapper';
import Label from './Label';
import messages from './messages';
import Wrapper from './Wrapper';

function Hints({ exampleQuestions, onClickExample }) {
  return (
    <Wrapper>
      <Clarify><FormattedMessage {...messages.needClues} /></Clarify>
      <CluesWrapper>
        {exampleQuestions.map((example, index) =>
          (
            <Label key={index} onClick={() => onClickExample(example)}>{example}</Label>
          ),
        )}
      </CluesWrapper>
    </Wrapper>
  );
}

Hints.propTypes = {
  exampleQuestions: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
  onClickExample: React.PropTypes.func,
};

Hints.defaultProps = {
  onClickExample: () => {},
};

export default Hints;
