class AlterElements < ActiveRecord::Migration
  def up
    rename_column("elements", "type", "elem_type")
  end

  def down
    rename_column("elements", "elem_type", "type")
  end
end
