import React, { Component } from "react"
import { Route, Switch, NavLink } from "react-router-dom"
import Home from "./Home"
import Subpage from "./Subpage"
import TransitionGroup from "react-transition-group/TransitionGroup"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <div style={{ padding: 20 }}>
            <NavLink
              to="/"
              exact={true}
              style={{ textDecoration: "none", color: "black" }}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
                textDecoration: "line-through"
              }}
            >
              {" Home "}
            </NavLink>
            <NavLink
              to="/subpage"
              exact={true}
              style={{ textDecoration: "none", color: "black" }}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
                textDecoration: "line-through"
              }}
            >
              {" Subpage "}
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Home {...rest} />}
              </TransitionGroup>
            )}
          />
          <Route
            exact
            path="/subpage"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Subpage {...rest} />}
              </TransitionGroup>
            )}
          />
          <Route component={_404} />
        </Switch>
      </div>
    )
  }
}

const _404 = () => <h1>Not Found</h1>
const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children)
  return childrenArray[0] || null
}
export default App
