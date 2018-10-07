import React, { Fragment } from 'react'

const input = ({
    type, 
    name, 
    value, 
    label, 
    change, 
    placeholder,
    clicked 
    }) => (
        <Fragment>
            <label>{label}</label>
            <input 
                type={type} 
                name={name} 
                value={value} 
                onChange={change} 
                placeholder={placeholder}
                onClick={clicked}
            />
        </Fragment>
    )


export default input;
