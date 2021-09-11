class Api::V1::RecipesController < Api::ApplicationController
    before_action :find_recipe, only: [:show, :destroy, :update]
    before_action :authenticate_user!, only: [:create, :destroy, :update]

    def index
        recipes = Recipe.order(id: :desc)
        render(json: recipes, each_serializer: RecipeSerializer)
    end

    def show
        render(json: @recipe, each_serializer: RecipeSerializer)
    end

    def create
        recipe = Recipe.new recipe_params
        recipe.user = current_user

        if recipe.save
            render json: { id: recipe.id }
        else
            render(
                json: { errors: recipe.errors.messages },
                status: 422,
            )
        end
    end

    def update
        if @recipe.update recipe_params
            render json: { id: @recipe.id }
        else
            render(
                json: { errors: @recipe.errors.messages },
                status: 422,
            )
        end
    end

    def destroy
        if @recipt || @recipe.destroy
            head :ok

        else
            head :bad_request
        end
    end

    private

    def find_recipe
        @recipe = Recipe.find params[:id]
    end

    def recipe_params
        params.require(:recipe).permit(:title, :story, :instructions, :serving_size, :spicy, :sweet, :salty, :image_url)
    end
end


