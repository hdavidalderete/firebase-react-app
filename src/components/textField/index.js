import React from 'react';
import style from './style.module.scss';
const TextField = (props) => {
    const {
        ...rest
    } = props;
    return <input className={style.input} {...rest}/>
}


export default TextField;