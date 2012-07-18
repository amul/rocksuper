class SlideshowImagesController < ApplicationController
  # GET /slideshow_images
  # GET /slideshow_images.json
  def index
    @slideshow_images = SlideshowImage.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @slideshow_images }
    end
  end

  # GET /slideshow_images/1
  # GET /slideshow_images/1.json
  def show
    @slideshow_image = SlideshowImage.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @slideshow_image }
    end
  end

  # GET /slideshow_images/new
  # GET /slideshow_images/new.json
  def new
    @slideshow_image = SlideshowImage.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @slideshow_image }
    end
  end

  # GET /slideshow_images/1/edit
  def edit
    @slideshow_image = SlideshowImage.find(params[:id])
  end

  # POST /slideshow_images
  # POST /slideshow_images.json
  def create
    @slideshow_image = SlideshowImage.new(params[:slideshow_image])

    respond_to do |format|
      if @slideshow_image.save
        format.html { 
          render :json => [@slideshow_image.to_jq_upload].to_json,
          :content_type => 'text/html',
          :layout => false
          #redirect_to @slideshow_image, notice: 'Slideshow image was successfully created.' 
        }
        format.json {  
          render :json => [@slideshow_image.to_jq_upload].to_json			
        }
        #format.json { render json: @slideshow_image, status: :created, location: @slideshow_image }
      else
        render :json => [{:error => "custom_failure"}], :status => 304
        #format.html { render action: "new" }
        #format.json { render json: @slideshow_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /slideshow_images/1
  # PUT /slideshow_images/1.json
  def update
    @slideshow_image = SlideshowImage.find(params[:id])

    respond_to do |format|
      if @slideshow_image.update_attributes(params[:slideshow_image])
        format.html { redirect_to @slideshow_image, notice: 'Slideshow image was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @slideshow_image.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /slideshow_images/1
  # DELETE /slideshow_images/1.json
  def destroy
    @slideshow_image = SlideshowImage.find(params[:id])
    @slideshow_image.destroy
    render :json => true

    #respond_to do |format|
    #  format.html { redirect_to slideshow_images_url }
    #  format.json { head :no_content }
    #end
  end
  
  def sort
    params[:slideshow_image].each_with_index do |id, index|
      SlideshowImage.update_all({:position => index+1}, {:id => id})
    end
    render :nothing => true
  end
  
end
