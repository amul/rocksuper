class PublicController < ApplicationController
  def index
    if current_user
      redirect_to :controller => 'webpages', :action => 'index'
    end
  end
end
