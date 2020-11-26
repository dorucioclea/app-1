import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import imgData from 'dan-api/images/imgData';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      className="nav-next"
      onClick={onClick}
    >
      <ArrowForward />
    </IconButton>
  );
}

SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
};

SampleNextArrow.defaultProps = {
  onClick: undefined,
};

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      className="nav-prev"
      onClick={onClick}
    >
      <ArrowBack />
    </IconButton>
  );
}

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
};

SamplePrevArrow.defaultProps = {
  onClick: undefined,
};

const styles = ({
  item: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  }
});

class CustomCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="container custom-arrow">
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

CustomCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomCarousel);
