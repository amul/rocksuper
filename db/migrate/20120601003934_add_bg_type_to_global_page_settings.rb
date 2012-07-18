class AddBgTypeToGlobalPageSettings < ActiveRecord::Migration
  def change
    add_column :global_page_settings, :bg_type, :string
  end
end
