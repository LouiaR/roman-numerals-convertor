import React from 'react'

import Input from '../UI/Input';

import './Convertor.css';

const convertToRoman = ({
    change,
    clicked,
    itemValue
}) => {
  return (
    <form>
        <label>Integer to Roman </label>
        <div className="form-group">
            <Input 
                type="text" 
                name='integer' 
                itemValue={itemValue} 
                change={change}
                placeholder="Enter an integer..."
        />
        {"  "}
            <Input
                type="submit"
                value="Get Roman"
                clicked={clicked}
            />    
        </div>
    </form>
)
};

export default convertToRoman;
