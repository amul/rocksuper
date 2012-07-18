class AddElementIdToFormFields < ActiveRecord::Migration
  def change
    add_column :form_fields, :element_id, :integer
  end
end
