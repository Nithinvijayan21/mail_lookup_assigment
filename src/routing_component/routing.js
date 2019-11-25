import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import RoutingData from "./data";
import Inbox from "./../folder_component/inbox"
import Spam from "./../folder_component/spam"
import Deleted from "./../folder_component/deleted"
class MainRouting extends React.Component {
    constructor(props) {
        super(props);
        // console.log(RoutingData['ROLE_USER']);
    }
    getComponentForRoute(comp){
        switch(comp){
            case "inbox"        : return Inbox;
            case "spam"        : return Spam;
            case "deleted"        : return Deleted;
            
        }
    }
    render() { 
    return (    
                <React.Fragment>                   
                    {RoutingData['ROLE_USER'].map((routeData)=>
                    <Route  exact path={routeData.path}  
                            key={routeData.path}    
                            component={this.getComponentForRoute(routeData.component)} 
                    />)}
                </React.Fragment>
            )
        }
}
export default MainRouting;