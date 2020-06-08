import React from 'react';
import style from './style.module.scss';
import TextField from '../textField';
class Select extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
    render() {
        const {
            options,
            value,
            onChange,
            onBlur,
            placeholder
        } = this.props;
        const { isOpen } = this.state;

        return (
            <div className={style.option}>
                <TextField
                    placeholder={placeholder}
                    type='text'
                    value={value}
                    onChange={() => { }}
                    onClick={() => { this.setState({ isOpen: !isOpen }) }}
                />
                {isOpen &&
                    <ul className={style.optionList}>
                        {
                            options.map((option) => {
                                return <li
                                    key={option.value}
                                    className={style.optionListItem}
                                    onClick={(e) => {
                                        onChange(option.value);
                                        onBlur(e);
                                        this.setState({ isOpen: false });
                                    }}
                                >
                                    {option.label}
                                </li>
                            })
                        }
                    </ul>
                }

            </div>
        )
    }
}

export default Select;