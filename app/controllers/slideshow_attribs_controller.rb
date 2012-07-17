class SlideshowAttribsController < ApplicationController
  # GET /slideshow_attribs
  # GET /slideshow_attribs.json
  def index
    @slideshow_attribs = SlideshowAttrib.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @slideshow_attribs }
    end
  end

  # GET /slideshow_attribs/1
  # GET /slideshow_attribs/1.json
  def show
    @slideshow_attrib = SlideshowAttrib.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @slideshow_attrib }
    end
  end

  # GET /slideshow_attribs/new
  # GET /slideshow_attribs/new.json
  def new
    @slideshow_attrib = SlideshowAttrib.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @slideshow_attrib }
    end
  end

  # GET /slideshow_attribs/1/edit
  def edit
    @slideshow_attrib = SlideshowAttrib.find(params[:id])
  end

  # POST /slideshow_attribs
  # POST /slideshow_attribs.json
  def create
    @slideshow_attrib = SlideshowAttrib.new(params[:slideshow_attrib])

    respond_to do |format|
      if @slideshow_attrib.save
        format.html { redirect_to @slideshow_attrib, notice: 'Slideshow attrib was successfully created.' }
        format.json { render json: @slideshow_attrib, status: :created, location: @slideshow_attrib }
      else
        format.html { render action: "new" }
        format.json { render json: @slideshow_attrib.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /slideshow_attribs/1
  # PUT /slideshow_attribs/1.json
  def update
    @slideshow_attrib = SlideshowAttrib.find(params[:id])

    respond_to do |format|
      if @slideshow_attrib.update_attributes(params[:slideshow_attrib])
        format.html { redirect_to @slideshow_attrib, notice: 'Slideshow attrib was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @slideshow_attrib.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /slideshow_attribs/1
  # DELETE /slideshow_attribs/1.json
  def destroy
    @slideshow_attrib = SlideshowAttrib.find(params[:id])
    @slideshow_attrib.destroy

    respond_to do |format|
      format.html { redirect_to slideshow_attribs_url }
      format.json { head :no_content }
    end
  end
end
