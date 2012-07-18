class CreateGlobalPageSettings < ActiveRecord::Migration
  def change
    create_table :global_page_settings do |t|
      t.integer :user_id
      t.integer :page_width
      t.string :bg_color

      t.timestamps
    end
  end
end
