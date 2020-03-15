import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            reviews: null
        }
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(reviews => {
            this.setState({
                reviews: reviews.results
            })
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' value={this.state.searchTerm} />
                    <input type='submit' />
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}