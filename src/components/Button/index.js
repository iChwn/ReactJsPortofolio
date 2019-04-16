import React, { Component } from "react"
import { Col } from "react-bootstrap"
import "./styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class Button extends Component {
  state = {
    isClick: false
  }

  navigateTo(target) {
    if (target === undefined) {
      return
    }
    if (target.type === "route") {
      this.props.history.push(target.value)
    } else {
      window.location.href = `http://${target.value}`
    }
  }

  render() {
    const {
      customChild,
      children,
      btnColor, //Input HEX Color only
      isOutLine,
      hasIcon,
      target //Object, pass 2 object
    } = this.props

    return (
      <div
        className="btn-wrapper"
        style={{
          color: isOutLine ? "black" : "white",
          backgroundColor: this.state.isClick
            ? btnColor
              ? LightenDarkenColor(btnColor, -20)
              : "#FFFFFF"
            : btnColor
            ? isOutLine
              ? "transparent"
              : btnColor
            : "#FFFFFF",
          border: isOutLine ? `2px solid ${btnColor}` : "transparent"
        }}
        onMouseDown={() =>
          this.setState({
            isClick: true
          })
        }
        onMouseUp={() =>
          this.setState({
            isClick: false
          })
        }
        onClick={() => this.navigateTo(target)}
      >
        {customChild ? (
          children
        ) : (
          <Col
            xs={12}
            style={{
              fontSize: 20,
              padding: 10,
              display: "inherit",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {hasIcon && (
              <FontAwesomeIcon
                icon={hasIcon}
                style={{
                  marginRight: children ? 5 : 0,
                  cursor: "pointer"
                }}
              />
            )}
            {children && <span>{children ? children : " "}</span>}
          </Col>
        )}
      </div>
    )
  }
}

//The Powerfull Hex Color Converter hahaha
// this is from https://css-tricks.com/snippets/javascript/lighten-darken-color/
function LightenDarkenColor(col, amt) {
  var usePound = false

  if (col[0] === "#") {
    col = col.slice(1)
    usePound = true
  }

  var num = parseInt(col, 16)

  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16)
}
