class CreateElementStyles < ActiveRecord::Migration
  def change
    create_table :element_styles do |t|
      t.integer :element_id
      t.integer :width
      t.integer :height
      t.integer :left
      t.integer :top

      t.timestamps
    end
  end
end
