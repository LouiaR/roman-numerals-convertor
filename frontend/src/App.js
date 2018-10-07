import React, { Component } from 'react';

import Layout from './components/Layout';
import RomanConverter from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <RomanConverter />
        </Layout>
      </div>
    );
  }
}

export default App;
