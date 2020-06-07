import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.scss';

class Expense extends React.Component {
    render() {
       const { expense, onClose } = this.props;
        const node = (
            <div className={style.modalContainer}>
                <div className={style.modalBox}>
                    <h1 onClick={onClose}>Expeses</h1>
                </div>
            </div>
        )
        return ReactDOM.createPortal(node, document.getElementById('modal-root'));
    }
}

export default Expense;