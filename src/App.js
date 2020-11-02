import React, { useState } from 'react'
import AddChild from './components/AddChild'

function UFLayout({ id, components }) {
  console.log(components)
  const [showComponents, setShowComponents] = useState(true)
  const [childrenSettings, setChildrenSettings] = useState({})
  const [layoutComponent, setLayoutComponent] = useState(null)
  const [isTopVisible, setIsTopVisible] = useState(false)

  const getAvailableComponents = () => {
    return (
      <React.Fragment>
        {components && showComponents && (
          <div>
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

  const getLayoutChildren = (id, isVisible) => {
    return (
      <React.Fragment>
        {isTopVisible ? (
          <div>
            <UFLayout components={components} id={id}></UFLayout>
          </div>
        ) : (
          <p
            onClick={() => {
              setIsTopVisible(true)
            }}
          >
            add {id}
          </p>
        )}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {getLayoutChildren('top')}
      {/* {getLayoutChildren('left')} */}
      {layoutComponent ? layoutComponent : getAvailableComponents()}
      {/* layoutComponent */}
      {/* {getLayoutChildren('right')} */}
      {/* {getLayoutChildren('bottom')} */}
    </React.Fragment>
  )
}

export default UFLayout
