require 'test_helper'

class SlideshowAttribsControllerTest < ActionController::TestCase
  setup do
    @slideshow_attrib = slideshow_attribs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:slideshow_attribs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create slideshow_attrib" do
    assert_difference('SlideshowAttrib.count') do
      post :create, slideshow_attrib: { autoplay: @slideshow_attrib.autoplay, caption: @slideshow_attrib.caption, font: @slideshow_attrib.font, interval: @slideshow_attrib.interval, pagination: @slideshow_attrib.pagination, prev_nex_arr: @slideshow_attrib.prev_nex_arr, transition: @slideshow_attrib.transition }
    end

    assert_redirected_to slideshow_attrib_path(assigns(:slideshow_attrib))
  end

  test "should show slideshow_attrib" do
    get :show, id: @slideshow_attrib
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @slideshow_attrib
    assert_response :success
  end

  test "should update slideshow_attrib" do
    put :update, id: @slideshow_attrib, slideshow_attrib: { autoplay: @slideshow_attrib.autoplay, caption: @slideshow_attrib.caption, font: @slideshow_attrib.font, interval: @slideshow_attrib.interval, pagination: @slideshow_attrib.pagination, prev_nex_arr: @slideshow_attrib.prev_nex_arr, transition: @slideshow_attrib.transition }
    assert_redirected_to slideshow_attrib_path(assigns(:slideshow_attrib))
  end

  test "should destroy slideshow_attrib" do
    assert_difference('SlideshowAttrib.count', -1) do
      delete :destroy, id: @slideshow_attrib
    end

    assert_redirected_to slideshow_attribs_path
  end
end
