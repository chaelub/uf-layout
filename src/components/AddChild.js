import React from 'react'
import './addChild.css'

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

  // return (
  //   <div className='App'>
  //     <header className='App-header'>
  //       <img src={logo} className='App-logo' alt='logo' />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className='App-link'
  //         href='https://reactjs.org'
  //         target='_blank'
  //         rel='noopener noreferrer'
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // )
}

export default AddChild
