import React from "react";
import Movie from "./movie";
export default class List extends React.Component{
    constructor(props){
        super(props);{
            this.state={
                movies:[ [{
                    title:'Jurassic Park',
                    date: 1993,
                    director: 'Steven Spielberg',
                    image: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
                    plot: "Playing God goes a little wrong in this 1993 sci-fi movie based on the Michael Crichton book of the same name."
                
                }],
                [{
                    title: 'Terminator 2',
                    date: 1991,
                    director: 'James Cameron',
                    image: 'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
                    plot: `The hit sequel to James Cameron's tecnho 1984 thriller sees Arnold cast in a protector role of a young John Connor.`
                }],
                [{
                    title: 'Little Women',
                    date: 2019,
                    director: 'Greta Gerwig',
                    image:'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/DP_4944434_LittleWomen_Cover_2000x3000_US.jpg?itok=HOMWAysI',
                    plot: `Life isn't so great for these Little Women.`

                }],
                [{ 
                    title: 'Grand Budapest Hotel', 
                    date: '2014',
                    director: 'Wes Anderson',
                    image: 'https://media.vogue.co.uk/photos/5d545e4fdf3584000807d6f8/3:4/w_1278,h_1704,c_limit/grand-budapest-hotel-poster-vogue-8jan15-pr_b.jpg',
                    plot: `Follow Zero and his mentor Gustave H. at the Grand BNudapest in this delightfully Wes Andersoney story`
                }],
                [{
                    title: 'The Matrix',
                    date: 1999, 
                    director: 'The Wachowskis',
                    image: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
                    plot: `Keanu Reeves finds out not is all as it seems and sees how deep the rebbit hole really goes in this absolutely influential sci-fi film at the cusp of the new Millenium`
                }], 
                [{
                    title: 'Star Wars: A New Hope', 
                    date: 1977, 
                    director: 'George Lucas',
                    image:'http://www.studioremarkable.com/wp-content/uploads/1995/02/Star-Wars-1977-Poster.jpg',
                    plot: `See Luke Skywalker, battle storm troopers and learn the ways of the force in the first chapter of as eries that would come to dominate cinema history.`
                }]
            
            ]
            }
        
        
        }
    }

render(){// I am iterating through all the movies in the above state, which itself is an array of objects of arrays (there was some weirdness where an raay of objects was not making React very happy. ). Upon mapping through the array I then assign the info to a movie component. 
    let movies1 = this.state.movies
    let movieRender=movies1.map((movie,index)=>
    <div key={movie+index}>
        <Movie info={movie}/>    
       </div>);



    return (
 
  <div className='d-flex flex-wrap justify-content-center'>
            
            
        
            {movieRender}
</div>
  
   

  
                 

    

    )

}


    
}