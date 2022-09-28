import React from 'react'

const EventHandler = () => {

    const clickHandler = (e, count = 0) => {
        console.log('Click', e, count)
    }

  return (
    <div>
        <button onClick={clickHandler}>Click Here</button>
        <button onClick={(e) => clickHandler(e, 1)}>Click</button>
    </div>
  )
}

export default EventHandler