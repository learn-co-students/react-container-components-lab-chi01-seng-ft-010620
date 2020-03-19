import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch(URL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          reviews: data['results']
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;

// <LatestMovieReviewsContainer />
//     ✓ should have state
//     1) should have a state property "reviews"
//     2) should have top-level element with class "latest-movie-reviews"
//     3) should fetch data from the New York Times API
//     4) should render reviews after reviews state updated
//
