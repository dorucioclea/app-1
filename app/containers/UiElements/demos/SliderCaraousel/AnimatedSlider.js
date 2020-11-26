import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Type from 'dan-styles/Typography.scss';
import Hidden from '@material-ui/core/Hidden';
import Slider from 'react-animated-slider';
import imgApi from 'dan-api/images/photos';
import avatarApi from 'dan-api/images/avatars';
import 'dan-styles/vendors/react-animated-slider/react-animated-slider.css';

const content = [
  {
    title: 'Vulputate Mollis Ultricies Fermentum Parturient',
    description:
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
    button: 'Read More',
    image: imgApi[38],
    user: 'Luanda Gjokaj',
    userProfile: avatarApi[1]
  },
  {
    title: 'Tortor Dapibus Commodo Aenean Quam',
    description:
    'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
    button: 'Discover',
    image: imgApi[2],
    user: 'Erich Behrens',
    userProfile: avatarApi[8]
  },
  {
    title: 'Phasellus volutpat metus',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
    button: 'Buy now',
    image: imgApi[28],
    user: 'Bruno Vizovskyy',
    userProfile: avatarApi[10]
  }
];

const AnimatedSlider = () => (
  <div>
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index.toString()}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <Typography variant="h4" component="h1" className={Type.light} gutterBottom>{item.title}</Typography>
            <Hidden mdDown>
              <p>{item.description}</p>
            </Hidden>
            <Button variant="contained" color="primary">
              {item.button}
            </Button>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by&nbsp;
              <strong>
                {item.user}
              </strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  </div>
);

export default AnimatedSlider;
