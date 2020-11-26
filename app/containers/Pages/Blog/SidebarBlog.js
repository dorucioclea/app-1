import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import LocalPhone from '@material-ui/icons/LocalPhone';
import DateRange from '@material-ui/icons/DateRange';
import LocationOn from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import imgData from 'dan-api/images/imgData';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Send from '@material-ui/icons/Send';
import { PapperBlock } from 'dan-components';
import styles from 'dan-components/Profile/profile-jss';

class SidebarBlog extends React.Component {
  state = {
    email: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { email } = this.state;
    const { classes } = this.props;
    return (
      <div>
        {/* Subscribe */}
        <PapperBlock title="Subscribe" icon="ios-wifi-outline" colorMode whiteBg noMargin desc="Get lates update from us">
          <div className={classes.subscribeForm}>
            <FormControl>
              <TextField
                label="Email"
                className={classes.textField}
                value={email}
                onChange={this.handleChange('email')}
                margin="normal"
                classes={{
                  root: classes.whiteInputRoot,
                  input: classes.whiteInputInput,
                }}
              />
            </FormControl>
            <Fab size="small" color="secondary" type="submit">
              <Send />
            </Fab>
          </div>
        </PapperBlock>
        {/* ----------------------------------------------------------------------*/}
        <Divider className={classes.divider} />
        {/* About */}
        <PapperBlock title="About Me" icon="ios-contact-outline" whiteBg noMargin desc="Consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.">
          <List dense className={classes.profileList}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <DateRange />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Born" secondary="Jan 9, 1994" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocalPhone />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Phone" secondary="(+62)8765432190" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOn />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Address"
                secondary="Chicendo Street no.105 Block A/5A - Barcelona, Spain"
                classes={{
                  root: classes.listText
                }}
              />
            </ListItem>
          </List>
        </PapperBlock>
        {/* ----------------------------------------------------------------------*/}
        <Divider className={classes.divider} />
        {/* latest Posts */}
        <PapperBlock title="latest Posts" icon="ios-bookmark-outline" whiteBg desc="">
          <div className={classes.albumRoot}>
            <List>
              <ListItem button>
                <ListItemText primary="Curabitur egestas consequat " secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Interdum et malesuada fames" secondary="Jan 7, 2014" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Pellentesque ullamcorper" secondary="July 20, 2014" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Quisque a consequat ante" secondary="July 20, 2014" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Donec dignissim odio ac" secondary="July 20, 2014" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Curabitur egestas consequat " secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Interdum et malesuada fames" secondary="Jan 7, 2014" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Pellentesque ullamcorper" secondary="July 20, 2014" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Quisque a consequat ante" secondary="July 20, 2014" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Donec dignissim odio ac" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </div>
        </PapperBlock>
        {/* latest comment */}
        <PapperBlock title="Latest Comment" icon="ios-text-outline" whiteBg desc="">
          <List dense className={classes.profileList}>
            <ListItem button>
              <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>H</Avatar>
              <ListItemText primary="Harry Wells" secondary="in Vestibulum bibendum" />
            </ListItem>
            <ListItem button>
              <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>J</Avatar>
              <ListItemText primary="John DOe" secondary="in Quisque ut metus" />
            </ListItem>
            <ListItem button>
              <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>V</Avatar>
              <ListItemText primary="Victor Wanggai" secondary="in Vestibulum bibendum" />
            </ListItem>
            <ListItem button>
              <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>H</Avatar>
              <ListItemText primary="Baron Phoenix" secondary="Aenean sit amet magna" />
            </ListItem>
            <ListItem button>
              <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>H</Avatar>
              <ListItemText primary="Baron Phoenix" secondary="Aenean sit amet magna" />
            </ListItem>
          </List>
        </PapperBlock>
        {/* ----------------------------------------------------------------------*/}
        {/* Archived */}
        <PapperBlock title="Archived" icon="ios-folder-open-outline" whiteBg desc="">
          <div className={classes.albumRoot}>
            <List>
              <ListItem button>
                <ListItemText primary="October 2018" />
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary="September 2018" />
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Augustus 2018" />
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary="July 2018" />
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Jun 2018" />
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary="May 2018" />
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary="April 2018" />
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Marh 2018" />
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary="Febuary 2018" />
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary="January 2018" />
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
              </ListItem>
            </List>
          </div>
        </PapperBlock>
        {/* ----------------------------------------------------------------------*/}
        {/* Albums Post */}
        <PapperBlock title="Album Posts" icon="ios-images-outline" whiteBg desc="">
          <div className={classes.albumRoot}>
            <GridList cellHeight={180} className={classes.gridList}>
              {
                imgData.map((tile, index) => {
                  if (index >= 4) {
                    return false;
                  }
                  return (
                    <GridListTile key={index.toString()}>
                      <img src={tile.img} className={classes.img} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        subtitle={(
                          <span>
                            by:&nbsp;
                            {tile.author}
                          </span>
                        )}
                        actionIcon={(
                          <IconButton className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        )}
                      />
                    </GridListTile>
                  );
                })
              }
            </GridList>
          </div>
          <Divider className={classes.divider} />
          <Grid container justify="center">
            <Button color="secondary" className={classes.button}>
              See All
            </Button>
          </Grid>
        </PapperBlock>
      </div>
    );
  }
}

SidebarBlog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidebarBlog);
