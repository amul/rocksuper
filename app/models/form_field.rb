class FormField < ActiveRecord::Base
  belongs_to :element, {:foreign_key => "element_id"}
  attr_accessible :email_title, :message_success, :message_title, :name_title, :phone_title, :target_email, :element_id
end
