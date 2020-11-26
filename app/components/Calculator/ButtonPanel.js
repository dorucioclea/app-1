import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function ButtonPanel(props) {
  const keyMapping = {};
  const Btn = [];

  useEffect(() => {
    let buttons = Btn;
    buttons = [].slice.call(buttons);
    buttons.forEach((button) => {
      keyMapping[button.dataset.code] = button;
    });
    const calculatorELem = document.getElementById('reactCalculator');
    calculatorELem.onkeydown = (event) => {
      const key = (event.shiftKey ? 'shift+' : '') + event.keyCode || event.which;
      const button = keyMapping[key];
      if (button) {
        button.click();
        event.stopPropagation();
        event.preventDefault();
      }
    };
  }, [Btn]);

  const handleClick = (e) => {
    const { onClick } = props;
    onClick(e.target.dataset.value);
  };

  return (
    <div className="button-panel rowx">
      <div className="s3 column">
        <div className="s1 rowx">
          <button type="button" className="button s1" ref={(input) => { Btn[0] = input; }} data-code="67" data-value="c" onClick={handleClick}>C</button>
          <button type="button" className="button s1" ref={(input) => { Btn[1] = input; }} data-code="8" data-value="back" onClick={handleClick}>←</button>
          <button type="button" className="button s1" ref={(input) => { Btn[2] = input; }} data-code="191" data-value="/" onClick={handleClick}>÷</button>
        </div>
        <div className="s1 rowx">
          <button type="button" className="button s1" ref={(input) => { Btn[3] = input; }} data-code="55" data-value="7" onClick={handleClick}>7</button>
          <button type="button" className="button s1" ref={(input) => { Btn[4] = input; }} data-code="56" data-value="8" onClick={handleClick}>8</button>
          <button type="button" className="button s1" ref={(input) => { Btn[5] = input; }} data-code="57" data-value="9" onClick={handleClick}>9</button>
        </div>
        <div className="s1 rowx">
          <button type="button" className="button s1" ref={(input) => { Btn[6] = input; }} data-code="52" data-value="4" onClick={handleClick}>4</button>
          <button type="button" className="button s1" ref={(input) => { Btn[7] = input; }} data-code="53" data-value="5" onClick={handleClick}>5</button>
          <button type="button" className="button s1" ref={(input) => { Btn[8] = input; }} data-code="54" data-value="6" onClick={handleClick}>6</button>
        </div>
        <div className="s1 rowx">
          <button type="button" className="button s1" ref={(input) => { Btn[9] = input; }} data-code="49" data-value="1" onClick={handleClick}>1</button>
          <button type="button" className="button s1" ref={(input) => { Btn[10] = input; }} data-code="50" data-value="2" onClick={handleClick}>2</button>
          <button type="button" className="button s1" ref={(input) => { Btn[11] = input; }} data-code="51" data-value="3" onClick={handleClick}>3</button>
        </div>
        <div className="s1 rowx">
          <button type="button" className="button s2" ref={(input) => { Btn[12] = input; }} data-code="48" data-value="0" onClick={handleClick}>0</button>
          <button type="button" className="button s1" ref={(input) => { Btn[13] = input; }} data-code="190" data-value="." onClick={handleClick}>.</button>
        </div>
      </div>
      <div className="s1 column">
        <button type="button" className="button s1" ref={(input) => { Btn[14] = input; }} data-code="shift+56" data-value="*" onClick={handleClick}>×</button>
        <button type="button" className="button s1" ref={(input) => { Btn[15] = input; }} data-code="189" data-value="-" onClick={handleClick}>-</button>
        <button type="button" className="button s1" ref={(input) => { Btn[16] = input; }} data-code="shift+187" data-value="+" onClick={handleClick}>+</button>
        <button type="button" className="button s2 button-equal" ref={(input) => { Btn[17] = input; }} data-code="13" data-value="=" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
