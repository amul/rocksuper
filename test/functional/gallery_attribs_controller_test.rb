require 'test_helper'

class GalleryAttribsControllerTest < ActionController::TestCase
  setup do
    @gallery_attrib = gallery_attribs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:gallery_attribs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create gallery_attrib" do
    assert_difference('GalleryAttrib.count') do
      post :create, gallery_attrib: { col: @gallery_attrib.col, element_id: @gallery_attrib.element_id, margin: @gallery_attrib.margin, row: @gallery_attrib.row }
    end

    assert_redirected_to gallery_attrib_path(assigns(:gallery_attrib))
  end

  test "should show gallery_attrib" do
    get :show, id: @gallery_attrib
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @gallery_attrib
    assert_response :success
  end

  test "should update gallery_attrib" do
    put :update, id: @gallery_attrib, gallery_attrib: { col: @gallery_attrib.col, element_id: @gallery_attrib.element_id, margin: @gallery_attrib.margin, row: @gallery_attrib.row }
    assert_redirected_to gallery_attrib_path(assigns(:gallery_attrib))
  end

  test "should destroy gallery_attrib" do
    assert_difference('GalleryAttrib.count', -1) do
      delete :destroy, id: @gallery_attrib
    end

    assert_redirected_to gallery_attribs_path
  end
end
