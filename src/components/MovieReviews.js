// Code MovieReviews Here
import React from "react";
const Review = ({ headline, byline, link, summary_short }) => {
  return (
    <div key={headline} className="review">
      <ul>
        <li>
          <h1>
            <a href={link.url}>{headline}</a>
          </h1>
          <h2>{byline}</h2>
          <blockquote>{summary_short}</blockquote>
        </li>
      </ul>
    </div>
  );
};
const MovieReviews = props => {
  return <div className="review-list">{props.reviews.map(Review)}</div>;
};
export default MovieReviews;
