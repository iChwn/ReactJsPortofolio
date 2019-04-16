import React, { Component } from "react"
import { AnimatedWrapper } from "../../components"
import { connect } from "react-redux"
import { rotateAction, dataArr } from "../../models/sampleRedux/action"
import configureStore from "../../models/store"

class AboutPage extends Component {
  render() {
    console.log(this)
    return (
      <div className="page">
        <h1>About</h1>
        <p>This is About Page</p>
      </div>
    )
  }
}

const AbtPage = AnimatedWrapper(AboutPage)
const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  rotateAction: payload => dispatch(rotateAction(payload))
  // dataArr: payload => dispatch(dataArr(payload))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AbtPage)
// export default AbtPage
