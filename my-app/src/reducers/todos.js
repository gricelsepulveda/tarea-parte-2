const initialState = {
  data: [],
}

export default function Todos (state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        data: state.data.concat(action.payload)
      }
    default:
      return state
  }
}
