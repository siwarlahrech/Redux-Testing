const initialState = { list: [] }

function toggleName(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'ADD_NAME':
        nextState = {
            ...state,
            list: [...state.list, action.value]
          }
        //   console.log(action , nextState)
      return nextState || state
      case 'REMOVE_NAME':
      const nameIndex = state.list.findIndex(item => item === action.value)

      if (nameIndex !== -1) {
        // suppression
        nextState = {
          ...state,
          list: state.list.filter( (item, index) => index !== nameIndex)
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleName