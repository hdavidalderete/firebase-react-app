import React from 'react';
import { watcherUserChange } from '../services/firebase';

export const AuthContext = React.createContext();

export class AuthContextProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            user: null,
            authReady: false
        }
    }

    componentDidMount() {
        watcherUserChange(user => {
            if (user) {
                this.setState({
                    isLoggedIn: true,
                    user: user,
                    authReady: true
                })
            } else {
                this.setState({
                    isLoggedIn: false,
                    user: null,
                    authReady: true
                })
            }
        })
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export const AuthContextConsumer = AuthContext.Consumer;