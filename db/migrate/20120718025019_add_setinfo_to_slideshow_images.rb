class AddSetinfoToSlideshowImages < ActiveRecord::Migration
  def change
    add_column :slideshow_images, :link_type, :string
    add_column :slideshow_images, :link_text, :text
    add_column :slideshow_images, :link_target, :string
  end
end
