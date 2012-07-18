class CreateFormFields < ActiveRecord::Migration
  def change
    create_table :form_fields do |t|
      t.string :target_email
      t.text :message_success
      t.string :name_title
      t.string :email_title
      t.string :phone_title
      t.text :message_title

      t.timestamps
    end
  end
end
