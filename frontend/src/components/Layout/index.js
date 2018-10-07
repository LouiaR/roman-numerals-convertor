import React, { Fragment } from 'react'

import './Layout.css';

const layout = props => {
  return (
    <Fragment>
      <header>
       <div>LOGO</div>
       <div className="header-title"> 
          <h1>Welcome!</h1> 
          <h4>What you can:</h4> <br/>
          <p>Convert integer to roman </p>
          <p>Convert roman to integer </p>
       </div>
      </header>
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}

export default layout;
