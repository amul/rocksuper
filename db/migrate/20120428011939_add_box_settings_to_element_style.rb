class AddBoxSettingsToElementStyle < ActiveRecord::Migration
  def change
    add_column :element_styles, :bg_color, :string
    add_column :element_styles, :border_radius, :integer
    add_column :element_styles, :padding, :string
  end
end
