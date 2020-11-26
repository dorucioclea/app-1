import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Contact, HeadlineCard, ShowcaseCard } from 'dan-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import img from 'dan-api/images/photos';
import SidebarBlog from './SidebarBlog';
import styles from './blogStyle-jss';

let counter = 0;
function createData(title, date, desc, image) {
  counter += 1;
  return {
    id: counter,
    title,
    date,
    desc,
    image,
  };
}

class Blog extends React.Component {
  state = {
    postData: [
      createData('Vivamus sit amet ibero lobortis', 'Nov 4', 'Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.', img[36]),
      createData('Quisque ut metus ultricies', 'Nov 4', 'Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.', img[35]),
      createData('Vivamus sit amet', 'Nov 4', 'Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.', img[19]),
      createData('Duis sed augue sed libero', 'Nov 2', 'Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.', img[7]),
      createData('Vitae viverra justo', 'Nov 2', 'Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem.', img[34]),
    ]
  };

  render() {
    const { postData } = this.state;
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <section id="headline">
            <HeadlineCard
              title="Title of a longer featured blog post"
              desc="Multiple lines of text that form the lede, informing new readers quickly and efficiently about what&apos;s most interesting in this post&apos;s contents…"
              thumbnail={img[0]}
            />
          </section>
          <Divider className={classes.divider} />
          <Hidden mdUp>
            <Typography variant="h4" gutterBottom>Popular Post</Typography>
          </Hidden>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <ShowcaseCard
                landscape
                title="Post title"
                date="Nov 12"
                desc="Aenean facilisis vitae purus facilisis semper."
                action="Read more"
                image={img[5]}
                href="/blog/article"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <ShowcaseCard
                landscape
                title="Featured post"
                date="Nov 11"
                desc="Duis sed augue phasellus ante massa."
                action="Read more"
                image={img[6]}
                href="/blog/article"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
              <section className={classes.postList}>
                <Hidden mdUp>
                  <Typography variant="h4" gutterBottom>Latest Post</Typography>
                </Hidden>
                {postData.map((item, index) => (
                  <ShowcaseCard
                    key={index.toString()}
                    title={item.title}
                    date={item.date}
                    desc={item.desc}
                    action="Read more"
                    image={item.image}
                    noMargin
                    extraSize
                    href="/blog/article"
                  />
                ))}
              </section>
              <div className={classes.pagination}>
                <Button disabled className={classes.button} variant="outlined" color="primary">
                  <ArrowBack />
                  Previous
                </Button>
                <Button className={classes.button} variant="outlined" color="primary">
                  Next
                  <ArrowForward />
                </Button>
              </div>
            </Grid>
            <Grid item md={4} xs={12}>
              <SidebarBlog />
            </Grid>
          </Grid>
        </div>
        <section id="contact">
          <Contact />
        </section>
      </Fragment>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
