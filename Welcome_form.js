import React from 'react';

export default class Welcome_form extends React.Component{
    constructor(props){
        super(props);
    }

     onFormSubmit=(e)=>{
         e.preventDefault();
     }

    
    render(){
         return(
             <form onSubmit={this.onFormSubmit}>
                <span>Name</span>
                <input name="name" value={this.props.student_name} onChange={this.props.change} />
                <button onClick={this.props.submit}>submit</button>
                </form>
         )
     }
 }