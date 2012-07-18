class GlobalPageSetting < ActiveRecord::Base
  belongs_to :user, {:foreign_key => "user_id"}
  has_one :page_img_bg_setting, :dependent => :destroy
  
  attr_accessible :bg_color, :page_width, :user_id, :bg_type, :canvas_bg_color, :texture_bg
  
  
end
