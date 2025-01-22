import React, { Component } from 'react';
import './App.css';
import superUser from './Containers/Super';
import employee from './Containers/Employee';
import factoryadmin from './Containers/Factoryadmin';
import Factory from './Components/Factory/Factory';
import Workshop from './Components/Workshop/Workshop';
import Zone from './Components/Zone/Zone';
import Machine from './Components/Machine/Machine';
import { Route, Switch} from 'react-router-dom';
import Login from './Login/Login';
import Logo from './Logo'
class App extends Component {
  
  render () {
    return(
      <div className = "App" style={{ backgroundImage: "url(/Background.jpg)", width:'2000px', height: '600px' }}>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/super" component={superUser}/>
            <Route path="/employee" component={employee}/>
            <Route path="/factoryadmin" component={factoryadmin}/>
            <Route path="/Factory" component={Factory}/>
            <Route path="/Workshop" component={Workshop}/>
            <Route path="/Zone" component={Zone}/>
            <Route path="/Machine" component={Machine}/>


        </Switch>
            
            
        
          
    </div>

    );
  }

}
    


export default App;
