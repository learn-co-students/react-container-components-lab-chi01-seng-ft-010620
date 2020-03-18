import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
   state={
       reviews: [],
       searchTerm: ""
   }

    handleSearch=(event)=>{
        event.persist()
       this.setState({
           searchTerm: event.target.value
       })
       console.log(this.state.searchTerm)
    }
    handleSubmit=(event)=>{
        let query = this.state.searchTerm
        event.preventDefault()
     
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?`+`api-key=${NYT_API_KEY}&query=${query}`)
        .then(resp=>resp.json())
        .then(data=>{
            console.log("searched DATA",data)
            this.setState({
                reviews: data.results
            })
        })
    }
    render(){
        return(

            <div className="searchable-movie-reviews">
                <form  onSubmit={(event)=>{this.handleSubmit(event)}}>
                    <input type="text" placeholder="Search Reviews" onChange={this.handleSearch}/>
                    <input type="submit"/>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}