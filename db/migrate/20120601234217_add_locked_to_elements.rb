class AddLockedToElements < ActiveRecord::Migration
  def change
    add_column :elements, :locked, :boolean, :default => 0
  end
end
