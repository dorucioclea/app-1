import React from 'react';
import { createUltimatePagination, ITEM_TYPES } from 'react-ultimate-pagination';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import NavigationFirstPage from '@material-ui/icons/FirstPage';
import NavigationLastPage from '@material-ui/icons/LastPage';
import NavigationChevronLeft from '@material-ui/icons/ChevronLeft';
import NavigationChevronRight from '@material-ui/icons/ChevronRight';

const flatButtonStyle = {
  minWidth: 36
};

const styles = {
  paging: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const Page = ({
  value,
  isActive,
  onClick,
  isDisabled
}) => (
  <Button
    style={flatButtonStyle}
    color={isActive ? 'primary' : 'default'}
    onClick={onClick}
    disabled={isDisabled}
  >
    {value.toString()}
  </Button>
);

Page.propTypes = {
  value: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const Ellipsis = ({ onClick, isDisabled }) => (
  <Button
    style={flatButtonStyle}
    onClick={onClick}
    disabled={isDisabled}
  >
    ...
  </Button>
);

Ellipsis.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const FirstPageLink = ({ onClick, isDisabled }) => (
  <IconButton
    style={flatButtonStyle}
    onClick={onClick}
    disabled={isDisabled}
  >
    <NavigationFirstPage />
  </IconButton>
);


FirstPageLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const PreviousPageLink = ({ onClick, isDisabled }) => (
  <IconButton
    style={flatButtonStyle}
    onClick={onClick}
    disabled={isDisabled}
  >
    <NavigationChevronLeft />
  </IconButton>
);

PreviousPageLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const NextPageLink = ({ onClick, isDisabled }) => (
  <IconButton
    style={flatButtonStyle}
    onClick={onClick}
    disabled={isDisabled}
  >
    <NavigationChevronRight />
  </IconButton>
);

NextPageLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

const LastPageLink = ({ onClick, isDisabled }) => (
  <IconButton
    style={flatButtonStyle}
    onClick={onClick}
    disabled={isDisabled}
  >
    <NavigationLastPage />
  </IconButton>
);

LastPageLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};


const itemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

const UltmPagination = createUltimatePagination({ itemTypeToComponent });

class Pagination extends React.Component {
  constructor(props) {
    super();
    this.state = {
      totalPages: props.totpages
    };
  }

  render() {
    const hide = true;
    const { totalPages } = this.state;
    const {
      classes,
      curpage,
      onChange,
      onGoFirst,
      onPrev,
      onNext,
      onGoLast,
      ...rest
    } = this.props;
    return (
      <div className={classes.paging}>
        <FirstPageLink isDisabled={curpage <= 1} onClick={onGoFirst} />
        <PreviousPageLink isDisabled={curpage <= 1} onClick={onPrev} />
        <Hidden xsDown>
          <UltmPagination
            currentPage={curpage}
            totalPages={totalPages}
            onChange={onChange}
            hidePreviousAndNextPageLinks={hide}
            hideFirstAndLastPageLinks={hide}
            {...rest}
          />
        </Hidden>
        <NextPageLink isDisabled={curpage >= totalPages} onClick={onNext} />
        <LastPageLink isDisabled={curpage >= totalPages} onClick={onGoLast} />
      </div>
    );
  }
}

Pagination.propTypes = {
  curpage: PropTypes.number.isRequired,
  totpages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onGoFirst: PropTypes.func.isRequired,
  onGoLast: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pagination);
