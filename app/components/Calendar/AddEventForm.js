import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { reduxForm, Field } from 'redux-form/immutable';
import MomentUtils from '@date-io/moment';
import { connect } from 'react-redux';
import css from 'dan-styles/Form.scss';
import { TextFieldRedux } from '../Forms/ReduxFormMUI';
import styles from './calendar-jss';

// validation functions
const required = value => (value == null ? 'Required' : undefined);

const DateTimePickerRow = props => {
  const {
    showErrorsInline,
    dispatch,
    input: { onChange, value },
    meta: { touched, error },
    ...other
  } = props;

  const showError = showErrorsInline || touched;
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        error={!!(showError && error)}
        helperText={showError && error}
        value={value || new Date()}
        onChange={onChange}
        disablePast
        label="DateTimePicker"
        {...other}
      />
    </MuiPickersUtilsProvider>
  );
};

DateTimePickerRow.propTypes = {
  showErrorsInline: PropTypes.bool,
  dispatch: PropTypes.func,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

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

DateTimePickerRow.defaultProps = {
  showErrorsInline: false,
  dispatch: () => { },
};

function AddEventForm(props) {
  const [selectedDate, setSelectDate] = useState(new Date());

  const onChangeDate = date => {
    setSelectDate(date);
  };

  const saveRef = ref => ref;

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
              placeholder="Event Name"
              label="Event Name"
              validate={required}
              required
              ref={saveRef}
              className={classes.field}
            />
          </div>
          <div>
            <Field
              name="start"
              component={DateTimePickerRow}
              placeholder="Start Date"
              value={selectedDate}
              onChange={onChangeDate}
              label="Start Date"
              className={classes.field}
            />
          </div>
          <div>
            <Field
              name="end"
              component={DateTimePickerRow}
              placeholder="End Date"
              value={selectedDate}
              onChange={onChangeDate}
              label="End Date"
              className={classes.field}
            />
          </div>
          <div className={classes.fieldBasic}>
            <FormLabel component="label">Label Color</FormLabel>
            <Field name="hexColor" className={classes.inlineWrap} component={renderRadioGroup}>
              <FormControlLabel value="EC407A" control={<Radio className={classes.redRadio} classes={{ root: classes.redRadio, checked: classes.checked }} />} label="Red" />
              <FormControlLabel value="43A047" control={<Radio className={classes.greenRadio} classes={{ root: classes.greenRadio, checked: classes.checked }} />} label="Green" />
              <FormControlLabel value="2096f3" control={<Radio className={classes.blueRadio} classes={{ root: classes.blueRadio, checked: classes.checked }} />} label="Blue" />
              <FormControlLabel value="AB47BC" control={<Radio className={classes.violetRadio} classes={{ root: classes.violetRadio, checked: classes.checked }} />} label="Violet" />
              <FormControlLabel value="FF5722" control={<Radio className={classes.orangeRadio} classes={{ root: classes.orangeRadio, checked: classes.checked }} />} label="Orange" />
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

AddEventForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const AddEventFormRedux = reduxForm({
  form: 'immutableAddCalendar',
  enableReinitialize: true,
})(AddEventForm);

const reducer = 'calendar';
const AddEventInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
)(AddEventFormRedux);

export default withStyles(styles)(AddEventInit);
