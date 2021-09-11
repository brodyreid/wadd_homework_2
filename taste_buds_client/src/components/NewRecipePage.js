import React, { Component } from 'react'
import NewRecipeForm from './NewRecipeForm'
import { Recipe } from '../requests';

class NewRecipePage extends Component {
    constructor(props){
        super(props);
        this.state = { errors: [] };
        this.createRecipe = this.createRecipe.bind(this)
    }

    createRecipe(params) {
        console.log(`Params: ${params.title} ${params.story}`)
        Recipe.create(params)
        .then((recipe) => {
            console.log(`Recipe: ${recipe.errors}`)
            if (recipe.errors){
                console.log(`RecipeErrors: ${recipe.errors}`)
                this.setState({ errors: recipe.errors })
            } else {
                const id = recipe.id;
                this.props.history.push(`/recipes/${id}`);
            }
        })
    }

    render() {
        return(
            <div className="m-5">
                <NewRecipeForm createRecipe={this.createRecipe} errors={this.state.errors} />
            </div>
        )
    }
}

export default NewRecipePage;