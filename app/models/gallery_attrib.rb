class GalleryAttrib < ActiveRecord::Base
  
  belongs_to :element, {:foreign_key => "element_id"}
  
  attr_accessible :col, :element_id, :margin, :row
  
end
