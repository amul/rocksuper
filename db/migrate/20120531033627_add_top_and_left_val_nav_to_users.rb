class AddTopAndLeftValNavToUsers < ActiveRecord::Migration
  def change
    add_column :users, :top, :integer
    add_column :users, :left, :integer
  end
end
