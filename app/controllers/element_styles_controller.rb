class ElementStylesController < ApplicationController
  # GET /element_styles
  # GET /element_styles.json
  def index
    @element_styles = ElementStyle.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render :json => @element_styles }
    end
  end

  # GET /element_styles/1
  # GET /element_styles/1.json
  def show
    @element_style = ElementStyle.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render :json => @element_style }
    end
  end

  # GET /element_styles/new
  # GET /element_styles/new.json
  def new
    @element_style = ElementStyle.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render :json => @element_style }
    end
  end

  # GET /element_styles/1/edit
  def edit
    @element_style = ElementStyle.find(params[:id])
  end

  # POST /element_styles
  # POST /element_styles.json
  def create
    @element_style = ElementStyle.new(params[:element_style])

    respond_to do |format|
      if @element_style.save
        format.html { redirect_to @element_style, :notice => 'Element style was successfully created.' }
        format.json { render :json => @element_style, :status => :created, :location => @element_style }
      else
        format.html { render :action => "new" }
        format.json { render :json => @element_style.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /element_styles/1
  # PUT /element_styles/1.json
  def update
    @element_style = ElementStyle.find(params[:id])

    respond_to do |format|
      if @element_style.update_attributes(params[:element_style])
        format.html { redirect_to @element_style, :notice => 'Element style was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render :action => "edit" }
        format.json { render :json => @element_style.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /element_styles/1
  # DELETE /element_styles/1.json
  def destroy
    @element_style = ElementStyle.find(params[:id])
    @element_style.destroy

    respond_to do |format|
      format.html { redirect_to element_styles_url }
      format.json { head :no_content }
    end
  end
end
