import React from "react";
import Rating from "./rating";
import CommentBox from "./commentbox";
export default class Comment extends React.Component{
   
   constructor(props){
    super(props);
    this.state={box:'',
    clickStatus:false
        
     
        
    }
   }


 
   handleChange=()=>{//this is constantly setting the state of my prop box which is where one Leaves a review of the movie 
    let input=document.getElementById('review').value
    console.log(input)
    this.setState({box:input})
   
    
    }

    reset=()=>{//This function I use to blank out the text are submission box and then to also close the box by resetting clicked status to false. 
        let input = document.getElementById('review')
        input.value=''
        this.setState({clickStatus:false});
    }

   renderBox=()=>{//Upon click this pops out the box where you can leave your submission
    console.log('ADDING BOX')
    this.setState({clickStatus:true})
    console.log(this.state.clickStatus)
     }
   

    
     render(){
   
   
   
   
        return(
            <div>
                <button  className="btn btn-primary " id='submit' onClick={this.renderBox}>Add your own review</button>
                {this.state.clickStatus==true ? <div><div><Rating/></div><textarea id='review'onChange={this.handleChange}/> <br/> <button className="btn btn-primary" onClick= {()=>{this.props.addReview(this.state.box);
                this.reset()}}>Submit </button></div>: null}
                
                
              
            </div>
        )
    }

}