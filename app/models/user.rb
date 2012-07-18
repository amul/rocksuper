class User < ActiveRecord::Base
  
  has_many :pages, :dependent => :destroy
  has_many :elements, :through => :pages, :dependent => :destroy
  has_one :global_page_setting, :dependent => :destroy
  
  attr_accessible :email, :left, :top
  
  def self.from_omniauth(auth)
    find_by_provider_and_uid(auth["provider"], auth["uid"]) || create_with_omniauth(auth)
  end
  
  def self.create_with_omniauth(auth)
    create! do | user |
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]      
      #if auth["provider"] == "facebook"
      #if auth["info"]["email"].present?
        user.email = auth["info"]["email"]
      #end
    end
  end
  
end
