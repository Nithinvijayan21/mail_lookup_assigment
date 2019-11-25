
import React from 'react';
import 'whatwg-fetch';
import {SERVER_URL} from './../config';
import './../css/login.css'
import UserList from './../data_component/userList.json'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                userDetails:{
                    username:"",
                    password:""
                },
                error:"",
                route:'login',
                info:"Try with username: Admin & password : Demo@123"
            } 
    }   
inputChangeHandler = (event) => {
        this.setState({error: " "});
        let {userDetails} = this.state;
        const target = event.target;
        userDetails[target.name] = target.value;
        this.setState({userDetails});
}; 
login = (e) => {   
       e.preventDefault();
        if(UserList.find((item)=>(item.name==this.state.userDetails.username && item.password==this.state.userDetails.password))){
            sessionStorage.currentUserRole=JSON.stringify({role:"ROLE_USER"});
            sessionStorage.auth=JSON.stringify(UserList.find((item)=>(item.name==this.state.userDetails.username)));
            this.customLoginHandler();
        }
       else{
           this.setState({error:"User not found, Try with username: Admin & password : Demo@123"});
       }
};   
customLoginHandler = () => {      
        this.props.setRoute('home');
};

resetForm(){ 
    this.setState({
                    userDetails : {
                                    username: "",
                                    password: ""
                                  },
                    route : 'login',
                    error : ' '
                  });
};
 getFrequency(str) {
    return str.split('').reduce( (prev, curr) => {
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {});
  };
  
  
render() {
         const {userDetails} = this.state;
         console.log(this.getFrequency(this.state.info))
         return(
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h1 className="my-3">Welcome </h1>
                    </div>
                    <div className={this.state.error?"alert alert-warning":"alert alert-info"} role="alert">
                        {this.state.error?this.state.error:this.state.info}
                    </div>
                    <form onSubmit={(e)=>this.login(e)}>
                        
                        <input type="text" id="username" value={userDetails.username} className="fadeIn second" name="username" onChange={(e)=>this.inputChangeHandler(e)} placeholder="username"/>
                        <input type="text" id="password" value={userDetails.password} className="fadeIn third" name="password" onChange={(e)=>this.inputChangeHandler(e)} placeholder="password"/>
                        <button type="submit" className="btn btn-lg btn-info my-3 fadeIn fourth">Log In</button>
                    </form>
                </div>
            </div>)
        };
}
export default Login;