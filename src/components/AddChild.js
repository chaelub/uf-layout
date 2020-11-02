import React from 'react'
import './addChild.css'
import '../index.css'

function AddChild({ id, handleClick, inject }) {
  console.log('toggle AddChild')
  console.log('inject', inject[id])
  return (
    <React.Fragment>
      {inject && inject[id] ? (
        inject[id].element()
      ) : (
        <div id={id} className='addChild' onClick={handleClick}>
          +
        </div>
      )}
    </React.Fragment>
  )
}

export default AddChild
