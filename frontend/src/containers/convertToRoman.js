import React, { Component } from 'react'

import Input from '../components/UI/Input';

class RomanConverter extends Component {
    state = {
        integer: ''
    }

    onChangeHandler = (e) => {
        console.log(e.target.value)
        this.setState({
            integer: e.target.value
        })
    }
  render() {
      const { integer } = this.state;
    return (
      <div>
        <Input 
            type="number" 
            name='integer' 
            value={integer} 
            change={this.onChangeHandler}
        />
      </div>
    )
  }
}

export default RomanConverter;