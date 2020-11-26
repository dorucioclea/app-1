import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { HeaderLanding, Footer } from 'dan-components';
import styles from './appStyles-jss';

function Corporate(props) {
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

  const { classes, children } = props;
  return (
    <div className={classes.appFrameLanding} id="mainContent">
      <HeaderLanding turnDarker={transform > 30} />
      {children}
      <Footer />
    </div>
  );
}

Corporate.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default (withStyles(styles)(Corporate));
