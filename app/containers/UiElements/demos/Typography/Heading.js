import React from 'react';
import Typography from '@material-ui/core/Typography';

class Heading extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h1" gutterBottom>
          Disp 4
        </Typography>
        <Typography variant="h2" gutterBottom>
          Display 3
        </Typography>
        <Typography variant="h3" gutterBottom>
          Display 2
        </Typography>
        <Typography variant="h4" gutterBottom>
          Display 1
        </Typography>
        <Typography variant="h5" gutterBottom>
          Headline
        </Typography>
        <Typography variant="h6" gutterBottom>
          Title
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Subheading
        </Typography>
        <Typography gutterBottom noWrap>
          {`
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          `}
        </Typography>
      </div>
    );
  }
}

export default Heading;
