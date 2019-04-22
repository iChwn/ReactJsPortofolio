export const progressLoad = payload => {
  return {
    type: "loading",
    payload
  }
}

export const showLoading = payload => {
  return {
    type: "showLoading",
    payload
  }
}

export const hideLoading = payload => {
  return {
    type: "hideLoading",
    payload
  }
}
