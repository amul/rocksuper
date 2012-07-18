class AddBoxPropertiesToElementStyles < ActiveRecord::Migration
  def change
    add_column :element_styles, :background_style_g, :text
    add_column :element_styles, :border_style, :text
  end
end
