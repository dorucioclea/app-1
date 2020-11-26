import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import styles from './landingStyle-jss';

function TestimonialsParallax(props) {
  const { classes } = props;
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <Parallax
          offsetYMax={180}
          offsetYMin={-200}
          slowerScrollRate
          tag="figure"
        >
          <svg
            fill="#fff"
            className={
              classNames(
                classes.parallaxVertical,
                classes.parallaxLineSide1
              )
            }
          >
            <use xlinkHref="/images/decoration/lineSide1.svg#Line-Side1" />
          </svg>
        </Parallax>
        <Parallax
          offsetYMax={100}
          offsetYMin={-350}
          slowerScrollRate
          tag="figure"
        >
          <svg
            fill="#fff"
            className={
              classNames(
                classes.parallaxVertical,
                classes.parallaxLineSide2
              )
            }
          >
            <use xlinkHref="/images/decoration/lineSide2.svg#Line-Side2" />
          </svg>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

TestimonialsParallax.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestimonialsParallax);
