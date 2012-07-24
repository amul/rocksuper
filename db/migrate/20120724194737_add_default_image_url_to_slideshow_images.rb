class AddDefaultImageUrlToSlideshowImages < ActiveRecord::Migration
  def change
    add_column :slideshow_images, :default_image_url, :text
  end
end
