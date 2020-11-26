import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { reduxForm, Field } from 'redux-form/immutable';
import { connect } from 'react-redux';
import css from 'dan-styles/Form.scss';
import { TextFieldRedux } from '../Forms/ReduxFormMUI';
import styles from './taskBoard-jss';

// validation functions
const required = value => (value == null ? 'Required' : undefined);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

function AddBoardForm(props) {
  const saveRef = useRef();

  const {
    classes,
    reset,
    pristine,
    submitting,
    handleSubmit,
  } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className={css.bodyForm}>
          <div>
            <Field
              name="title"
              component={TextFieldRedux}
              placeholder="Board Name"
              label="Board Name"
              validate={required}
              required
              ref={saveRef}
              className={classes.field}
            />
          </div>
          <div>
            <Field
              name="label"
              component={TextFieldRedux}
              placeholder="Label"
              label="Label"
              ref={saveRef}
              className={classes.field}
            />
          </div>
          <div className={classes.fieldBasic}>
            <FormLabel component="label">Accent Color</FormLabel>
            <Field name="color" className={classes.inlineWrap} component={renderRadioGroup}>
              <FormControlLabel value="#EC407A" control={<Radio className={classes.redRadio} classes={{ root: classes.redRadio, checked: classes.checked }} />} label="Red" />
              <FormControlLabel value="#43A047" control={<Radio className={classes.greenRadio} classes={{ root: classes.greenRadio, checked: classes.checked }} />} label="Green" />
              <FormControlLabel value="#2096f3" control={<Radio className={classes.blueRadio} classes={{ root: classes.blueRadio, checked: classes.checked }} />} label="Blue" />
              <FormControlLabel value="#AB47BC" control={<Radio className={classes.violetRadio} classes={{ root: classes.violetRadio, checked: classes.checked }} />} label="Violet" />
              <FormControlLabel value="#FF5722" control={<Radio className={classes.orangeRadio} classes={{ root: classes.orangeRadio, checked: classes.checked }} />} label="Orange" />
            </Field>
          </div>
        </section>
        <div className={css.buttonArea}>
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
    </div>
  );
}

AddBoardForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const AddEventFormRedux = reduxForm({
  form: 'immutableAddBoard',
  enableReinitialize: true,
})(AddBoardForm);

const reducer = 'taskboard';
const AddEventInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
)(AddEventFormRedux);

export default withStyles(styles)(AddEventInit);
