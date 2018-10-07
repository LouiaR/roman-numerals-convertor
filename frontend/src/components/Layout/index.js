import React from 'react'

const layout = props => {
  return (
    <div>
      <header>
        <h1>Roman Numeral </h1>
      </header>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default layout;
