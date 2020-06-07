import React from 'react';
import style from './style.module.scss';
class Layout extends React.Component {

    render() {
        const { children } = this.props;
        return (
            <React.Fragment>
            <div className={style.appBar}>
                <span>App</span>
            </div>
            <div className={style.content}>
                {children}
            </div>
            </React.Fragment>

        )   
    }
}

export default Layout;