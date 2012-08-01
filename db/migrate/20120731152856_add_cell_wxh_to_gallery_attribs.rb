class AddCellWxhToGalleryAttribs < ActiveRecord::Migration
  def change
    add_column :gallery_attribs, :cell_width, :integer
    add_column :gallery_attribs, :cell_height, :integer
  end
end
