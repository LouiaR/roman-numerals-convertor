import React from 'react'

const result = ({
    roman,
    integer
}) => {
  return (
    <div className="result">
        {roman && <p>{integer} = {roman}</p>}
    </div>
  )
}

export default result;
