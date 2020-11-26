import React from 'react';
import PropTypes from 'prop-types';

function MessageField(props) {
  const {
    onChange,
    fieldType,
    passedRef,
    value,
    ...rest
  } = props;

  const className = `emoji-text-field emoji-${fieldType}`;
  const isInput = fieldType === 'input';

  const onInputChange = e => {
    onChange(e, e.target.value);
  };

  return (
    <div className={className}>
      { (isInput) && (<input {...rest} ref={passedRef} onChange={onInputChange} type="text" value={value} />)}
      { (!isInput) && (<textarea {...rest} ref={passedRef} onChange={onInputChange} value={value} />)}
    </div>
  );
}

MessageField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  fieldType: PropTypes.string.isRequired,
  passedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ]).isRequired
};

MessageField.defaultProps = {
  value: '',
  onChange: () => { },
};

export default MessageField;
