import React from 'react';
import { ExpenseContext } from '../../context/expenses';
import Layout from '../../components/layout';
import style from './style.module.scss';
import moment from 'moment';
import Expense from './expense';
class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            expenseId: null
        }
    }
    render() {
        const { expenses } = this.context;
        const { expenseId } = this.state;
        const expense = expenses.find(expense => expense.id === expenseId)
        return (
            <Layout>
                <div className={style.container}>
                    <table className={style.table} cellPadding='0'>
                        <thead>
                            <tr className={style.tableHeader}>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map(row => {
                                return (
                                    <tr
                                        key={row.id}
                                        className={style.tableRow}
                                        onClick={() => this.setState({ expenseId: row.id })}>
                                        <td>{moment(row.date).format('DD MMM YYYY hh:mm a')}</td>
                                        <td>{row.type}</td>
                                        <td>{row.amount}</td>
                                        <td>{row.description}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {expense &&
                    <Expense
                        expense={expense}
                        onClose={() => this.setState({ expenseId: null })}>
                    </Expense>
                }
            </Layout>
        )
    }
}

Dashboard.contextType = ExpenseContext;

export default Dashboard;