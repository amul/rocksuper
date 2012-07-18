require 'test_helper'

class SlideshowImagesControllerTest < ActionController::TestCase
  setup do
    @slideshow_image = slideshow_images(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:slideshow_images)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create slideshow_image" do
    assert_difference('SlideshowImage.count') do
      post :create, slideshow_image: { caption: @slideshow_image.caption, element_id: @slideshow_image.element_id, image: @slideshow_image.image }
    end

    assert_redirected_to slideshow_image_path(assigns(:slideshow_image))
  end

  test "should show slideshow_image" do
    get :show, id: @slideshow_image
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @slideshow_image
    assert_response :success
  end

  test "should update slideshow_image" do
    put :update, id: @slideshow_image, slideshow_image: { caption: @slideshow_image.caption, element_id: @slideshow_image.element_id, image: @slideshow_image.image }
    assert_redirected_to slideshow_image_path(assigns(:slideshow_image))
  end

  test "should destroy slideshow_image" do
    assert_difference('SlideshowImage.count', -1) do
      delete :destroy, id: @slideshow_image
    end

    assert_redirected_to slideshow_images_path
  end
end
