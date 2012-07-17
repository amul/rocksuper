class AddCanvasBgColorToGlobalPageSettings < ActiveRecord::Migration
  def change
    add_column :global_page_settings, :canvas_bg_color, :string
  end
end
