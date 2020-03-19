import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
const SEARCH = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{
  constructor(){
    super()
    this.state= {
      reviews: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        // this.setState({
        //   reviews: data['results']
        // })
      })
      .catch(err => console.log(err))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const term = this.state.searchTerm
    fetch(SEARCH + term)
      .then(resp => resp.json())
      .then(results => {
        console.log(results)
        this.setState({
          reviews: results['results']
        })
      })
      .catch(err => console.log(err))
  }

  // renderReviews = () => {
  //   console.log('reviews')
  //   <MovieReviews reviews={this.state.reviews}/>
  // }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={e => this.handleSubmit(e)} className="reviews" >
          <label>Search by Title</label>
          <input onChange={e => this.handleChange(e)} type="text" name="title" value={this.state.searchTerm} />
          <input type="submit" name="submit" value="Submit" />
        </form>
        <h1>
          Matching Reviews
        </h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
};

export default SearchableMovieReviewsContainer;

//
//   <SearchableMovieReviewsContainer />
//     ✓ should have state
//     7) should have the state properties "reviews" and "searchTerm"
//     8) should fetch data from the New York Times API on form submission
//     9) should render reviews after reviews state updated
