import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
  CheckboxRedux,
  SelectRedux,
  TextFieldRedux,
  SwitchRedux
} from 'dan-components/Forms/ReduxFormMUI';
import { CrudTableForm, Notification } from 'dan-components';
import {
  fetchAction,
  addAction,
  closeAction,
  submitAction,
  removeAction,
  editAction,
  closeNotifAction
} from '../actions/crudTbFrmActions';
import { anchorTable, dataApi } from './sampleData';

const branch = 'crudTbFrmDemo';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const styles = ({
  root: {
    flexGrow: 1,
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  }
});

class CrudTbFormDemo extends Component {
  saveRef = ref => {
    this.ref = ref;
    return this.ref;
  };

  render() {
    const {
      classes,
      fetchData,
      addNew,
      closeForm,
      submit,
      removeRow,
      editRow,
      dataTable,
      openForm,
      initValues,
      closeNotif,
      messageNotif,
    } = this.props;
    const trueBool = true;
    return (
      <div>
        <Notification close={() => closeNotif(branch)} message={messageNotif} />
        <div className={classes.rootTable}>
          <CrudTableForm
            dataTable={dataTable}
            openForm={openForm}
            dataInit={dataApi}
            anchor={anchorTable}
            title="Title of Table"
            fetchData={fetchData}
            addNew={addNew}
            closeForm={closeForm}
            submit={submit}
            removeRow={removeRow}
            editRow={editRow}
            branch={branch}
            initValues={initValues}
          >
            {/* Create Your own form, then arrange or custom it as You like */}
            <div>
              <Field
                name="text"
                component={TextFieldRedux}
                placeholder="Text Field"
                label="Text Field"
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
            <div className={classes.fieldBasic}>
              <FormLabel component="label">Choose One Option</FormLabel>
              <Field name="radio" className={classes.inlineWrap} component={renderRadioGroup}>
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
              </Field>
            </div>
            <div>
              <FormControl className={classes.field}>
                <InputLabel htmlFor="selection">Selection</InputLabel>
                <Field
                  name="selection"
                  component={SelectRedux}
                  placeholder="Selection"
                  autoWidth={trueBool}
                >
                  <MenuItem value="option1">Option One</MenuItem>
                  <MenuItem value="option2">Option Two</MenuItem>
                  <MenuItem value="option3">Option Three</MenuItem>
                </Field>
              </FormControl>
            </div>
            <div className={classes.fieldBasic}>
              <FormLabel component="label">Toggle Input</FormLabel>
              <div className={classes.inlineWrap}>
                <FormControlLabel control={<Field name="onof" component={SwitchRedux} />} label="On/OF Switch" />
                <FormControlLabel control={<Field name="checkbox" component={CheckboxRedux} />} label="Checkbox" />
              </div>
            </div>
            <div className={classes.field}>
              <Field
                name="textarea"
                className={classes.field}
                component={TextFieldRedux}
                placeholder="Textarea"
                label="Textarea"
                multiline={trueBool}
                rows={4}
              />
            </div>
            {/* No need create button or submit, because that already made in this component */}
          </CrudTableForm>
        </div>
      </div>
    );
  }
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

CrudTbFormDemo.propTypes = {
  dataTable: PropTypes.object.isRequired,
  openForm: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  addNew: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  initValues: PropTypes.object.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  force: state, // force state from reducer
  initValues: state.getIn([branch, 'formValues']),
  dataTable: state.getIn([branch, 'dataTable']),
  openForm: state.getIn([branch, 'showFrm']),
  messageNotif: state.getIn([branch, 'notifMsg']),
});

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  addNew: bindActionCreators(addAction, dispatch),
  closeForm: bindActionCreators(closeAction, dispatch),
  submit: bindActionCreators(submitAction, dispatch),
  removeRow: bindActionCreators(removeAction, dispatch),
  editRow: bindActionCreators(editAction, dispatch),
  closeNotif: bindActionCreators(closeNotifAction, dispatch),
});

const CrudTbFormDemoMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(CrudTbFormDemo);

export default withStyles(styles)(CrudTbFormDemoMapped);
