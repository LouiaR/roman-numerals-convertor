import React from 'react'

const input = ({type, name, value, change}) =>  (
    <div>
        <input type={type} name={name} value={value} onChange={change} />
    </div>
  )

export default input;
