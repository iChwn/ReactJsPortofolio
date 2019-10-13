import React, { Component } from "react"
import { AnimatedWrapper } from "../../components"
import { connect } from "react-redux"
import { rotateAction, dataArr } from "../../models/sampleRedux/action"
import {
  progressLoad,
  showLoading,
  hideLoading
} from "../../models/progressLoadPage/action"
// import configureStore from "../../models/store"

class AboutPage extends Component {
  componentDidMount() {
    let width = 0
    let id = setInterval(() => {
      if (width >= 99) {
        clearInterval(id)
        this.props.hideLoading()
      } else {
        width++
        this.props.showLoading()
        this.props.progressLoad({ value: `${width}%` })
        // console.log(width)
      }
    })
  }

  render() {
    // console.log(this)
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
  rotateAction: payload => dispatch(rotateAction(payload)),
  progressLoad: payload => dispatch(progressLoad(payload)),
  showLoading: payload => dispatch(showLoading(payload)),
  hideLoading: payload => dispatch(hideLoading(payload))
  // dataArr: payload => dispatch(dataArr(payload))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AbtPage)
// export default AbtPage
