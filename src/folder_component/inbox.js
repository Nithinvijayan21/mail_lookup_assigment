
import React from 'react';
import 'whatwg-fetch';
import MailList from './../data_component/mailList.json'
class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        inboxList:[],
        readMode:false,  
        selectedMessage:{},    
        }
      } 
componentDidMount(){
    this.getInboxList();
    
}
getInboxList(){
this.setState({inboxList:MailList});

}
findUnread(){
let unreadMessage={};
let {inboxList}=this.state;
unreadMessage=inboxList.filter((item)=>item.unread==true)[0];
this.onSelectedMessage(unreadMessage);
}
onSelectedMessage(selectedMessage){
    this.setState({readMode:true})
    selectedMessage.unread=false;
    this.setState({selectedMessage:selectedMessage});
}
moveToDeleted(deletedMessage){
    let {inboxList}=this.state;
    let del=MailList.find((item)=>deletedMessage.mId==item.mId);
    del.delStatus=true;
    inboxList=inboxList.filter((item)=>item.mId!=deletedMessage.mId);
    this.setState({inboxList});
}
render() {
    const {inboxList,selectedMessage} = this.state
        return (
                        <div className="row">
                            <div className="col-md-4 border-right vh-100">
                                {inboxList.map((item,index)=>
                                <React.Fragment>
                                {(!item.delStatus&&!item.spamStatus) && 
                                <div key={index} className="my-2 c-pointer" onClick={()=>this.onSelectedMessage(item)}>
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
                                    <a  className="text-primary c-pointer" onClick={()=>this.findUnread()}>Click here to always select the first item in the list</a>
                                </div>
                            </div>}
                            {this.state.readMode && 
                            <div className="row">
                                <div className="col-sm-12 " >
                                    <div className="border-bottom" >
                                    <h4>{selectedMessage.subject}
                                            <i className="fa fa-trash text-primary float-right c-pointer" onClick={()=>this.moveToDeleted(selectedMessage)}></i>
                                        </h4>
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
export default Inbox;