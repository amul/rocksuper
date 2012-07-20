class AlterCanvasBgColorTypeToGlobalPageSettings < ActiveRecord::Migration
  def up
    change_column("global_page_settings", "canvas_bg_color", :text)
  end

  def down
    change_column("global_page_settings", "canvas_bg_color", :string)
  end
end
