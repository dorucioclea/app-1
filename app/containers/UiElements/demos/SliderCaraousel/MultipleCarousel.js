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

class MultipleCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
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

MultipleCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MultipleCarousel);
