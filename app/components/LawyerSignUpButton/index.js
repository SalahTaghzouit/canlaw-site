/**
*
* LawyerSignUpButton
*
*/

import React from 'react';
import Button from './Button';

function LawyerSignUpButton() {
  return (
    <Button href={'https://auth.canlaw.asia/register?role=lawyer'}>
      SIGN UP AS A LAWYER
    </Button>
  );
}

LawyerSignUpButton.propTypes = {

};

export default LawyerSignUpButton;
