class AddImgPropertiesToElementStyles < ActiveRecord::Migration
  def change
    add_column :element_styles, :img_width, :integer
    add_column :element_styles, :img_height, :integer
    add_column :element_styles, :img_style, :string
  end
end
