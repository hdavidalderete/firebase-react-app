import React from 'react';
import { watcherUserChange } from '../../services/firebase';
import { AuthContext } from '../../context/auth';



class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            users: null
        }
    }
    componentDidMount() {
        watcherUserChange((user) => {
            this.setState({ user: user })
        })
    }
    render() {
        return (
            <div>
                hola
                {this.context.user && this.context.user.email}
            </div>
        )
    }
}

Dashboard.contextType = AuthContext;

export default Dashboard;