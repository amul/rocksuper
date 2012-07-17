class AddFontSizeToElementStyles < ActiveRecord::Migration
  def change
    add_column :element_styles, :font_size, :integer
  end
end
