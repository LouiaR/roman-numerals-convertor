import React, { Fragment } from 'react'

import './Layout.css';

const layout = props => {
  return (
    <Fragment>
      <header>
       <div className="brand">Roman Numeral</div>
      </header>
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}

export default layout;
