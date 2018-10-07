import React, { Fragment } from 'react'

const input = ({
    type, 
    name, 
    itemValue,
    change, 
    placeholder,
    clicked 
    }) => (
        <Fragment>
            <input 
                type={type} 
                name={name} 
                value={itemValue} 
                onChange={change} 
                placeholder={placeholder}
                onClick={clicked}
            />
        </Fragment>
    )


export default input;
