// '''''''''''''''''''''''*
/*
  This is an example app without redux implementation, may little bit messy.
  If your prefer use redux architecture you can change it.
  And We recommend to following this app pattern of redux.
*/
// '''''''''''''''''''''''*
import React, { useReducer, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'dan-styles/vendors/invoice/style.css';
import { getDate } from '../../containers/helpers/dateTimeHelper';

const styles = {
  whitePaper: {
    background: '#FFF',
    color: '#000',
    minWidth: 800,
    border: '1px solid #dedede'
  }
};

const newDataTemplate = (id) => ({
  id,
  item: 'Item_' + id,
  desc: 'Description',
  price: 0,
  qty: 0,
});

const CommercialInvoice = React.forwardRef((props, ref) => {
  const initialState = {
    header: 'INVOICE',
    address: `Chris Coyier
123 Appleseed Street
Appleville, WI 53719

Phone: (555) 555-5555
    `,
    title: `Widget Corp.
c/o Steve Widget
    `,
    number: '123456',
    date: getDate(),
    paid: 0,
    note: 'NET 30 Days. Finance Charge of 1.5% will be made on unpaid balances after 30 days.',
    dataTable: [
      {
        id: '1',
        item: 'Web Updates',
        desc: 'Monthly web updates for http://uxmaestro.com (Nov. 1 - Nov. 30, 2018)',
        price: 650,
        qty: 1,
      },
      {
        id: '2',
        item: 'SSL Renewals',
        desc: 'Yearly renewals of SSL certificates on main domain and several subdomains',
        price: 75,
        qty: 3,
      },
    ],
    total: 0,
  };

  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'setHeader':
        return { ...state, header: payload };
      case 'setAddress':
        return { ...state, address: payload };
      case 'setTitle':
        return { ...state, title: payload };
      case 'setNumber':
        return { ...state, number: payload };
      case 'setDate':
        return { ...state, date: payload };
      case 'setPaid':
        return { ...state, paid: payload };
      case 'setNote':
        return { ...state, note: payload };
      case 'setDataTable':
        return { ...state, dataTable: payload };
      case 'setTotal':
        return { ...state, total: payload };
      default:
        return state;
    }
  };


  const [state, dispatch] = useReducer(reducer, initialState);

  const updateItem = (id, itemAttributes) => {
    const { dataTable } = state;
    const index = dataTable.findIndex(x => x.id === id);
    if (index === -1) {
      console.error('Something wen\'t wrong');
    } else {
      const data = [
        ...dataTable.slice(0, index),
        Object.assign({}, dataTable[index], itemAttributes),
        ...dataTable.slice(index + 1)
      ];
      dispatch({ type: 'setDataTable', payload: data });
    }
  };

  const setTotal = useCallback(() => {
    let t = 0;
    const { dataTable } = state;
    for (let i = 0; i < dataTable.length; i += 1) {
      t += (dataTable[i].price * dataTable[i].qty);
    }
    dispatch({ type: 'setTotal', payload: t });
  }, [state, dispatch]);

  const handleChange = name => event => {
    const stateType = `set${name.charAt(0).toUpperCase() + name.slice(1)}`;
    dispatch({ type: stateType, payload: event.target.value });
  };

  const handleChangeTable = (name, id) => event => {
    updateItem(id, { [name]: event.target.value });
  };

  const handleChangePrice = (name, id) => event => {
    updateItem(id, { [name]: event.target.value });
    setTimeout(() => {
      setTotal();
    });
  };

  const handleAddRow = () => {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const { dataTable } = state;
    dispatch({ type: 'setDataTable', payload: [...dataTable, newDataTemplate(id)] });
  };

  const handleRemoveRow = (target) => {
    const { dataTable } = state;
    const array = [...dataTable];
    const index = array.indexOf(target);
    array.splice(index, 1);
    dispatch({ type: 'setDataTable', payload: array });
    // re-calculate total
    setTimeout(() => {
      setTotal();
    });
  };

  useEffect(() => {
    setTotal();
  }, [state]);

  const { classes } = props;
  const {
    dataTable,
    total,
    header,
    address,
    number,
    date,
    paid,
    title,
    note
  } = state;
  const getRow = dataArray => dataArray.map((data, index) => (
    <tr className="item-row" key={index.toString()}>
      <td className="item-name">
        <div className="delete-wpr">
          <textarea value={data.item} onChange={handleChangeTable('item', data.id)} />
          <a className="delete" onClick={() => handleRemoveRow(data)} href="javascript:;" title="Remove row">X</a>
        </div>
      </td>
      <td className="description">
        <textarea value={data.desc} onChange={handleChangeTable('desc', data.id)} />
      </td>
      <td>
        <textarea value={data.price} onChange={handleChangePrice('price', data.id)} />
      </td>
      <td>
        <textarea value={data.qty} onChange={handleChangePrice('qty', data.id)} />
      </td>
      <td>
        <span className="price">
          {data.qty * data.price}
        </span>
      </td>
    </tr>
  ));

  return (
    <div className={classes.whitePaper} ref={ref}>
      <div id="page-wrap">
        <textarea id="header" value={header} onChange={handleChange('header')} />
        <div id="identity">
          <textarea id="address" value={address} onChange={handleChange('address')} />
          <div id="logo">
            <img id="image" src="/images/print_logo.jpg" alt="logo" />
          </div>

        </div>

        <div style={{ clear: 'both' }} />

        <div id="customer">
          <textarea id="customer-title" onChange={handleChange('title')} value={title} />
          <table id="meta">
            <tbody>
              <tr>
                <td className="meta-head">Invoice #</td>
                <td><textarea onChange={handleChange('number')} value={number} /></td>
              </tr>
              <tr>
                <td className="meta-head">Date</td>
                <td><textarea onChange={handleChange('date')} value={date} /></td>
              </tr>
              <tr>
                <td className="meta-head">Amount Due</td>
                <td>
                  <div className="due">
                    $
                    {total - paid}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        <table id="items">
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Unit Cost</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {getRow(dataTable)}
            <tr id="hiderow">
              <td colSpan="5"><a id="addrow" onClick={() => handleAddRow()} href="javascript:;" title="Add a row">[+] Add a row</a></td>
            </tr>

            <tr>
              <td colSpan="2" className="blank">&nbsp;</td>
              <td colSpan="2" className="total-line">Subtotal</td>
              <td className="total-value">
                <div id="subtotal">
                  $
                  {total}
                    .00
                </div>
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="blank">&nbsp;</td>
              <td colSpan="2" className="total-line">Total</td>
              <td className="total-value">
                <div id="total">
                  $
                  {total}
                    .00
                </div>
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="blank">&nbsp;</td>
              <td colSpan="2" className="total-line">Amount Paid</td>
              <td className="total-value"><textarea onChange={handleChange('paid')} value={paid} /></td>
            </tr>

            <tr>
              <td colSpan="2" className="blank-last">&nbsp;</td>
              <td colSpan="2" className="total-line balance">Balance Due</td>
              <td className="total-value balance">
                <div className="due">
                  $
                  {total - paid}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div id="terms">
          <h5>Terms</h5>
          <textarea onChange={handleChange('note')} value={note} />
        </div>
      </div>
    </div>
  );
});

CommercialInvoice.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommercialInvoice);
