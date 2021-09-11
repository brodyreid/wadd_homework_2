# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Review.destroy_all
Recipe.destroy_all

PASSWORD='supersecret'

superuser = User.create(
    first_name: 'Jon',
    last_name: 'Snow',
    email: 'js@winterfell.gov',
    password: PASSWORD,
)


10.times do
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        password: PASSWORD,
    )

end

users = User.all

15.times do
    Recipe.create(
        title: Faker::Food.dish,
        story: Faker::Movies::HitchhikersGuideToTheGalaxy.quote,
        instructions: Faker::Food.description,
        serving_size: [1,2,3,4].sample,
        spicy: [true, false].sample,
        sweet: [true, false].sample,
        salty: [true, false].sample,
        image_url: Faker::Avatar.image,
        created_at: Faker::Date.backward(days:365 * 2),
        updated_at: Faker::Date.backward(days:365 * 2),
        user: users.sample,
    )
end

recipes = Recipe.all

25.times do
    Review.create(
        rating: [1,2,3,4,5].sample,
        body: Faker::Quote.famous_last_words,
        created_at: Faker::Date.backward(days:365 * 2),
        updated_at: Faker::Date.backward(days:365 * 2),
        recipe: recipes.sample,
        user: users.sample,
    )
end

reviews = Review.all

puts "Generated #{users.count} users."
puts "Generated #{recipes.count} recipes."
puts "Generated #{reviews.count} reviews."