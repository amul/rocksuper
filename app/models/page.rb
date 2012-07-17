class Page < ActiveRecord::Base
  
  belongs_to :user, {:foreign_key => "user_id"}
  has_many :elements, :dependent => :destroy
  has_many :element_styles, :through => :elements, :dependent => :destroy
  has_many :images, :through => :elements, :dependent => :destroy
  has_many :slideshow_attribs, :through => :elements, :dependent => :destroy
  has_many :slideshow_images, :through => :elements, :dependent => :destroy
  has_many :gallery_attribs, :through => :elements, :dependent => :destroy
  has_many :form_fields, :through => :elements, :dependent => :destroy
  
  
  scope :active, where(:active => true)
  scope :recent, order("created_at desc")
  
  attr_accessible :active, :height, :user_id, :title
  
end
