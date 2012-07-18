class AddDescriptionToSlideshowImages < ActiveRecord::Migration
  def change
    add_column :slideshow_images, :description, :text
  end
end
