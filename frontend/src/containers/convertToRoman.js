import React, { Component } from 'react'

import Input from '../components/UI/Input';

class RomanConverter extends Component {
    state = {
        integer: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            integer: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const { integer } = this.state;
        console.log(integer)
    }

  render() {
      const { integer } = this.state;
    return (
      <form>
        <Input 
            type="number" 
            name='integer' 
            value={integer} 
            change={this.onChangeHandler}
            label = "Integer to roman"
            placeholder="Enter an integer"
        />
        {" "}
        <Input
            type="submit"
            value="Get Roman"
            clicked={this.submitHandler}
        />    
      </form>
    )
  }
}

export default RomanConverter;