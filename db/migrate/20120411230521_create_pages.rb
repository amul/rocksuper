class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.integer :user_id
      t.boolean :active
      t.integer :height

      t.timestamps
    end
    add_index :pages, :user_id
  end
end
