import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Pagination } from '../../../../components';

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing(3),
  }),
});

class GeneralPagination extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      content: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Suspendisse sed urna in justo euismod condimentum',
        'Fusce placerat enim et odio molestie sagittis.',
        'Vestibulum dignissim orci vitae eros rutrum euismod.',
        'Vestibulum tempor, sem et molestie egestas, dui tortor laoreet tellus, id rhoncus mauris neque malesuada augue.',
        'Duis tristique metus magna, lobortis aliquam risus euismod sit amet.',
        'Suspendisse porttitor velit nisl, feugiat tincidunt nisl mattis ut.',
        'Nulla lobortis nunc vitae nisi semper semper.',
        'Sed mi neque, convallis at ipsum at, blandit pretium enim.',
        'Nunc quis sem quis velit tincidunt congue a sit amet ante.',
        'In hac habitasse platea dictumst.',
        'In mi nulla, fringilla vestibulum finibus et, vehicula non leo. Vivamus et luctus mauris.',
        'Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus.',
        'In non erat et ipsum molestie porta sit amet ut felis.',
        'Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.',
        'Ut sed eros finibus, placerat orci id, dapibus mauris.',
        'Proin varius, tortor faucibus tempor pharetra, nunc mi consectetur enim, nec posuere ante magna vitae quam.',
        'Cras convallis lacus orci, tristique tincidunt magna consequat in.',
        'Vestibulum consequat hendrerit lacus. In id nisi id neque venenatis molestie.',
        'Quisque lacinia purus ut libero facilisis, at vulputate sem maximus.',
        'Pellentesque ac bibendum tortor, vel blandit nulla.',
        'Nulla eget lobortis lacus.',
        'Aliquam venenatis magna et odio lobortis maximus.',
        'Nullam in tortor ligula.',
        'Proin maximus risus nunc, eu aliquam nibh tempus a.',
        'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      ],
      contentsPerPage: 3
    };
    this.onPageChange = this.onPageChange.bind(this);
    this.onPrev = this.onPrev.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onGoFirst = this.onGoFirst.bind(this);
    this.onGoLast = this.onGoLast.bind(this);
  }

  onPageChange(page) {
    this.setState({ page });
  }

  onPrev() {
    let { page } = this.state;
    if (page > 1) {
      this.setState({ page: page -= 1 });
    } else {
      this.setState({ page: 1 });
    }
  }

  onNext(totalPages) {
    let { page } = this.state;
    if (page < totalPages) {
      this.setState({ page: page += 1 });
    } else {
      this.setState({ page: totalPages });
    }
  }

  onGoFirst() {
    this.setState({ page: 1 });
  }

  onGoLast(totalPages) {
    this.setState({ page: totalPages });
  }

  render() {
    const { classes } = this.props;
    const { page, content, contentsPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = page * contentsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - contentsPerPage;
    const currentContent = content.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderContent = currentContent.map((ctn, index) => (
      <p key={index.toString()}>{ctn}</p>
    ));

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(content.length / contentsPerPage); i += 1) {
      pageNumbers.push(i);
    }

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <h3>
            We are in page&nbsp;
            {page}
          </h3>
          <article>
            {renderContent}
          </article>
        </Paper>
        <Pagination
          curpage={page}
          totpages={pageNumbers.length}
          boundaryPagesRange={1}
          onChange={this.onPageChange}
          siblingPagesRange={1}
          hideEllipsis={false}
          onPrev={this.onPrev}
          onNext={() => this.onNext(pageNumbers.length)}
          onGoFirst={this.onGoFirst}
          onGoLast={() => this.onGoLast(pageNumbers.length)}
        />
      </div>
    );
  }
}

GeneralPagination.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralPagination);
