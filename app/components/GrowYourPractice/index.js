/**
 *
 * GrowYourPractice
 *
 */

import React from 'react';
import HowLawyersWork from '../HowLawyersWork';
import LawyerBanner from '../LawyerBanner';
import LaywerFaqs from '../LawyerFaqs';

function GrowYourPractice() {
  return (
    <div>
      <LawyerBanner />
      <HowLawyersWork />
      <LaywerFaqs />
    </div>
  );
}

GrowYourPractice.propTypes = {};

export default GrowYourPractice;
