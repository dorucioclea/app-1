import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Title from './Title';
import styles from './landingStyle-jss';

function Contact(props) {
  const { classes, slideMode } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={classNames(classes.contact, !slideMode && classes.withBg)}>
      <div className={classes.container}>
        <div className={classes.contactBubble}>
          <Title title="Say hello to us" align="left" nomargin />
          <Typography component="p" className={classes.contactText}>Vivamus et luctus mauris. Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis.</Typography>
          <Grid container spacing={3}>
            <Grid item lg={6} xs={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  fullWidth
                  label="Who are You?"
                  className={classes.textField}
                  value={name}
                  required
                  onChange={e => setName(e.target.value)}
                  margin="normal"
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  fullWidth
                  id="standard-email"
                  label="You'r email?"
                  className={classes.textField}
                  value={email}
                  required
                  onChange={e => setEmail(e.target.value)}
                  margin="normal"
                />
              </FormControl>
            </Grid>
            <Grid item lg={6} xs={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  fullWidth
                  id="standard-multiline-flexible"
                  label="Messages"
                  multiline
                  rows="4"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className={classes.textField}
                  margin="normal"
                />
              </FormControl>
              <div className={classes.btnArea}>
                <Button variant="contained" size="large" className={classes.button} color="secondary">Send</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

Contact.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Contact);
