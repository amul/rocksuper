class GalleryAttribsController < ApplicationController
  # GET /gallery_attribs
  # GET /gallery_attribs.json
  def index
    @gallery_attribs = GalleryAttrib.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @gallery_attribs }
    end
  end

  # GET /gallery_attribs/1
  # GET /gallery_attribs/1.json
  def show
    @gallery_attrib = GalleryAttrib.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @gallery_attrib }
    end
  end

  # GET /gallery_attribs/new
  # GET /gallery_attribs/new.json
  def new
    @gallery_attrib = GalleryAttrib.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @gallery_attrib }
    end
  end

  # GET /gallery_attribs/1/edit
  def edit
    @gallery_attrib = GalleryAttrib.find(params[:id])
  end

  # POST /gallery_attribs
  # POST /gallery_attribs.json
  def create
    @gallery_attrib = GalleryAttrib.new(params[:gallery_attrib])

    respond_to do |format|
      if @gallery_attrib.save
        format.html { redirect_to @gallery_attrib, notice: 'Gallery attrib was successfully created.' }
        format.json { render json: @gallery_attrib, status: :created, location: @gallery_attrib }
      else
        format.html { render action: "new" }
        format.json { render json: @gallery_attrib.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /gallery_attribs/1
  # PUT /gallery_attribs/1.json
  def update
    @gallery_attrib = GalleryAttrib.find(params[:id])

    respond_to do |format|
      if @gallery_attrib.update_attributes(params[:gallery_attrib])
        format.html { redirect_to @gallery_attrib, notice: 'Gallery attrib was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @gallery_attrib.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /gallery_attribs/1
  # DELETE /gallery_attribs/1.json
  def destroy
    @gallery_attrib = GalleryAttrib.find(params[:id])
    @gallery_attrib.destroy

    respond_to do |format|
      format.html { redirect_to gallery_attribs_url }
      format.json { head :no_content }
    end
  end
end
