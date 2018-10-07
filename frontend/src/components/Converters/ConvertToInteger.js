import React from 'react'

import Input from '../UI/Input';

import './Convertor.css';

const convertToInteger = ({
    change,
    clicked,
    itemValue
}) => {
    return (
        <form>
            <label>Roman to Integer </label>
            <div className="form-group">
                <Input 
                    type="text" 
                    name='roman' 
                    itemValue={itemValue} 
                    change={change}
                    placeholder="Enter a roman number... "
                />
            {" "}
                <Input
                    type="submit"
                    value="Get Roman"
                    clicked={clicked}
                />
            </div>    
        </form>
    );
};

export default convertToInteger;
