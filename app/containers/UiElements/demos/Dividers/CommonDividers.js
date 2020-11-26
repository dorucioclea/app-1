import React, { Fragment, PureComponent } from 'react';
import Type from 'dan-styles/Typography.scss';
import Typography from '@material-ui/core/Typography';

import {
  GradientDivider,
  DashDivider,
  ShadowDivider,
  InsetDivider,
} from '../../../../components/Divider';

class CommonDivider extends PureComponent {
  render() {
    return (
      <Fragment>
        <Typography variant="button" className={Type.textCenter}>Gradient Divider</Typography>
        <GradientDivider />
        <Typography variant="button" className={Type.textCenter}>Dash Divider</Typography>
        <DashDivider />
        <Typography variant="button" className={Type.textCenter}>Shadow Divider</Typography>
        <ShadowDivider />
        <Typography variant="button" className={Type.textCenter}>Inset Divider</Typography>
        <InsetDivider />
      </Fragment>
    );
  }
}

export default CommonDivider;
