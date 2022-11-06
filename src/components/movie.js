import React from "react";
import Comment from "./comment";
import Rating from "./rating";

export default class Movie extends React.Component{
    constructor(props){
      console.log("TEST",props.info[0].title)
    super(props);{
            this.state={
                reviews:[],
                rating:[]
                
        }
    }
    }




addReview=(review)=>{//this pushes a review to the above array. 
        var newReview=this.state.reviews
        newReview.push(review)
        console.log(this.state.reviews)
        this.setState({reviews:newReview})
      
      }


render(){// this iterates through the array of reviews and publishes them below the movie.
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
//Below I am passing through the props from my movie list component to generate the list of films with the provided info, Title, Date, Director etc. 
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
    Summary: {this.props.info[0].plot}
    <br/>
    <br/>
    <Comment rating={this.state.rating} event1 ={this.event1} addRating={this.addRating} addReview={this.addReview}/>
    <br/>
    <div className="border-bottom border-dark"></div>

            </div>
  <br/>
  <br/>
{reviewRender}

  <br/>
            </div>
    </div>
      
   
    </div>
  );
}


}

//Was trying to push stuff to that above array of rating but am getting some weird errors. 

// addRating=(rating)=>{// 
//         let rate1=this.state.rating
//         rate1.push(rating)
//         console.log(this.state.rating) 
//         this.setState({rating:rate1})
          
//       }

    // event1=()=>{// I grabbed the below code from a video about making a star rating. 
    //   let stars=document.querySelectorAll('.stars a')
    //         console.log('HI')
    //         let starRender=stars.forEach((star,idx)=>{
    //           star.addEventListener('click', ()=>{
    //             let newRating=`${idx+1} out of 5 stars`
    //             this.setState({rating:newRating})    
    //             console.log(this.state.rating)   
    //           });      
    //         });
            
    //       }
