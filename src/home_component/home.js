
import React from 'react';
import 'whatwg-fetch';
import MainRouting from './../routing_component/routing'
import SideNavigation from './../nav_component/side_nav'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              
            }
      } 
render() {
        return (<div className="container-fluid">
                    <div className="row">
                        <SideNavigation/>
                        
                        <main className="col-md-9 col-xs-11 p-l-2 p-t-2">
                            <a href="#sidebar" data-toggle="collapse"><i className="fa fa-navicon fa-lg"></i></a>
                            <MainRouting/>
                        </main>
                    </div>   
                </div>)
 
};
}
export default Home;