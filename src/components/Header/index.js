import React, { Component } from "react"
import { BrowserRouter as Router, NavLink } from "react-router-dom"
import { ProgresLoadingBar } from "../index"
import "./styles.css"

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [
        {
          id: 1,
          value: "Home",
          link: "/"
        },
        {
          id: 2,
          value: "About",
          link: "/about"
        }
      ]
    }
  }

  render() {
    const { menu } = this.state
    return (
      <div className="header-wrapper">
        {menu.map((res, idx) => {
          return (
            <div key={idx} className="header-items">
              <div>
                <NavLink
                  exact={true}
                  style={{ textDecoration: "none", color: "black" }}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                    textDecoration: "line-through"
                  }}
                  to={res.link}
                >
                  {res.value}
                </NavLink>
              </div>
            </div>
          )
        })}
        {/* <div style={{ position: "absolute", top: 0, zIndex: 1, width: "100%" }}>
          <ProgresLoadingBar props={this} />
        </div> */}
      </div>
    )
  }
}
