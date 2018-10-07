import React from 'react'

const layout = props => {
  return (
    <div>
      <heasder>
        <h1>Roman Numeral </h1>
      </heasder>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default layout;
