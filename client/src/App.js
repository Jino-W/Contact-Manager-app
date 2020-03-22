import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import PrivateRoute from './components/common/PrivateRoute'
import Register from "./components/users/Register"
import Login from "./components/users/Login"
import List from './components/contacts/List'

function App() {
  
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/' render={(props)=>{
              if(localStorage.getItem("authToken")){
                  return <Redirect to={{pathname:'/contacts'}}/>
              }else{
                  return <Login {...props}/>
              }
          }} />
          <Route exact path='/users/register' component={Register} />
          <PrivateRoute exact path='/contacts' component={List} />
        </Switch>
      </>
    </Router>
  )
}

export default App
