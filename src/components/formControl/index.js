import style from './style.module.scss';
import React from 'react';
const FormControl = (props) => {
    const { type, children } = props;
    let className;

    if (type === 'row') {
        className = style.formControlRow;
    } else if (type === 'block') {
        className = style.formControlBlock;
    }
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default FormControl;