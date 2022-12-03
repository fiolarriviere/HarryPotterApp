class ChangeReviewToText < ActiveRecord::Migration[7.0]
  def change
    change_column :characters, :review, :text
  end
end
