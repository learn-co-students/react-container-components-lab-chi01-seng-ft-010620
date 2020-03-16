import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`)
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

    handleInputChange = event => {
        this.setState({
            ...this.state,
            searchTerm: event.target.value
        })
    }

    render() {
        return (
        <div className="searchable-movie-reviews">
            <h2>Search Results</h2>
            <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleInputChange}/>
            <input type="submit" value="Search Reviews"/>
            </form>
            < MovieReviews reviews={this.state.reviews} />
        </div>
        )
    }
}

export default SearchableMovieReviewsContainer