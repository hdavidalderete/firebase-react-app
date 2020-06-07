import React from 'react';
import { watchExpenses, watcherUserChange } from '../services/firebase';

export const ExpenseContext = React.createContext();

export class ExpenseContextProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false,
            expenses: [],
            expenseReady: false
        }
    }

    componentDidMount() {
        watcherUserChange(user => {
            if (user && !this.isSetup) {
                this.isSetup = true;
                watchExpenses(expenses => {
                        this.setState({
                            expenses: expenses
                        })
                })
            }
        });
    }

    render() {
        return (
            <ExpenseContext.Provider value={this.state}>
                {this.props.children}
            </ExpenseContext.Provider>
        )
    }
}

export const ExpenseContextConsumer = ExpenseContext.Consumer;