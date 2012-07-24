class SlideshowImage < ActiveRecord::Base
  include Rails.application.routes.url_helpers
  belongs_to :element, {:foreign_key => "element_id"}  

  attr_accessible :caption, :element_id, :image, :link_type, :link_text, :link_target, :description, :default_image_url
  
  mount_uploader :image, SlideshowImageUploader
  
  def self.image_dim_width(filepath)
    @image ||= Magick::Image.read(filepath).first.columns
  end
  
  def self.image_dim_height(filepath)
    @image ||= Magick::Image.read(filepath).first.rows
  end
	
  def to_jq_upload
  {
    "name" => read_attribute(:image),
    "size" => image.size,
    "url" => image.url,
    "thumbnail_url" => image.thumb.url,
    "delete_url" => image_path(:id => id),
    "delete_type" => "DELETE" 
   }
  end
  
end
