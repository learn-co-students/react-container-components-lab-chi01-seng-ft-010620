import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(movies => {
          let reviewsArr = []
          movies.results.map(movie => {
            let movieObj = {
              display_title: movie.display_title,
              suggested_link_text: movie.link.suggested_link_text,
              url: movie.link.url
            }
            reviewsArr.push(movieObj)
          })
          this.setState({
            reviews: reviewsArr
            })
        })
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                <h2>The Latest Review:</h2>
                <MovieReviews review={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer