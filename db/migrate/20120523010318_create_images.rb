class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :caption
      t.string :image
      t.integer :element_id

      t.timestamps
    end
    add_index("images", "element_id")
  end
end
