import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Type from 'dan-styles/Typography.scss';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Slider from 'react-animated-slider';
import imgApi from 'dan-api/images/photos';
import TestimonialsParallax from './TestimonialsParallax';
import 'dan-styles/vendors/react-animated-slider/react-animated-slider.css';
import Title from './Title';
import styles from './landingStyle-jss';

const content = [
  {
    title: 'Vulputate Mollis Ultricies',
    image: imgApi[11],
    user: 'Luanda Gjokaj',
  },
  {
    title: 'Tortor Dapibus Commodo',
    image: imgApi[14],
    user: 'Erich Behrens',
  },
  {
    title: 'Phasellus volutpat metus',
    image: imgApi[15],
    user: 'Bruno Vizovskyy',
  }
];


function Testimonials(props) {
  const { classes, slideMode } = props;

  return (
    <div className={classes.testimonials}>
      {!slideMode && (<TestimonialsParallax />)}
      <div className={!slideMode ? classes.container : classes.fullSliderContent}>
        <Title title="What people said" align="center" monocolor={slideMode && true} />
        <div className={classes.sliderWrap}>
          <Slider className="slider-wrapper">
            {content.map((item, index) => (
              <div
                key={index.toString()}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <IconButton aria-label="Play/pause" className={classes.playIcon}>
                  <PlayArrowIcon />
                </IconButton>
                <p className={classNames(classes.videoCaption, slideMode ? classes.mono : classes.color)}>
                  <Typography
                    variant="h6"
                    component="span"
                    className={Type.light}
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography component="span">
                    {item.user}
                  </Typography>
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

Testimonials.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

Testimonials.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Testimonials);
