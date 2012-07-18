class Element < ActiveRecord::Base  
  belongs_to :page, {:foreign_key => "page_id"}
  has_one :element_style, :dependent => :destroy
  has_one :slideshow_attrib, :dependent => :destroy
  has_many :images, :dependent => :destroy
  has_many :slideshow_images, :dependent => :destroy
  has_one :gallery_attrib, :dependent => :destroy
  has_one :form_field, :dependent => :destroy
  
  attr_accessible :content, :page_id, :elem_type, :locked
  
end
