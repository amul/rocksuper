class CreateGalleryAttribs < ActiveRecord::Migration
  def change
    create_table :gallery_attribs do |t|
      t.integer :col
      t.integer :row
      t.integer :margin
      t.integer :element_id

      t.timestamps
    end
    add_index("gallery_attribs", "element_id")
  end
end
