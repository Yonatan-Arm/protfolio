// ROUTER
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// ALL COMPONENTS GOES HERE
import { AppNav } from './components/AppNav'
import { HomePage } from './pages/HomePage'



function App() {
  return (
    <Router>
      <div className='App'>
          <AppNav />
          <Switch>
            <Route path='/' component={HomePage} />
          </Switch>
      </div>
    </Router>
  )
}

export default App
