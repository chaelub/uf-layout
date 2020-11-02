export const reducer = (state, action) => {
  switch (action.type) {
    case r.SELECT_COMPONENT:
      return {
        ...state,
        component: action.component,
        showComponentsList: action.showComponentsList,
      }
    case r.ADD_LAYOUT:
      return {
        ...state,
        children: {
          ...state.children,
          [action.id]: { ...state.children[action.id], isVisible: true },
        },
      }
    default:
      throw new Error('UNKNOWN ACTION TYPE')
  }
}
const r = {
  SELECT_COMPONENT: 'SELECT_COMPONENT',
  ADD_LAYOUT: 'ADD_LAYOUT',
}
export default r
