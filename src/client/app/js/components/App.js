import React, { Component } from 'react'
import ScrollToTopOnMount from '../modules/ScrollToTopOnMount'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import { Link, withRouter } from 'react-router-dom'

const LogoImg = '/img/logo.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleToggle() { this.setState({ open: !this.state.open }) }

  handleClose() { this.setState({ open: false }) }

  render () {
    return (
      <div>
        <ScrollToTopOnMount/>
        <header>
          <AppBar
            title={
              <div>
                <Link to="/" style={{ color: 'white'}}>
                  <img src={LogoImg} style={{height: 32, width: 'auto', verticalAlign: 'middle', marginRight: 10 }} alt="Numb with Numbers"/>
                  <span style={{ verticalAlign: 'middle' }}>
                    Numb with Numbers
                  </span>
                </Link>
              </div>
            }
            iconElementLeft={
              <IconButton onTouchTap={() => this.handleToggle()} ><FontIcon className="material-icons">dehaze</FontIcon></IconButton>
            }
            style={{ position: "fixed" }}
          />
        </header>
      </div>
    )
  }
}

export default App