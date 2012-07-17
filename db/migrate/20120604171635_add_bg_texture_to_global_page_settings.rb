class AddBgTextureToGlobalPageSettings < ActiveRecord::Migration
  def change
    add_column :global_page_settings, :texture_bg, :string
  end
end
