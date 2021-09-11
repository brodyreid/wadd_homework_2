import React from 'react';



const RecipeDetails = ({title, story, instructions, serving_size, spicy, sweet, salty, image_url, created_at, user}) => {
    return (
        <div className="m-5 text-center">
          <h2>{title}</h2>
          <p>By: { user ? user.full_name : null }</p>
          <img className="image" src={image_url} />
          <p>{story}</p>
          <p>{instructions}</p>
          <p>Serving Size: {serving_size}</p>
          <p>Spicy? {String(spicy)}</p>
          <p>Sweet? {String(sweet)}</p>
          <p>Salty? {String(salty)}</p>
          <p>
            <br/>
            <small>Created at {created_at.toLocaleString()}</small>
          </p>
        </div>
    )
}

export default RecipeDetails;