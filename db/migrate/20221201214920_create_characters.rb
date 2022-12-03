class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :review
      t.string :actor
      t.string :image_url

      t.timestamps
    end
  end
end
