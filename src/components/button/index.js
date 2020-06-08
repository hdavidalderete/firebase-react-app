import React from 'react';
import style from './style.module.scss';
const Button = (props) => {
    const {
        type,
        onClick,
        label,
        disabled
    } = props;
    const className = style[type];
    return <div className={`${className} ${disabled ? style.disabled : ''}`}
        onClick={(e) => {
            if (disabled) {
                return
            } else {
                onClick(e);
            }
        }
        }>
        {label}
    </div>
}

Button.defaultProps = {
    type: 'regular',
}

export default Button;