import React from 'react';

const ReviewDetails = ({rating, body, user_full_name, created_at, id, deleteReview}) => {
    return(
      <div className="m-5">
        <p>Rating: {rating}</p>
        <p>{body}</p>
        <p>By: {user_full_name ? user_full_name : null}</p>
        <p>
          <strong>Created at: </strong> {created_at.toLocaleString()}
        </p>
        <button onClick={() => deleteReview(id)}>Delete</button>
      </div>
    )
}

export default ReviewDetails;