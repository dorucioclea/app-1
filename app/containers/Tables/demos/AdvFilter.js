import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';

const styles = theme => ({
  table: {
    '& > div': {
      overflow: 'auto'
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all'
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  }
});
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
class AdvFilter extends React.Component {
  state = {
    columns: [
      {
        name: 'Name',
        options: {
          filter: true
        }
      },
      {
        name: 'Title',
        options: {
          filter: true,
        }
      },
      {
        name: 'KPI',
        options: {
          filter: false,
          customBodyRender: (value) => (
            <LinearProgress variant="determinate" color="secondary" value={value} />
          )
        }
      },
      {
        name: 'Status',
        options: {
          filter: true,
          customBodyRender: (value) => {
            if (value === 'active') {
              return (<Chip label="Active" color="secondary" />);
            }
            if (value === 'non-active') {
              return (<Chip label="Non Active" color="primary" />);
            }
            return (<Chip label="Unknown" />);
          }
        }
      },
      {
        name: 'Salary',
        options: {
          filter: true,
          customBodyRender: (value) => {
            const nf = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });

            return nf.format(value);
          }
        }
      },
    ],
    data: [
      ['Gabby George', 'Business Analyst', 30, 'active', 100000],
      ['Aiden Lloyd', 'Business Consultant', 55, 'active', 200000],
      ['Jaden Collins', 'Attorney', 27, 'non-active', 500000],
      ['Franky Rees', 'Business Analyst', 90, 'active', 50000],
      ['Aaren Rose', 'Business Consultant', 28, 'unknown', 75000],
      ['Blake Duncan', 'Business Management Analyst', 65, 'active', 94000],
      ['Frankie Parry', 'Agency Legal Counsel', 71, 'non-active', 210000],
      ['Lane Wilson', 'Commercial Specialist', 19, 'active', 65000],
      ['Robin Duncan', 'Business Analyst', 20, 'unknown', 77000],
      ['Mel Brooks', 'Business Consultant', 89, 'active', 135000],
      ['Harper White', 'Attorney', 52, 'non-active', 420000],
      ['Kris Humphrey', 'Agency Legal Counsel', 80, 'active', 150000],
      ['Frankie Long', 'Industrial Analyst', 31, 'active', 170000],
      ['Brynn Robbins', 'Business Analyst', 22, 'active', 90000],
      ['Justice Mann', 'Business Consultant', 76, 'non-active', 33000],
      ['Addison Navarro', 'Business Management Analyst', 50, 'non-active', 295000],
      ['Jesse Welch', 'Agency Legal Counsel', 28, 'active', 100000],
      ['Eli Mejia', 'Commercial Specialist', 65, 'active', 400000],
      ['Gene Leblanc', 'Industrial Analyst', 100, 'active', 110000],
      ['Danny Leon', 'Computer Scientist', 60, 'non-active', 220000],
      ['Lane Lee', 'Corporate Counselor', 52, 'unknown', 180000],
      ['Jesse Hall', 'Business Analyst', 44, 'active', 99000],
      ['Danni Hudson', 'Agency Legal Counsel', 37, 'active', 90000],
      ['Terry Macdonald', 'Commercial Specialist', 39, 'active', 140000],
      ['Justice Mccarthy', 'Attorney', 26, 'active', 330000],
      ['Silver Carey', 'Computer Scientist', 10, 'active', 250000],
      ['Franky Miles', 'Industrial Analyst', 49, 'active', 190000],
      ['Glen Nixon', 'Corporate Counselor', 15, 'non-active', 80000],
      ['Gabby Strickland', 'Business Process Consultant', 26, 'unknown', 45000],
      ['Mason Ray', 'Computer Scientist', 39, 'active', 142000]
    ]
  }

  render() {
    const { columns, data } = this.state;
    const { classes } = this.props;
    const options = {
      filterType: 'dropdown',
      responsive: 'stacked',
      print: true,
      rowsPerPage: 10,
      page: 0
    };
    return (
      <div className={classes.table}>
        <MUIDataTable
          title="Employee list"
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

AdvFilter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvFilter);
