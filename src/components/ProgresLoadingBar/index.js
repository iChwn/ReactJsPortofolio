import React, { Component } from "react"

export default class ProgressLoadingBar extends Component {
  render() {
    // console.log(this.props)
    return (
      <div
        style={{
          width: this.props.loading.loading,
          height: 5,
          backgroundColor: "blue",
          position: "absolute",
          zIndex: 1,
          display: this.props.loading.isVisible
        }}
      />
    )
  }
}
