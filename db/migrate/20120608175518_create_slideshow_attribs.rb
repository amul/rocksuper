class CreateSlideshowAttribs < ActiveRecord::Migration
  def change
    create_table :slideshow_attribs do |t|
      t.string :transition
      t.integer :interval
      t.boolean :autoplay
      t.boolean :caption
      t.boolean :pagination
      t.string :prev_nex_arr
      t.string :font

      t.timestamps
    end
  end
end
