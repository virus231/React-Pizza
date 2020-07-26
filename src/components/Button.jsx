import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
    console.log(props);
    const {onClick, className,outline} = props
    return (
        <button onClick={onClick} className={classNames('button', className, {'button--outline' : outline })}>
            {props.children}
        </button>
    )
}

export default Button;