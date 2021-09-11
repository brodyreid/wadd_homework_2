class RecipeSerializer < ActiveModel::Serializer
    attributes(
        :id,
        :title,
        :story,
        :instructions,
        :serving_size,
        :spicy,
        :sweet,
        :salty,
        :created_at,
        :image_url,
    )

    belongs_to :user

    class UserSerializer < ActiveModel::Serializer
        attributes(
            :id,
            :full_name,
            :email,
        )
    end

    has_many :reviews

    class ReviewSerializer < ActiveModel::Serializer
        attributes(
            :id,
            :rating,
            :body,
            :created_at,
            :user_full_name,
        )   
        def user_full_name
            object.user&.full_name
        end
    end

    # def reviews
    #     object.reviews
    # end
end
