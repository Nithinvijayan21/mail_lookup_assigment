import React from 'react';
import './../css/main.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import RoutingData from "./../routing_component/data";
import MailList from "./../data_component/mailList.json"
const SideNavigation = () => {
return (
        <div className="col-md-2 col-xs-1 p-l-0 p-r-0 collapse in show" id="sidebar">
            <div className="list-group panel">
                <a href="#folders" className="list-group-item" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false">
                    <span className="hidden-sm-down">Folders</span> 
                </a>
                <div className="collapse in show" id="folders">
                {RoutingData['ROLE_USER'].map((routeData,index)=>
                   <span className="list-group-item" key={index} data-parent="#folders">
                       <Link className="text-decoration-none text-dark" to={routeData.path}>
                       {routeData.displayName}
                       
                       </Link>
                       {routeData.component=='inbox' && <small className="float-right text-primary" >{MailList.filter((item)=>(item.unread&&!item.delStatus&&!item.spamStatus)).length}</small>}
                       {routeData.component=='spam' && <small className="float-right text-primary" >{MailList.filter((item)=>(item.unread&&!item.delStatus&&item.spamStatus)).length}</small>}
                      
                    </span>
                )}
                </div>
               </div>
        </div>
);
};
export default SideNavigation;