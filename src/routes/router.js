import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { TransitionGroup } from "react-transition-group"
import { Header } from "../components"
import { Home, About, Err404 } from "../views"

function RootNavigation() {
  return (
    <Router>
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

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children)
  return childrenArray[0] || null
}

export default RootNavigation
