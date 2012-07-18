class AddZindexToElementStyle < ActiveRecord::Migration
  def change
    add_column :element_styles, :z_index, :integer
  end
end
