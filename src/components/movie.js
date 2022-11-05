import React from "react";
import Comment from "./comment";

export default class Movie extends React.Component{
    constructor(props){
      console.log("TEST",props.info[0].title)
    super(props);{
            this.state={
                reviews:[],
           
        }
    }
    }


addReview=(review)=>{
        var newReview=this.state.reviews
        newReview.push(review)
        console.log(this.state.reviews)
        this.setState({reviews:newReview})
      
      }


render(){
    var review1=this.state.reviews
    var reviewRender=review1.map((r,index)=>
    <div key={r+index}>{r}</div>
    );
  
//  <div>
//     Title:{this.props.title}
//     <br/>
//     Year:{this.props.year},
//     <br/>
//     Director:{this.props.director},
//        </div>;

   return (
   
    <div className="card pad ">
      <div className="card-body box">
      <div><img className="img-fluid" src={this.props.info[0].image}></img></div>
        <div>
          <div>
    
    <br/>
    Title: <strong>{this.props.info[0].title}</strong>
    <br/>
    Date: {this.props.info[0].date}
    <br/>
    Director: {this.props.info[0].director}
    <br/>
    <Comment addReview={this.addReview}/>
    <br/>
    <div className="border-bottom border-dark"></div>

            </div>
  
  <br/>
  <br/>
    {reviewRender}
  <br/>
  <br/>
            </div>
    </div>
      
   
    </div>
  );
}


}
