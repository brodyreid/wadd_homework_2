import React from 'react';
// import FormErrors from './FormErrors'

const NewRecipeForm = (props) => {

    const handleSubmit = (event) => {
       event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const params = {
            title: formData.get('title'),
            story: formData.get('story'),
            instructions: formData.get('instructions'), 
            serving_size: formData.get('serving_size'),
            spicy: formData.get('spicy'),
            sweet: formData.get('sweet'),
            salty: formData.get('salty'),
            image_url: formData.get('image_url'),
            created_at: formData.get('created_at'),
        }

        props.createRecipe(params);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input name='title' id='title' ></input>
                {/* <FormErrors forField="title" errors={props.errors} /> */}
                <br/>
            </div>
            <div>
                <label htmlFor="story">Story</label>
                <br />
                <textarea name='story' id='story' ></textarea>
                <br/>
            </div>
            <div>
                <label htmlFor="instructions">Instructions</label>
                <br />
                <textarea name='instructions' id='instructions' ></textarea>
                <br/>
            </div>
            <div>
                <label htmlFor="serving_size">Serving Size</label>
                <br />
                <input name='serving_size' id='serving_size' ></input>
                <br/>
            </div>
            <div>
                <label htmlFor="spicy">Spicy</label>
                <br />
                <input type="hidden" name="spicy" value="0"></input>
                <input type="checkbox" name='spicy' id='spicy' ></input>
                <br/>
            </div>
            <div>
                <label htmlFor="sweet">Sweet</label>
                <br />
                <input type="hidden" name="sweet" value="0"></input>
                <input type="checkbox" name='sweet' id='sweet' ></input>
                <br/>
            </div>
            <div>
                <label htmlFor='salty'>Salty</label>
                <br />
                <input type="hidden" name="salty" value="0"></input>
                <input type="checkbox" name='salty' id='salty' ></input>
                <br/>
            </div>
            <div>
                <label htmlFor='image_url'>Image URL</label>
                <br />
                <input name='image_url' id='image_url' ></input>
                <br/>
            </div>
            <div className="mt-3">
                <input type='submit' value='Submit' />
            </div>
        </form>    
    )
}

export default NewRecipeForm;