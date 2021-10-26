import React from 'react'
import './App.css'
import Form from './Form'
import {Route, BrowserRouter as Router,Switch,Link} from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Router>
        <div className="container">
          <nav>
            <Link to="/">
              <button>home</button>
            </Link>
            <Link to="/Form" >
              <button type="button" className="btn-newLead">New Lead</button>
            </Link>
          </nav>
          <Switch>
            <Route exact path="/Form" component={Form} />
          </Switch>
        </div>
      </Router>
    </div>
    );
}

export default App;
