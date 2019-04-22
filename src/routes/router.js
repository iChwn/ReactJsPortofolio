import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { TransitionGroup } from "react-transition-group"
import { Header } from "../components"
import { Home, About, Err404 } from "../views"

import { connect } from "react-redux"
import { rotateAction, dataArr } from "../models/sampleRedux/action"
import { progressLoad } from "../models/progressLoadPage/action"
import ProgressLoadingBar from "../components/ProgresLoadingBar"

class RootNavigation extends Component {
  render() {
    return (
      <Router>
        <ProgressLoadingBar loading={this.props.loadingReducer} />
        <Header />
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={({ match, ...rest }) => (
                <TransitionGroup component={firstChild}>
                  {match && <Home {...rest} />}
                </TransitionGroup>
              )}
            />
            <Route
              exact
              path="/about"
              render={({ match, ...rest }) => (
                <TransitionGroup component={firstChild}>
                  {match && <About {...rest} />}
                </TransitionGroup>
              )}
            />
            <Route component={Err404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children)
  return childrenArray[0] || null
}

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  rotateAction: payload => dispatch(rotateAction(payload)),
  dataArr: payload => dispatch(dataArr(payload)),
  progressLoad: payload => dispatch(progressLoad(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootNavigation)

// export default RootNavigation
