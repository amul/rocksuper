class CreateElements < ActiveRecord::Migration
  def change
    create_table :elements do |t|
      t.integer :page_id
      t.string :type
      t.text :content

      t.timestamps
    end
  end
end
