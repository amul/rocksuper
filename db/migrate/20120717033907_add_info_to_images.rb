class AddInfoToImages < ActiveRecord::Migration
  def change
    add_column :images, :description, :text
    add_column :images, :link_type, :string
  end
end
