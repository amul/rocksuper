class PageImgBgSettingsController < ApplicationController
  # GET /page_img_bg_settings
  # GET /page_img_bg_settings.json
  def index
    @page_img_bg_settings = PageImgBgSetting.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @page_img_bg_settings }
    end
  end

  # GET /page_img_bg_settings/1
  # GET /page_img_bg_settings/1.json
  def show
    @page_img_bg_setting = PageImgBgSetting.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @page_img_bg_setting }
    end
  end

  # GET /page_img_bg_settings/new
  # GET /page_img_bg_settings/new.json
  def new
    @page_img_bg_setting = PageImgBgSetting.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @page_img_bg_setting }
    end
  end

  # GET /page_img_bg_settings/1/edit
  def edit
    @page_img_bg_setting = PageImgBgSetting.find(params[:id])
  end

  # POST /page_img_bg_settings
  # POST /page_img_bg_settings.json
  def create
    @page_img_bg_setting = PageImgBgSetting.new(params[:page_img_bg_setting])

    respond_to do |format|
      if @page_img_bg_setting.save
        format.html { redirect_to @page_img_bg_setting, :notice => 'Page img bg setting was successfully created.' }
        format.json { render :json => @page_img_bg_setting, :status => :created, :location => @page_img_bg_setting }
      else
        format.html { render :action => "new" }
        format.json { render :json => @page_img_bg_setting.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /page_img_bg_settings/1
  # PUT /page_img_bg_settings/1.json
  def update
    @page_img_bg_setting = PageImgBgSetting.find(params[:id])

    respond_to do |format|
      if @page_img_bg_setting.update_attributes(params[:page_img_bg_setting])
        format.html { redirect_to @page_img_bg_setting, :notice => 'Page img bg setting was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @page_img_bg_setting.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /page_img_bg_settings/1
  # DELETE /page_img_bg_settings/1.json
  def destroy
    @page_img_bg_setting = PageImgBgSetting.find(params[:id])
    @page_img_bg_setting.destroy

    respond_to do |format|
      format.html { redirect_to page_img_bg_settings_url }
      format.json { head :no_content }
    end
  end
end
