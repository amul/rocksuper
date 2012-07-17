require 'test_helper'

class GlobalPageSettingsControllerTest < ActionController::TestCase
  setup do
    @global_page_setting = global_page_settings(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:global_page_settings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create global_page_setting" do
    assert_difference('GlobalPageSetting.count') do
      post :create, :global_page_setting => { :bg_color => @global_page_setting.bg_color, :page_width => @global_page_setting.page_width, :user_id => @global_page_setting.user_id }
    end

    assert_redirected_to global_page_setting_path(assigns(:global_page_setting))
  end

  test "should show global_page_setting" do
    get :show, :id => @global_page_setting
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @global_page_setting
    assert_response :success
  end

  test "should update global_page_setting" do
    put :update, :id => @global_page_setting, :global_page_setting => { :bg_color => @global_page_setting.bg_color, :page_width => @global_page_setting.page_width, :user_id => @global_page_setting.user_id }
    assert_redirected_to global_page_setting_path(assigns(:global_page_setting))
  end

  test "should destroy global_page_setting" do
    assert_difference('GlobalPageSetting.count', -1) do
      delete :destroy, :id => @global_page_setting
    end

    assert_redirected_to global_page_settings_path
  end
end
