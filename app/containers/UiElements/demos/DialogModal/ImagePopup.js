import React, { Component } from 'react';
import 'dan-styles/vendors/image-lightbox/image-lightbox.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import images from 'dan-api/images/imgData';
import { ImageLightbox } from '../../../../components';

export default class ImagePopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Button variant="outlined" color="secondary" onClick={() => this.setState({ isOpen: true })}>
          Open Image Lightbox
        </Button>

        {isOpen && (
          <ImageLightbox
            mainSrc={images[photoIndex].img}
            nextSrc={images[(photoIndex + 1) % images.length].img}
            prevSrc={images[(photoIndex + (images.length - 1)) % images.length].img}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() => this.setState({
              photoIndex: (photoIndex + (images.length - 1)) % images.length,
            })}
            onMoveNextRequest={() => this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })}
          />
        )}
      </Grid>
    );
  }
}
