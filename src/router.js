import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Tour} from './Tour';
import {NavBar} from './nav';
import {Error} from './Error';
const RouterSetup=()=>{
    return (
    <Router>   
      <NavBar/>    
      <Switch>
   <Route exact path='/' >
    <Home/>
   </Route>
   <Route path='/about'>
     <About/>
   </Route>
   <Route path='/Tour'>
     <Tour/>
   </Route>
   <Route path='*'>
    <Error/>
   </Route>
   </Switch>
    </Router>
    );
}
export default RouterSetup;