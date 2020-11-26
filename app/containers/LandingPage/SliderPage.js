import React, { Fragment, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SideNav from 'dan-components/LandingPage/SideNav';
import styles from 'dan-components/LandingPage/landingStyle-jss';
import Hidden from '@material-ui/core/Hidden';
import {
  Banner,
  Feature,
  ShowcaseSlider,
  Testimonials,
  Technology,
  Pricing,
  Contact
} from 'dan-components';

function SliderPage(props) {
  const [curSlide, setCurSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(false);
  const slider = useRef(null);

  const setParallaxState = () => {
    setNextSlide(!nextSlide);
  };

  const setActiveMenu = index => {
    setCurSlide(index);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
    setParallaxState();
  };

  const { classes, sidebarOpen } = props;

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Fragment>
      <Hidden mdDown>
        <SideNav
          open={sidebarOpen}
          curSlide={curSlide}
          gotoSlide={(slide) => gotoSlide(slide)}
        />
      </Hidden>
      <main className={classes.fullSliderContent} id="mainContent">
        <div className={classes.parallaxBg}>
          <div className={classNames(classes.odd, nextSlide && classes.show)}>
            <img src="/images/decoration/parallaxPetal3.png" className={classes.line1} alt="petal" />
            <img src="/images/decoration/parallaxPetal4.png" className={classes.line2} alt="petal" />
            <img src="/images/decoration/parallaxPetal1.png" className={classes.petal1} alt="petal" />
            <img src="/images/decoration/parallaxPetal2.png" className={classes.petal2} alt="petal" />
          </div>
          <div className={classNames(classes.even, !nextSlide && classes.show)}>
            <img src="/images/decoration/parallaxPetal31.png" className={classes.line1} alt="petal" />
            <img src="/images/decoration/parallaxPetal41.png" className={classes.line2} alt="petal" />
            <img src="/images/decoration/parallaxPetal11.png" className={classes.petal1} alt="petal" />
            <img src="/images/decoration/parallaxPetal21.png" className={classes.petal2} alt="petal" />
          </div>
        </div>
        <div className={classes.sliderPageWrap}>
          <Hidden mdDown>
            <Slider
              ref={slider}
              {...settings}
              onSwipe={() => setParallaxState()}
              afterChange={(index) => setActiveMenu(index)}
            >
              <section id="banner">
                <Banner slideMode />
              </section>
              <section id="feature">
                <Feature slideMode />
              </section>
              <section id="showcase">
                <ShowcaseSlider slideMode />
              </section>
              <section id="testimonials">
                <Testimonials slideMode />
              </section>
              <section id="technology">
                <Technology slideMode />
              </section>
              <section id="pricing">
                <Pricing slideMode />
              </section>
              <section id="contact">
                <Contact slideMode />
              </section>
            </Slider>
          </Hidden>
          <Hidden only="lg">
            <section id="banner">
              <Banner slideMode />
            </section>
            <section id="feature">
              <Feature slideMode />
            </section>
            <section id="showcase">
              <ShowcaseSlider slideMode />
            </section>
            <section id="testimonials">
              <Testimonials slideMode />
            </section>
            <section id="technology">
              <Technology slideMode />
            </section>
            <section id="pricing">
              <Pricing slideMode />
            </section>
            <section id="contact">
              <Contact slideMode />
            </section>
          </Hidden>
        </div>
      </main>
    </Fragment>
  );
}

SliderPage.propTypes = {
  classes: PropTypes.object.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
};

const reducer = 'ui';
const mapStateToProps = state => ({
  sidebarOpen: state.getIn([reducer, 'sidebarOpen']),
  gradient: state.getIn([reducer, 'gradient']),
});

const SliderPageMapped = connect(
  mapStateToProps,
)(SliderPage);

export default (withStyles(styles)(SliderPageMapped));
