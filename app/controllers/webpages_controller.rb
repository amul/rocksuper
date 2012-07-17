class WebpagesController < ApplicationController
  
  # GET /pages
  # GET /pages.json
  def index
    @user = User.find(session[:user_id])
    @pages = @user.pages
    @page = @user.pages.first
    @elements = @page.elements
    
    redirect_to(edit_webpage_path(@page))
    return
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @page }
    end
  end
  
  # GET /pages/1
  # GET /pages/1.json
  def show
    @user = User.find(session[:user_id])
    @page = @user.pages.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @page }
    end
  end
  
  
  def edit
    @user = User.find(session[:user_id])
    @pages = @user.pages
    @page = @pages.find(params[:id])
    @elements = @page.elements.includes(:element_style, :images)
  end
  
  def update
    @page = Page.find(params[:id])

    respond_to do |format|
      if @page.update_attributes(params[:page])
        format.html { redirect_to @page, :notice => 'Page was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @page.errors, :status => :unprocessable_entity }
      end
    end
  end
  
end
