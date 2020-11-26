import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form/immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { PapperBlock } from 'dan-components';
import { TextFieldRedux } from 'dan-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'dan-redux/actions/reduxFormActions';
import styles from './helpSupport-jss';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

class ContactForm extends Component {
  render() {
    const trueBool = true;
    const {
      classes,
      handleSubmit,
      pristine,
      reset,
      submitting,
    } = this.props;
    return (
      <PapperBlock title="Contact Us" whiteBg icon="ios-call-outline" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.">
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="name"
              component={TextFieldRedux}
              placeholder="Name"
              label="Name"
              validate={required}
              required
              ref={this.saveRef}
              className={classes.field}
            />
          </div>
          <div>
            <Field
              name="email"
              component={TextFieldRedux}
              placeholder="Email Field"
              label="Email"
              required
              validate={[required, email]}
              className={classes.field}
            />
          </div>
          <div className={classes.field}>
            <Field
              name="message"
              className={classes.field}
              component={TextFieldRedux}
              validate={required}
              placeholder="Message"
              label="Message"
              multiline={trueBool}
              rows={4}
            />
          </div>
          <div>
            <Button variant="contained" color="secondary" type="submit" disabled={submitting}>
              Submit
            </Button>
            <Button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Reset
            </Button>
          </div>
        </form>
      </PapperBlock>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const ContactFormMapped = reduxForm({
  form: 'immutableExample',
})(ContactForm);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ContactFormMapped);

export default withStyles(styles)(FormInit);
