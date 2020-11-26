import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { HeaderLanding } from 'dan-components';
import Hidden from '@material-ui/core/Hidden';
import styles from './appStyles-jss';

function Parallax(props) {
  const [transform, setTransform] = useState(0);

  const handleScroll = () => {
    const scroll = window.pageYOffset;
    setTransform(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {
    classes,
    children,
    gradient,
  } = props;

  return (
    <div className={classNames(classes.appFrameSlider, gradient ? classes.gradientBg : classes.solidBg)}>
      <Hidden only="lg">
        <HeaderLanding turnDarker={transform > 30} />
      </Hidden>
      {children}
    </div>
  );
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  gradient: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const reducer = 'ui';
const mapStateToProps = state => ({
  gradient: state.getIn([reducer, 'gradient']),
  ...state,
});

const ParallaxMaped = connect(
  mapStateToProps,
)(Parallax);

export default (withStyles(styles)(ParallaxMaped));
