class AddElementIdToSlideshowAttribs < ActiveRecord::Migration
  def change
    add_column :slideshow_attribs, :element_id, :integer
    add_index("slideshow_attribs", "element_id")
  end
end
