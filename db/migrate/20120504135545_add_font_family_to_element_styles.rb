class AddFontFamilyToElementStyles < ActiveRecord::Migration
  def change
    add_column :element_styles, :font_family, :string
  end
end
