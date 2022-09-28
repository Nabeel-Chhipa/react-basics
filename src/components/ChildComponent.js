import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
        <button onClick={() => props.greetParent('Muhammad Nabeel')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent