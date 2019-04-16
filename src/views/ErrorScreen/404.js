import React, { Component } from "react"
import { AnimatedWrapper, Button } from "../../components"

class _404 extends Component {
  render() {
    return (
      <div style={{ padding: 24 }}>
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => this.props.history.goBack()}
        >
          ERR 404
        </h1>
        <div>
          <Button
            btnColor="#b9f442"
            history={this.props.history}
            target={{ type: "route", value: "/" }}
          >
            Kembali
          </Button>
        </div>
      </div>
    )
  }
}

const Err404 = AnimatedWrapper(_404)
export default Err404
