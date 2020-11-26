import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

function ListItem(props) {
  const { classes, children } = props;
  return (
    <li className={classes.listItem}>
      {children}
    </li>
  );
}

ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

const ListItemStyled = withStyles(styles)(ListItem);

const renderers = {
  /* eslint-disable-next-line react/prop-types */
  heading: ({ level, ...props }) => {
    let variant;
    let paragraph;

    switch (level) {
      case 1:
        variant = 'h4';
        break;
      case 2:
        variant = 'subtitle1';
        break;
      case 3:
        variant = 'h6';
        break;
      case 4:
        variant = 'caption';
        paragraph = true;
        break;
      default:
        variant = '';
        break;
    }

    return <Typography {...props} gutterBottom variant={variant} paragraph={paragraph} />;
  },
  listItem: ({
    tight, // eslint-disable-line
    ordered, // eslint-disable-line
    ...props
  }) => (
    <ListItemStyled>
      <Typography component="span" {...props} />
    </ListItemStyled>
  ),
  paragraph: props => <Typography {...props} paragraph />,
};

export default function Markdown(props) {
  return <ReactMarkdown renderers={renderers} {...props} />;
}
