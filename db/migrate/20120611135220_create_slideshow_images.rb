class CreateSlideshowImages < ActiveRecord::Migration
  def change
    create_table :slideshow_images do |t|
      t.string :caption
      t.string :image
      t.integer :element_id

      t.timestamps
    end
    add_index("slideshow_images", "element_id")
    add_index("slideshow_images", "caption")
  end
end
