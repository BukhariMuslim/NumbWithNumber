import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, browserHistory } from "react-router-dom"
import store from './js/modules/store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './js/components/App'
// import LoginContainer from './js/containers/LoginContainer'
import injectTapEventPlugin from 'react-tap-event-plugin'
// import "./css/less/materialize.less"
// import "./css/less/default.less"

injectTapEventPlugin()

const activeStore = store();

// const requireAuth = (nextState, replace) => {
//   if (!userExists()) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname }
//     })
//   }
// }

render(
  <MuiThemeProvider>
    <Provider store={activeStore}>
      <Router history={browserHistory} >
        <div>
          <Route path="/" component={App} />
        </div>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
