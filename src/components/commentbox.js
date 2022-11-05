import React from "react";

//I originally wanted to make a component that was just a review box but was having some trouble passing the value in the box up and down to log whatever was in the input field, so rather I simply created a text area within my Comment component, and this made it somewhat easier. 

export default class CommentBox extends React.Component{
    
    constructor(props){
        super(props);
        {
            this.state={
                box:''
            }
        }
    }
    

    render(){
        return(
            <div>
                <h3>Leave your review below</h3>
                <textarea id='review' onChange={this.handleChange} rows="4" cols="45"></textarea> 
               
               
            </div>
        )
    }
}