import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Outer from '../Templates/Outer';
import {
  Login, LoginV2, LoginV3,
  Register, RegisterV2, RegisterV3,
  ResetPassword, LockScreen, ComingSoon,
  Maintenance,
  NotFound,
} from '../pageListAsync';

function Auth() {
  return (
    <Outer>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/login-v2" component={LoginV2} />
        <Route path="/login-v3" component={LoginV3} />
        <Route path="/register" component={Register} />
        <Route path="/register-v2" component={RegisterV2} />
        <Route path="/register-v3" component={RegisterV3} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/lock-screen" component={LockScreen} />
        <Route path="/maintenance" component={Maintenance} />
        <Route path="/coming-soon" component={ComingSoon} />
        <Route component={NotFound} />
      </Switch>
    </Outer>
  );
}

export default Auth;
