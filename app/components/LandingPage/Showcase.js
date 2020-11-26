import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import ShowcaseCard from '../CardPaper/ShowcaseCard';
import ShowcaseParallax from './ShowcaseParallax';
import Title from './Title';
import styles from './landingStyle-jss';

function Showcase(props) {
  const { classes, slideMode, width } = props;

  return (
    <section className={classes.showcase}>
      {!slideMode && <ShowcaseParallax />}
      <div className={classes.container}>
        <Grid container className={classes.root} spacing={5}>
          <Grid item sm={6} md={4} xs={12}>
            <Title title="Showcase" align={width === 'lg' ? 'left' : 'center'} monocolor={slideMode && true} />
            <ShowcaseCard
              title="Nam sollicitudin"
              desc="Aenean facilisis vitae purus facilisis semper."
              action="Try it"
              image="/images/screen/thumb1.jpg"
            />
            <ShowcaseCard
              title="Vestibulum nec"
              desc="Cras convallis lacus orci, tristique tincidunt magna"
              action="See Demo"
              image="/images/screen/thumb3.jpg"
            />
          </Grid>
          <Grid item sm={6} md={4} xs={12}>
            <ShowcaseCard
              title="Curabitur"
              desc="Nulla vehicula leo ut augue tincidunt"
              action="See Demo"
              image="/images/screen/thumb5.jpg"
            />
            <ShowcaseCard
              title="Nam sollicitudin"
              desc="Aenean facilisis vitae purus facilisis semper."
              action="Try It"
              image="/images/screen/thumb2.jpg"
            />
          </Grid>
          <Grid item sm={6} md={4} xs={12}>
            <div className={classes.lastShowcase}>
              <ShowcaseCard
                title="Nam posuere accumsan"
                desc="Duis sed augue phasellus ante massa."
                action="See Demo"
                image="/images/screen/thumb4.jpg"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

Showcase.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  slideMode: PropTypes.bool
};

Showcase.defaultProps = {
  slideMode: false
};


export default withWidth()(withStyles(styles)(Showcase));
