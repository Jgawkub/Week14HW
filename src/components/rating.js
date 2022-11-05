import React from "react";
export default class Rating extends React.Component{
    constructor(props){
        super(props);
        this.state={rating:''
        }
       }




    
    
     event1=()=>{// I grabbed the below code from a video about making a star rating.
      let stars=document.querySelectorAll('.stars a')
      let starRender=stars.forEach((star,idx)=>{
        star.addEventListener('click', ()=>{
          // console.log(`${idx+1} out of 5 stars`)
          this.setState({rating:`${idx+1} out of 5 stars` })
        });
      });
      console.log(this.state.rating)
    }
    
  
     
    
   
  
   

    render(){
    

        
        
        return(
        <div onClick={this.event1} className='stars'>
          <a className="bi bi-star-fill s-1"></a>
          <a className="bi bi-star-fill s-2" ></a>
          <a className="bi bi-star-fill s-3"></a>
          <a className="bi bi-star-fill s-4" ></a>
          <a className="bi bi-star-fill s-5"></a>
        </div>
    )
    
    }

     }