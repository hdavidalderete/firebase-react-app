import React from 'react';
import { AuthContext } from '../context/auth';
import { Route, Redirect } from 'react-router-dom';

class GuardRoute extends React.Component {

    render() {
        const { isLoggedIn, authReady } = this.context;
        if (authReady) {
            if (!isLoggedIn && this.props.type === 'private') {
                return <Redirect to='/login' />
            } else if (isLoggedIn && this.props.type === 'public') {
                return <Redirect to='/dashboard' />
            }
            
        }
        return <Route {...this.props} />
    }
}

GuardRoute.contextType = AuthContext;

export default GuardRoute;