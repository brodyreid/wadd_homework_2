import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
// import ReviewList from './ReviewList';
// import RecipeData from '../RecipeData';
import { Recipe } from '../requests';


class RecipeShowPage extends Component {
    constructor(props) {
        super(props)
        this.state = { recipe: {} }
        this.deleteReview = this.deleteReview.bind(this)
    }

    componentDidMount() {
        Recipe.show(this.props.match.params.id)
            .then((recipe) => {
                this.setState((state) => {
                    return {
                        recipe: recipe
                    }
                })
            })
    }

    deleteReview(id) {
        this.setState((state) => {
            return {
                reviews: this.state.reviews.filter(r => r.id !== id)
            }
        })
    }

  render() {
    console.log('Recipe show page rendered');
 
    const {title, story, instructions, serving_size, spicy, sweet, salty, image_url, created_at, user} = this.state.recipe
    console.log(created_at)
    return(
        <main>
            <RecipeDetails 
                title={title}
                story={story}
                instructions={instructions}
                serving_size={serving_size}
                spicy={spicy}
                sweet={sweet}
                salty={salty}
                image_url={image_url}
                created_at={new Date(created_at)}
                user={user}
            />
            {/* <h2>Answers: </h2>
            <AnswerList
            answers= {this.state.Recipe.answers}
            deleteAnswer={this.deleteAnswer}
            /> */}
        </main>
    )
  }
}

export default RecipeShowPage;