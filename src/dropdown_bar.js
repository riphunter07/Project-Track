import React from 'react';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';

const styleButton={
	display: "block",
	margin: "auto"
};

class DropdownBar extends React.Component{
    
     constructor(props){
      super(props);
      this.state = {nameofpayee:"",amount:0,paidfor:"",transactionList:[],paye:"",paid:"",transaction:1,money:0,loans:"",to:""};
      this.valueChangeHandler1 = this.valueChangeHandler1.bind(this);
      this.valueChangeHandler2 = this.valueChangeHandler2.bind(this);
      this.valueChangeHandler3 = this.valueChangeHandler3.bind(this);
      this.clickHandler = this.clickHandler.bind(this);
    }
    
    
    
  
    valueChangeHandler1 = event =>{
            this.setState({nameofpayee: event.target.value});
          
    }

    valueChangeHandler2(event){
      this.setState({amount:event.target.value});
    }

    valueChangeHandler3 = event =>{
      this.setState({paidfor: event.target.value});
    
}

    clickHandler(){
      const transactionObject={
        nameofpayee : this.state.nameofpayee,
        amount : this.state.amount,
        paidfor : this.state.paidfor
      }
      this.props.finalList.addItem(transactionObject);
      this.setState({transactionList:[...this.state.transactionList, transactionObject]});
      this.state.loans="loans"
      this.state.to="to"
      this.state.transaction=this.state.transaction+1
      this.setState({money: this.state.amount})
      this.setState({paye: this.state.nameofpayee})
      this.setState({paid: this.state.paidfor})
      this.setState({amount:0, nameofpayee:"", paidfor:""});
      
      
      
    }



   render(){
  
     return (<div>
       <Panel>
         <h3>Transaction no. {this.state.transaction}</h3>
         <Input 
            label = "Who pays"
            type="text"
            name="nameofpayee"
            value={this.state.nameofpayee}
            onChange={this.valueChangeHandler1}
          
        />
        <br/><br/>
        <Input label="Enter Expense" floatingLabel="true" type="number" onChange={this.valueChangeHandler2}/>
        <br/><br/>
        <Input
            label = "Paid for"
            type="text"
            name="paidfor"
            value={this.state.paidfor}
            onChange = { this.valueChangeHandler3 }
        />
        <br/><br/>
        <Button style={styleButton} color="primary" onClick={this.clickHandler}>Add</Button>
        <h4>LAST TRANSACTION</h4>
        <p>{this.state.paye} {this.state.loans} {this.state.money} {this.state.to} {this.state.paid} </p>
        </Panel>
        </div>);}
      
      }
      
export default DropdownBar;
