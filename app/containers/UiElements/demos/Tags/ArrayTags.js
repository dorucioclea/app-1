import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
});

class ArrayTags extends React.Component {
  state = {
    chipData: [
      { key: 0, label: 'Angular' },
      { key: 1, label: 'jQuery' },
      { key: 2, label: 'Polymer' },
      { key: 3, label: 'React' },
      { key: 4, label: 'Vue.js' },
    ],
  };

  handleDelete = data => () => {
    const { chipData } = this.state;
    if (data.label === 'React') {
      alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert
      return;
    }

    const chipDataConst = [...chipData];
    const chipToDelete = chipDataConst.indexOf(data);
    chipDataConst.splice(chipToDelete, 1);
    this.setState({ chipData: chipDataConst });
  };

  render() {
    const { classes } = this.props;
    const { chipData } = this.state;

    return (
      <Paper className={classes.root}>
        {chipData.map(data => {
          let avatar = null;

          if (data.label === 'React') {
            avatar = (
              <Avatar>
                <TagFacesIcon className={classes.svgIcon} />
              </Avatar>
            );
          }

          return (
            <Chip
              key={data.key}
              avatar={avatar}
              label={data.label}
              onDelete={this.handleDelete(data)}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    );
  }
}

ArrayTags.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArrayTags);
