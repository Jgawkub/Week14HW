// •	Using what you’ve learned this week, create a page of an application that enables users to vote and leave reviews on movies.
// •	You should include at least the following components: 
// •	MovieList: a container for all the Movie components and their data.
// •	Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
// •	Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
// •	ReviewList: a container inside of a Movie that houses Review components.
// •	Review: A text review a user can leave on a movie.
// •	ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.

// I got most of the requirments but just couldnt figure out how to do the star system
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './App.css';
import List from './components/movielist';

import Rating from './components/rating';

 class App extends React.Component {
 
 
 constructor(props){
    super(props);{
    
    this.state={
   
 
  }
    }
  } 


  render(){
    return <div className='container'>               
            <List/>
  
    </div>
}
}
export default App;
