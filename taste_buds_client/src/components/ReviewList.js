import React from 'react';
import ReviewDetails from './ReviewDetails';

const ReviewList = (props, deleteReview) => {
    console.log(`ReviewsList props:${props.reviews}`)
    const reviews = props.reviews
    return (
        <div>
            {
                reviews ? 
                reviews.map((r, i) => {
                    return <ReviewDetails
                        key={i} 
                        id={r.id}
                        rating={r.rating}
                        body={r.body}
                        user_full_name={r.user_full_name}
                        created_at={new Date(r.created_at.toLocaleString())}
                        deleteReview={deleteReview}
                    />
                })
                :
                null
            }
        </div>
    )
}

export default ReviewList;