import React, { useState } from 'react';
import 'dan-styles/vendors/react-calculator/styles.css';
import ResultPanel from './ResultPanel';
import ButtonPanel from './ButtonPanel';

export default function Calculator() {
  const [last, setLast] = useState('');
  const [cur, setCur] = useState('0');

  const onButtonClick = (type) => {
    let curVal = '';
    let lastLetter = '';
    switch (type) {
      case 'c':
        setLast('');
        setCur('0');
        break;
      case 'back':
        setCur(cur === '0' ? cur : cur.slice(0, -1) || '0');
        break;
      case '=':
        try {
          setLast(cur + '=');
          setCur(eval(cur) + '') // eslint-disable-line
        } catch (e) {
          setLast(cur + '=');
          setCur('NaN');
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        curVal = cur;
        lastLetter = curVal.slice(-1);
        if (lastLetter === '+' || lastLetter === '-' || lastLetter === '*' || lastLetter === '/') {
          setCur(curVal.slice(0, -1) + type);
        } else {
          setCur(cur + type);
        }
        break;
      case '.':
        curVal = cur;
        lastLetter = curVal.slice(-1);
        if (lastLetter !== '.') {
          setCur(cur + type);
        }
        break;
      default:
        setCur(cur === '0' ? type : cur + type);
        break;
    }
  };

  const exp = {
    cur,
    last
  };
  return (
    <div className="react-calculator" id="reactCalculator">
      <ResultPanel exp={exp} />
      <ButtonPanel onClick={onButtonClick} />
    </div>
  );
}
