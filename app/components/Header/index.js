/**
 *
 * Header
 *
 */
import React from 'react';
import SectionContent from 'canlaw-components/components/SectionContent';
import Wrapper from './Wrapper';
import H2 from './H2';
import H3 from './H3';
import Black from './Black';
import Yellow from './Yello';
import Gray from './Gray';
import Hr from './Hr';

function Header() {
  return (
    <Wrapper>
      <SectionContent>


        <H2>
          We help you find a lawyer Fast, Easy and <Yellow>Cheap</Yellow>
        </H2>

        <Hr />

        <H3>
          I am looking for a lawyer who can help me:
        </H3>


      </SectionContent>

    </Wrapper>
  );
}

Header.propTypes = {};

export default Header;
