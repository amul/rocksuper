class GlobalPageSettingsController < ApplicationController
  # GET /global_page_settings
  # GET /global_page_settings.json
  def index
    @global_page_settings = GlobalPageSetting.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @global_page_settings }
    end
  end

  # GET /global_page_settings/1
  # GET /global_page_settings/1.json
  def show
    @global_page_setting = GlobalPageSetting.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @global_page_setting }
    end
  end

  # GET /global_page_settings/new
  # GET /global_page_settings/new.json
  def new
    @global_page_setting = GlobalPageSetting.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @global_page_setting }
    end
  end

  # GET /global_page_settings/1/edit
  def edit
    @global_page_setting = GlobalPageSetting.find(params[:id])
  end

  # POST /global_page_settings
  # POST /global_page_settings.json
  def create
    @global_page_setting = GlobalPageSetting.new(params[:global_page_setting])

    respond_to do |format|
      if @global_page_setting.save
        format.html { redirect_to @global_page_setting, :notice => 'Global page setting was successfully created.' }
        format.json { render :json => @global_page_setting, :status => :created, :location => @global_page_setting }
      else
        format.html { render :action => "new" }
        format.json { render :json => @global_page_setting.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /global_page_settings/1
  # PUT /global_page_settings/1.json
  def update
    @global_page_setting = GlobalPageSetting.find(params[:id])

    respond_to do |format|
      if @global_page_setting.update_attributes(params[:global_page_setting])
        format.html { redirect_to @global_page_setting, :notice => 'Global page setting was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @global_page_setting.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /global_page_settings/1
  # DELETE /global_page_settings/1.json
  def destroy
    @global_page_setting = GlobalPageSetting.find(params[:id])
    @global_page_setting.destroy

    respond_to do |format|
      format.html { redirect_to global_page_settings_url }
      format.json { head :no_content }
    end
  end
end
