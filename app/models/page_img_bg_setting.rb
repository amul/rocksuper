class PageImgBgSetting < ActiveRecord::Base
  belongs_to :global_page_setting, {:foreign_key => "global_page_setting_id"}
  attr_accessible :attachment, :color, :global_page_setting_id, :hor_alignment, :image, :repeat, :ver_alignment
  
  mount_uploader :image, PageBgImageUploader
end
