import React, { Component } from "react"
import { Button } from "../../components"
import { AnimatedWrapper } from "../../components"
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTimes, faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col } from "react-bootstrap"

import { connect } from "react-redux"
import { rotateAction, dataArr } from "../../models/sampleRedux/action"
import connectWithTransitionGroup from "../../components/Transition Animated/connectWithTransitionGroup"

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <ChildHome {...this.props} />
      </div>
    )
  }
}

class ChildHome extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Hello from the home page!</p>
        <Container>
          <Row>
            <Col md={6}>
              <Button
                btnColor="#5B7CFA"
                hasIcon={faAddressCard}
                history={this.props.history}
                target={{ type: "route", value: "/about" }}
              >
                About{" "}
              </Button>
            </Col>
            <Col md={6}>
              <Button
                btnColor="#f44262"
                hasIcon={faTimes}
                history={this.props.history}
                target={{ type: "route", value: "/404" }}
              >
                404 Page
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const Home = AnimatedWrapper(HomeComponent)
const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  rotateAction: payload => dispatch(rotateAction(payload)),
  dataArr: payload => dispatch(dataArr(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
