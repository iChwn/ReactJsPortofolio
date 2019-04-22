let states = { loading: "0%", isVisible: "unset" }

export default (state = states, action) => {
  switch (action.type) {
    case "showLoading":
      return {
        ...state,
        isVisible: "unset"
      }
      break
    case "hideLoading":
      return {
        ...state,
        isVisible: "none"
      }
      break
    case "loading":
      let val = action.payload.value
      let a = val.split("%")
      a = parseInt(a[0])
      a = a + 1
      val = a + "%"
      return {
        ...state,
        loading: val
      }
      break
    default:
      return state
      break
  }
}
