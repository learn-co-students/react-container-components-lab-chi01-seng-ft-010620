// Code MovieReviews Here
import React from 'react';

// byline
// "Ken Jaworowski"
// critics_pick
// 1
// date_updated
// "2020-03-18 16:44:01"
// display_title
// "Human Nature"
// headline
// "‘Human Nature’ Review: We Can Now Alter Our DNA. But Should We?"
//
// link
// {suggested_link_text: "Read the New York Times Revi…}
// mpaa_rating
// ""
//
// multimedia
// {height: 140, src: "https://static01.nyt.com/images…}
// opening_date
// "2020-03-12"
// publication_date
// "2020-03-12"
// summary_short
// "Adam Bolt’s new documentary focuses on Crispr technology, which can edit genes, thus giving people the ability to change human, animal and plant life."


const MovieReviews = (props) => {
  console.log(props.reviews);
  const renderReviews = () => {
    return props.reviews.map(review => {
      return (
        <div className="review" key={review.id}>
        <h3>Display Title: {review.display_title}</h3>
        <p>Headline: {review.headline}</p>
        <p>Critic's Pick: {review.critics_pick}</p>
        <img src={review.multimedia.src === null ? "https://image.shutterstock.com/image-vector/online-cinema-art-movie-poster-260nw-1006115221.jpg" : review.multimedia.src} />
        <p>Short Summary: {review.summary_short}</p>
      </div>
    )
    })
  }
  return(
    <div className="review-list">
      {renderReviews()}
    </div>
  )
};

export default MovieReviews;

//   <MovieReviews />
//     ✓ should be a stateless functional component
//     5) should have a top-level component with class "review-list"
//     6) should render all the reviews
