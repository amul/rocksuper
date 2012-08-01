class ElementStyle < ActiveRecord::Base
  attr_accessible :element_id, :height, :left, :top, :width, :z_index, :bg_color, :border_radius, :padding, :font_family, :font_size, :letter_spacing, :line_height, :img_width, :img_height, :img_left, :img_top, :background_style_g, :border_style, :img_scale_type
  
  belongs_to :element, {:foreign_key => "element_id"}
  
  def self.find_by_element_id_func(elem_id)
    return ElementStyle.find_by_element_id(elem_id)
  end
  
  def self.create_along_element(elem_id)
    create! do | element_style |
      element_style.element_id = elem_id
    end
  end
end
