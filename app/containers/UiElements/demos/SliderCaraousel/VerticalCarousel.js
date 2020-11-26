import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import imgData from 'dan-api/images/imgData';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';

const styles = ({
  item: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  }
});

class VerticalCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          {imgData.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

VerticalCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VerticalCarousel);
