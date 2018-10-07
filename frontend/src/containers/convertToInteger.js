import React, { Component } from 'react'

import Input from '../components/UI/Input';

class RomanConverter extends Component {
    state = {
        roman: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            roman: e.target.value
        })
    }
  render() {
      const { roman } = this.state;
    return (
      <div>
        <Input 
            type="text" 
            name='roman' 
            value={roman} 
            change={this.onChangeHandler}
        />
      </div>
    )
  }
}

export default RomanConverter;