import React, { Component} from 'react';
import { Recipe } from '../requests';
import { Link } from 'react-router-dom';

class RecipeIndexPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            recipes: []
        }
        // this.createQuestion = this.createQuestion.bind(this);
        //console.log('Questionindex Component initialized');
    }

    componentDidMount(){
        Recipe.index()
        .then((recipes) => {
            this.setState((state) => {
                return {
                    recipes: recipes
                }
            })
        })
    }

    deleteRecipe(id) {
        this.setState((state) => {
            return  {
                recipes: state.recipes.filter(r => r.id !== id)
            }
        })
    }

    render() {
        console.log('Recipe index page rendered');
        return (
            <main>
                {
                    this.state.recipes.map(r => {
                        return(
                            <div key={r.id}>
                                 <Link to={`/recipes/${r.id}`}><h1>{r.id} - {r.title}</h1></Link>
                               
                                <button onClick={() => this.deleteQuestion(r.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </main>
        )
    }
}

export default RecipeIndexPage;