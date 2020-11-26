import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import commentData from 'dan-api/apps/commentData';
import styles from 'dan-components/Product/product-jss';
import Comments from '../Comments';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

function ProductDetail(props) {
  const [value, setValue] = useState(0);
  const { classes, theme } = props;

  const handleChange = (event, val) => {
    setValue(val);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div>
      <Paper className={classes.rootDesc} elevation={0}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Comments" />
            <Tab label="Description" />
            <Tab label="Specification" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Comments dataList={commentData} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <article>
              <Grid container spacing={3}>
                <Grid item md={9} xs={12}>
                  <Typography variant="h6" gutterBottom>Etiam porta sem</Typography>
                  <Typography variant="caption">
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography variant="button">Cum sociis</Typography>
                  <Typography>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography variant="subtitle1">Maecenas sed</Typography>
                  <Typography variant="body2">
                    Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Vestibulum bibendum nisi eget magna malesuada, at mattis eros efficitur. Vivamus facilisis quam ullamcorper iaculis gravida.
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography variant="h5" gutterBottom>Etiam porta sem</Typography>
                  <Typography variant="button">
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography variant="subtitle2">Maecenas sed</Typography>
                </Grid>
              </Grid>
            </article>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <List>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>
                      <Icon>adb</Icon>
                    </Avatar>
                    <ListItemText primary="Nulla" secondary="100Mm" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>
                      <Icon>all_out</Icon>
                    </Avatar>
                    <ListItemText primary="Vivamus" secondary="20K" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>
                      <Icon>assessment</Icon>
                    </Avatar>
                    <ListItemText primary="Cras convallis" secondary="999+" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>
                      <Icon>build</Icon>
                    </Avatar>
                    <ListItemText primary="Quisque a consequa" secondary="70 Milion" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={4} xs={12}>
                <List>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.blueAvatar)}>
                      <Icon>camera_alt</Icon>
                    </Avatar>
                    <ListItemText primary="Quisque a consequa" secondary="70 Milion" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.cyanAvatar)}>
                      <Icon>content_paste</Icon>
                    </Avatar>
                    <ListItemText primary="Cras convallis" secondary="999+" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.redAvatar)}>
                      <Icon>dialpad</Icon>
                    </Avatar>
                    <ListItemText primary="Vivamus" secondary="20K" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.tealAvatar)}>
                      <Icon>drive_eta</Icon>
                    </Avatar>
                    <ListItemText primary="Nulla" secondary="100Mm" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={4} xs={12}>
                <List>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.brownAvatar)}>
                      <Icon>fiber_smart_record</Icon>
                    </Avatar>
                    <ListItemText primary="Nulla" secondary="100Mm" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.purpleDeepAvatar)}>
                      <Icon>filter_drama</Icon>
                    </Avatar>
                    <ListItemText primary="Vivamus" secondary="20K" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.amberAvatar)}>
                      <Icon>language</Icon>
                    </Avatar>
                    <ListItemText primary="Cras convallis" secondary="999+" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classNames(classes.avatar, classes.limeAvatar)}>
                      <Icon>lock</Icon>
                    </Avatar>
                    <ListItemText primary="Quisque a consequa" secondary="70 Milion" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </TabContainer>
        </SwipeableViews>
      </Paper>
    </div>
  );
}

ProductDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProductDetail);
