class AddLineHeightToElementStyles < ActiveRecord::Migration
  def change
    add_column :element_styles, :line_height, :integer
    add_column :element_styles, :letter_spacing, :integer
  end
end
