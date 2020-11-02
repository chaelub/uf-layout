import React, { useState } from 'react'

function UFLayout({ id, components }) {
  console.log(components)
  const [showComponents, setShowComponents] = useState(true)
  const [layoutComponent, setLayoutComponent] = useState(null)

  // todo refactor state managment
  const [isTopVisible, setIsTopVisible] = useState(false)
  const [isLeftVisible, setIsLeftVisible] = useState(false)
  const [isRightVisible, setIsRightVisible] = useState(false)
  const [isBottomVisible, setIsBottomVisible] = useState(false)

  const getAvailableComponents = () => {
    return (
      <React.Fragment>
        {components && showComponents && (
          <div id='component'>
            {components.map((child, idx) => {
              return (
                <p
                  key={idx}
                  onClick={() => {
                    setShowComponents(!showComponents)
                    setLayoutComponent(child.element)
                  }}
                >
                  {child.name}
                </p>
              )
            })}
          </div>
        )}
      </React.Fragment>
    )
  }

  const getLayoutChildren = (id, isVisible, toggleVisibility) => {
    return (
      <React.Fragment>
        {isVisible ? (
          <div className={`root ` + id}>
            <UFLayout components={components} id={id}></UFLayout>
          </div>
        ) : (
          <button
            type='button'
            onClick={() => {
              toggleVisibility(!isVisible)
            }}
            className={id}
          >
            add {id}
          </button>
        )}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {getLayoutChildren('top', isTopVisible, setIsTopVisible)}
      {getLayoutChildren('left', isLeftVisible, setIsLeftVisible)}
      {layoutComponent ? layoutComponent : getAvailableComponents()}
      {getLayoutChildren('right', isRightVisible, setIsRightVisible)}
      {getLayoutChildren('bottom', isBottomVisible, setIsBottomVisible)}
    </React.Fragment>
  )
}

export default UFLayout
