import React, { Component} from 'react';
import Button from '../Button';
import Logo from '../Logo';
import './Login.css';
 class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i_email: '',
      i_password: ''
    };

    this.inputData = this.inputData.bind(this);
    this.inputData1 = this.inputData1.bind(this);
  }
     
    inputData = event => {
    this.setState({i_email: event.target.value });

};

inputData1 = event => {
  this.setState({i_password: event.target.value});
  
};


componentDidUpdate(){
  console.log(this.state);
}


   render () {
    return(
      
      <div>
          <Logo/>
          <div className = "Login">
      <h1>Authentication Required</h1>
      <form onSubmit={this.loginData}>
        <label>
          <p>Email</p>
          <input name = "i_email" type="text" value={this.state.i_email} onChange = {this.inputData} />
        </label>
        <label>
          <p>Password</p>
          <input name = "i_password" type="password" value={this.state.i_password} onChange = {this.inputData1} />
        </label>
        <div>
          <Button type="login" onClick={ () => {
            /* switch (this.state.i_email,this.state.i_password){
              case 'superuser@care.com','123456qwerty': 
                return {this.props.history.push('/super')};
              case 'factoryadmin@care.com','123456qwerty': 
                return {this.props.history.push('/factory')};
              case "employeuser@care.com","123456qwerty": 
              return this.props.history.push('/employee');
              case " ", " ":
                return this.props.history.push('/');
              
            }
          } */
            if(this.state.i_email ==="superuser@care.com" && this.state.i_password === "123456qwerty") 
            {return (this.props.history.push('/super'));}
            if(this.state.i_email ==="factoryadmin@care.com" && this.state.i_password === "123456qwerty") 
            {return (this.props.history.push('/factoryadmin'));}
            if(this.state.i_email ==="employeeuser@care.com" && this.state.i_password === "123456qwerty") 
            {return (this.props.history.push('/employee'));}
            else {return (alert('Authorization Failed'));}
          }}
             >Login</Button>
        </div>
      </form>
    </div>
    </div>
    )

   }
   }
     
    
 export default Login;