class AddLeftTopImgToElementStyles < ActiveRecord::Migration
  def change
    add_column :element_styles, :img_left, :integer
    add_column :element_styles, :img_top, :integer
  end
end
