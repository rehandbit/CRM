import React from 'react'
import './App.css'
import Form from './Form'
import NewAccount from './NewAccount'
import NewContact from './NewContact'
import {Route, BrowserRouter as Router,Switch,Link} from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Router>
        <div className="container">
          
            <Link to="/">
              <button className="btn btn-light">Back home</button>
            </Link>
            <Link to="/Form" >
              <button type="button" className="btn-newLead">New Lead</button>
            </Link>
            <Link to="/NewAccount">
              <button className="btn-new-acc" >New Account</button>
            </Link>
            <Link to="/NewContact">
              <button className="btn-new-acc" >New Contact</button>
            </Link>
          
          <Switch>
            <Route exact path="/Form" component={Form} />
            <Route exact path="/NewAccount" component={NewAccount} />
            <Route exact path="/NewContact" component={NewContact} />
          </Switch>
        </div>
      </Router>
    </div>
    );
}

export default App;
