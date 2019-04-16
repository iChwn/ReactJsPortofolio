let states = { rotating: true, data: [] }

export default (state = states, action) => {
  switch (action.type) {
    case "rotate":
      return {
        ...state,
        rotating: action.payload
      }
      break
    case "dataArray":
      return {
        ...state,
        data: action.payload
      }
      break
    default:
      return state
      break
  }
}
