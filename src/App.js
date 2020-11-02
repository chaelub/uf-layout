import React, { useReducer } from 'react'
import r, { reducer } from './reducer'

const defaultState = {
  id: '',
  components: [],
  children: {
    top: {
      isVisible: false,
    },
    left: {
      isVisible: false,
    },
    right: {
      isVisible: false,
    },
    bottom: {
      isVisible: false,
    },
  },
  component: null,
  showComponentsList: true,
}

function UFLayout({ id, components }) {
  const initState = { ...defaultState, id, components }
  const [state, dispatch] = useReducer(reducer, initState)

  const handleSelectComponent = (component) => {
    dispatch({
      type: r.SELECT_COMPONENT,
      component,
      showComponentsList: !state.showComponentsList,
    })
  }

  const addLayout = (position) => {
    dispatch({ type: r.ADD_LAYOUT, id: position })
  }

  const getAvailableComponents = () => {
    return (
      <React.Fragment>
        {state.components && state.showComponentsList && (
          <div id='component'>
            {state.components.map((child, idx) => {
              return (
                <p
                  key={idx}
                  onClick={() => {
                    handleSelectComponent(child.component)
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

  const getLayoutChildren = (id) => {
    return (
      <React.Fragment>
        {state.children[id].isVisible ? (
          <div className={`root ${id}`}>
            <UFLayout components={state.components} id={id}></UFLayout>
          </div>
        ) : (
          <button
            type='button'
            onClick={() => {
              addLayout(id)
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
      {getLayoutChildren('top')}
      {getLayoutChildren('left')}
      {state.component ? state.component() : getAvailableComponents()}
      {getLayoutChildren('right')}
      {getLayoutChildren('bottom')}
    </React.Fragment>
  )
}

export default UFLayout
