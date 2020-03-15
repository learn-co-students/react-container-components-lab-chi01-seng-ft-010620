import React from 'react'

const MovieReviews = (props) => {
    let renderArray
    if (props.reviews) {
        renderArray = props.reviews.map(review => {
            return <div className='review'>
                {review.headline}<br></br>
                {review.summary_short}<br></br>
                {review.opening_date}<br></br><br></br>
            </div>
        })}
    return (
        <div className='review-list'>
            {renderArray}
        </div>
    )
}

export default MovieReviews