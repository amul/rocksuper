class AddLinkPropertyToImages < ActiveRecord::Migration
  def change
    add_column :images, :link_type, :string
    add_column :images, :link_text, :text
    add_column :images, :link_target, :string
  end
end
