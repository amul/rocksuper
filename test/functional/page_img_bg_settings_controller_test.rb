require 'test_helper'

class PageImgBgSettingsControllerTest < ActionController::TestCase
  setup do
    @page_img_bg_setting = page_img_bg_settings(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:page_img_bg_settings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create page_img_bg_setting" do
    assert_difference('PageImgBgSetting.count') do
      post :create, :page_img_bg_setting => { :attachment => @page_img_bg_setting.attachment, :color => @page_img_bg_setting.color, :global_page_setting_id => @page_img_bg_setting.global_page_setting_id, :hor_alignment => @page_img_bg_setting.hor_alignment, :image => @page_img_bg_setting.image, :repeat => @page_img_bg_setting.repeat, :ver_alignment => @page_img_bg_setting.ver_alignment }
    end

    assert_redirected_to page_img_bg_setting_path(assigns(:page_img_bg_setting))
  end

  test "should show page_img_bg_setting" do
    get :show, :id => @page_img_bg_setting
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @page_img_bg_setting
    assert_response :success
  end

  test "should update page_img_bg_setting" do
    put :update, :id => @page_img_bg_setting, :page_img_bg_setting => { :attachment => @page_img_bg_setting.attachment, :color => @page_img_bg_setting.color, :global_page_setting_id => @page_img_bg_setting.global_page_setting_id, :hor_alignment => @page_img_bg_setting.hor_alignment, :image => @page_img_bg_setting.image, :repeat => @page_img_bg_setting.repeat, :ver_alignment => @page_img_bg_setting.ver_alignment }
    assert_redirected_to page_img_bg_setting_path(assigns(:page_img_bg_setting))
  end

  test "should destroy page_img_bg_setting" do
    assert_difference('PageImgBgSetting.count', -1) do
      delete :destroy, :id => @page_img_bg_setting
    end

    assert_redirected_to page_img_bg_settings_path
  end
end
