/**
 *
 * LawyerBanner
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import A from './A';
import banner from './assets/banner.png';
import Button from './Button';
import ContainerDiv from './ContainerDiv';
import H2 from './H2';
import Header from './Header';
import Img from './Img';
import messages from './messages';

function LawyerBanner() {
  return (
    <ContainerDiv>
      <Img src={banner} alt="banner" />
      <Header>
        <FormattedMessage {...messages.grow} />
      </Header>
      <Button href={'https://auth.canlaw.asia/register?role=lawyer'}>
        SIGN UP AS A LAWYER
      </Button>
      <H2>
        <FormattedMessage {...messages.nocharge} />
      </H2>
      <A href={'https://canlaw.asia/blog/pressing-questions-canlaw/'}>
        <FormattedMessage {...messages.readmore} />
      </A>
    </ContainerDiv>
  );
}

LawyerBanner.propTypes = {};

export default LawyerBanner;
