class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
        t.string :title
        t.text :story
        t.text :instructions
        t.integer :serving_size
        t.boolean :spicy
        t.boolean :sweet
        t.boolean :salty
        t.string :image_url
      t.timestamps
    end
  end
end
