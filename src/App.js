import React from 'react';
import './App.css';
import Auth from './auth_component/auth';
import Login from './login_component/login';
import Home from './home_component/home';
class App extends React.Component {
  constructor(props){
    super(props);    
    this.state={
      route:"",
    }
   this.setRouteOnLogin=this.setRouteOnLogin.bind(this);
  }
componentDidMount() {
  
  (async () => {
    if (await Auth.loggedIn()){
                                  this.setState({route: 'home'}); 
                              }
    else{
          this.setState({route: 'login'});
        }
  })();
}  
componentDidUpdate() {
  if (this.state.route !== 'login' && !Auth.loggedIn()) {
    this.setState({route: 'login'})
  }
} 

render() {
    const content = this.contentForRoute();
    return <React.Fragment> {content} </React.Fragment>
}
contentForRoute() {
  const {route} = this.state;
  const loginContent          = <Login setRoute={this.setRouteOnLogin} />;
  const homeContent           = <Home logoutHandler={this.logoutHandler}/>;        
                        switch (route) {
                          case 'login':
                            return loginContent;
                          case 'home':
                            return homeContent;
                          default:
                            return <p>Loading...</p>;
                        }
}
logoutHandler = () => {
  Auth.logOut();
};
setRouteOnLogin(newroute){
  let {route} = this.state
  route=newroute
  this.setState({route});
}
};
export default App;
