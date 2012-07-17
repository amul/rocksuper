class CreatePageImgBgSettings < ActiveRecord::Migration
  def change
    create_table :page_img_bg_settings do |t|
      t.integer :global_page_setting_id
      t.string :color
      t.string :hor_alignment
      t.string :ver_alignment
      t.string :repeat
      t.string :attachment
      t.string :image

      t.timestamps
    end
  end
end
