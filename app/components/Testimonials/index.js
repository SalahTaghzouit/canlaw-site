/**
 * Testimonials
 */

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Column, Row } from 'hedron';
import React from 'react';
import { Parallax } from 'react-parallax';
import Slider from 'react-slick';
import Testimonial from '../Testimonial';
import A from './A';
import CustomNextArrow from './CustomNextArrow';
import CustomPrevArrow from './CustomPrevArrow';
import bg from './testimonials.jpg';

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Parallax bgImage={bg} strength={400}>
      <Row>
        <Column md={10} mdShift={1}>
          <Slider {...settings}>

            <div>
              <Testimonial
                who={'Mark Chew'}
                what={<span>Co-Founder, CARPUT by <A href="http://www.thebatteryshop.my/">The Battery Shop</A></span>}
                head={'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/legacy/wp-content/uploads/2016/09/mark.originalround.png'}
                says="CanLaw provided us with great service. We got connected with an experienced lawyer who provided us with painless and affordable legal guidance. We really needed this as a startup."
              />
            </div>
            <div>
              <Testimonial
                who={'Ng Wei Chong'}
                what={<span>CEO of <A href="https://www.zapzapmath.com/">Zap Zap Math</A></span>}
                head={'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/legacy/wp-content/uploads/2016/11/Wei-Chong.png'}
                says="I am really pleased with the lawyer we found through CanLaw, as he really understood our requirements. Would recommend CanLaw to any start-ups in search for legal services."
              />
            </div>
            <div>
              <Testimonial
                who={'Keith Liew'}
                what={<span>Founder of <A href="http://www.getleads.asia/">GetLeads.Asia</A></span>}
                head={'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/legacy/wp-content/uploads/2016/11/Keith-Liew.png'}
                says="We found a lawyer on CanLaw who charged us a very reasonable price. Great work quality too! Strongly recommend startups to try out this awesome platform!"
              />
            </div>
            <div>
              <Testimonial
                who={'Zafrul Noordin'}
                what={<span>Founder, <A href="http://www.codearmy.com">Code Ar.my</A></span>}
                head={'https://s3-ap-southeast-1.amazonaws.com/warehouse.canlaw.asia/legacy/wp-content/uploads/2016/10/zaf.gif'}
                says="CanLaw presented an exceptionally well-researched and interesting idea... We would rank their team in the top 10% of all participants that have come through the Project Brainchild program."
              />
            </div>
          </Slider>
        </Column>
      </Row>
    </Parallax>
  );
}

Testimonials.propTypes = {};

export default Testimonials;
