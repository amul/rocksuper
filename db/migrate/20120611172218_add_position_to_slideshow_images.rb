class AddPositionToSlideshowImages < ActiveRecord::Migration
  def change
    add_column :slideshow_images, :position, :integer
  end
end
