import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import dataIcon from 'dan-api/icons/ion-icon';
import { PapperBlock } from 'dan-components';
import DetailIonIcon from './IconGallery/DetailIonIcon';
import SearchIcons from './IconGallery/SearchIcons';

const styles = theme => ({
  hide: {
    display: 'none'
  },
  iconsList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
    overflow: 'auto',
    maxHeight: 1000,
    position: 'relative'
  },
  iconWrap: {
    position: 'relative',
    width: 120,
    margin: 20,
    [theme.breakpoints.down('xs')]: {
      margin: 10,
    },
    textAlign: 'center'
  },
  btn: {
    display: 'block',
    textAlign: 'center',
    margin: '0 auto',
    '& i': {
      width: 36,
      height: 36,
      lineHeight: '36px'
    }
  },
  icon: {
    fontSize: 48,
  },
  preloader: {
    width: '100%'
  },
});

class IonIcons extends React.Component {
  state = {
    loading: true,
    openDetail: false,
    iconName: '',
    filterText: ''
  };

  componentDidMount = () => {
    this.setState({ loading: false });
  }

  handleOpenDetail = name => {
    this.setState({
      openDetail: true,
      iconName: name,
    });
  };

  handleCloseDetail = () => {
    this.setState({ openDetail: false });
  };

  handleSearch = (event) => {
    event.persist();
    // Show result base on keyword
    this.setState({ filterText: event.target.value.toLowerCase() });
  }

  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const {
      loading,
      openDetail,
      iconName,
      filterText
    } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Ion Icons" icon="ios-ionic" desc="Ion icons a beautifully crafted open source icons. Premium designed icons for use in web.">
          <div>
            {loading
              && <LinearProgress color="secondary" className={classes.preloader} />
            }
            <SearchIcons filterText={filterText} handleSearch={(event) => this.handleSearch(event)} />
            <div className={classes.iconsList}>
              {dataIcon.map((raw, index) => {
                if (raw.toLowerCase().indexOf(filterText) === -1) {
                  return false;
                }
                return (
                  <div className={classes.iconWrap} key={index.toString()}>
                    <IconButton title="Click to see detail" onClick={() => this.handleOpenDetail(raw)} className={classes.btn}>
                      <i className={raw} />
                    </IconButton>
                    <Typography gutterBottom noWrap>{raw}</Typography>
                  </div>
                );
              })}
              <DetailIonIcon closeDetail={this.handleCloseDetail} isOpenDetail={openDetail} iconName={iconName} />
            </div>
          </div>
        </PapperBlock>
      </div>
    );
  }
}

IonIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IonIcons);
