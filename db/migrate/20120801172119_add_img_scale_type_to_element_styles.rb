class AddImgScaleTypeToElementStyles < ActiveRecord::Migration
  def change
    add_column :element_styles, :img_scale_type, :string
  end
end
