import React, { useState } from 'react'
import AddChild from './components/AddChild'

function UFLayout({ inject }) {
  console.log(inject)
  const [isInjectShow, setIsInjectShow] = useState(false)
  const [childrenSettings, setChildrenSettings] = useState({})
  const getLayoutChildren = (id) => {
    return (
      <AddChild
        id={id}
        handleClick={() => {
          console.log(isInjectShow)
          setIsInjectShow(!isInjectShow)
        }}
        inject={childrenSettings}
      />
    )
  }
  return (
    <React.Fragment>
      {inject && isInjectShow && (
        <div>
          {inject.map((child, idx) => {
            return (
              <p
                key={idx}
                onClick={() =>
                  setChildrenSettings((settings) => {
                    console.log('toggle settings')
                    return { ...settings, top: child }
                  })
                }
              >
                {child.name}
              </p>
            )
          })}
        </div>
      )}
      {getLayoutChildren('top')}
      {/* <AddChild id='left' />
      <AddChild id='rught' />
      <AddChild id='bottom' /> */}
    </React.Fragment>
  )
}

export default UFLayout
