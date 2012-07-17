class SlideshowAttrib < ActiveRecord::Base
  belongs_to :element, {:foreign_key => "element_id"}
  attr_accessible :autoplay, :caption, :font, :interval, :pagination, :prev_nex_arr, :transition, :element_id
end
