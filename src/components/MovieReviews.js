// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
    <div className='review-list'>
        {props.reviews.map((movie, index) => {
            return (
                <div className='review' key={index}>
                    <h4>{movie.display_title}</h4>
                    <i><a href={movie.url}>{movie.suggested_link_text}</a></i>
                </div>
            )
        })}
    </div>
}

export default MovieReviews