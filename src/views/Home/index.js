import React, { Component } from "react"
import { Button, AnimatedWrapper, ProgresLoadingBar } from "../../components"
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTimes, faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col } from "react-bootstrap"

import { connect } from "react-redux"
import { rotateAction, dataArr } from "../../models/sampleRedux/action"
import {
  progressLoad,
  showLoading,
  hideLoading
} from "../../models/progressLoadPage/action"

import "./styles.css"

class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadPage: 0
    }
  }

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

  componentWillUnmount() {
    // console.log(`ini adalah ${this.state.loadPage}`)
  }

  render() {
    // console.log(this)
    return (
      <div>
        <h1>Home</h1>
        <p className="test-text">Hello from the home page!</p>
        <Container>
          <Row>
            <Col md={6}>
              <Button
                isOutLine={true}
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
  dataArr: payload => dispatch(dataArr(payload)),
  progressLoad: payload => dispatch(progressLoad(payload)),
  showLoading: payload => dispatch(showLoading(payload)),
  hideLoading: payload => dispatch(hideLoading(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
