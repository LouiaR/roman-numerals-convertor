import React, { Component } from 'react';

import Layout from './components/Layout';
import RomanConverter from './containers/convertToRoman';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <h1>Welcome</h1>
          <RomanConverter />
        </Layout>
      </div>
    );
  }
}

export default App;
