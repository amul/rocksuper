class AlterBgColorToElementStyles < ActiveRecord::Migration
  def up
    change_column("element_styles", "bg_color", :text)
  end

  def down
    change_column("element_styles", "bg_color", :string)
  end
end
