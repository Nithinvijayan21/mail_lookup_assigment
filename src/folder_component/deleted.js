
import React from 'react';
import 'whatwg-fetch';
import MailList from './../data_component/mailList.json'
class Deleted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        deletedList:[],
        readMode:false,  
        selectedMessage:{},    
        }
      } 
componentDidMount(){
    this.getInboxList();
}
getInboxList(){
this.setState({deletedList:MailList})
}
findUnread(){
let unreadMessage={};
let {deletedList}=this.state;
unreadMessage=deletedList.filter((item)=>item.unread==true)[0];
this.onSelectedMessage(unreadMessage);
}
onSelectedMessage(selectedMessage){
    this.setState({readMode:true})
    selectedMessage.unread=false;
    this.setState({selectedMessage:selectedMessage});
}
render() {
    const {deletedList,selectedMessage} = this.state
        return (
                        <div className="row">
                            <div className="col-md-4 border-right vh-100">
                                {deletedList.map((item,index)=>
                                <React.Fragment>
                                {item.delStatus && <div key={index} className="my-2 c-pointer" onClick={()=>this.onSelectedMessage(item)}>
                                    <span className={item.unread?"d-block text-primary text-truncate":"d-block text-dark text-truncate"}>{item.subject}</span>
                                    <small className="d-block text-truncate">{item.content}</small>
                                    <small className="d-block text-primary text-right">{item.time}</small>
                                </div>}
                                </React.Fragment>
                                )}
                            </div>
                            <div className="col-md-8 ">
                            {!this.state.readMode && <div className="d-flex align-items-center justify-content-center vh-100">
                                <div className="d-flex flex-column text-center">
                                    <i className="fa fa-envelope-o fa-3x"></i>
                                    <small >select an item to read</small>
                                    {/* <a  className="text-primary c-pointer" onClick={()=>this.findUnread()}>Click here to always select the first item in the list</a> */}
                                </div>
                            </div>}
                            {this.state.readMode && 
                            <div className="row">
                                <div className="col-sm-12 " >
                                    <div className="border-bottom" >
                                        <h4>{selectedMessage.subject}</h4>
                                    </div>
                                    <div className="my-4" >
                                        <p>{selectedMessage.content}</p>
                                    </div>
                                </div>
                            </div>}
                            </div>
                        </div>
                )
 
};
}
export default Deleted;