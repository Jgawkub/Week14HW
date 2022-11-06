import React from "react";
export default class Rating extends React.Component{
    
  constructor(props){
        super(props);
        this.state={
         
        }
       }

// // one=()=>{
// //   let newRating=this.state.rating
// //   newRating.push('ROAR')
// //   this.setState({rating:newRating})
// //   console.log(newRating)

// }
    render(){
    
        return(<div>
          {/* {this.prop.rating} */}
        <div className='stars'>
          <a className="bi bi-star-fill s-1"></a>
          <a className="bi bi-star-fill s-2" ></a>
          <a className="bi bi-star-fill s-3"></a>
          <a className="bi bi-star-fill s-4" ></a>
          <a className="bi bi-star-fill s-5"></a>
        </div>
        </div>
    )
    
    }

     }

     