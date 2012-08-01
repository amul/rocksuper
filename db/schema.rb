# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120801172119) do

  create_table "element_styles", :force => true do |t|
    t.integer  "element_id"
    t.integer  "width"
    t.integer  "height"
    t.integer  "left"
    t.integer  "top"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.integer  "z_index"
    t.text     "bg_color"
    t.integer  "border_radius"
    t.string   "padding"
    t.string   "font_family"
    t.integer  "line_height"
    t.integer  "letter_spacing"
    t.integer  "font_size"
    t.integer  "img_width"
    t.integer  "img_height"
    t.string   "img_style"
    t.integer  "img_left"
    t.integer  "img_top"
    t.text     "background_style_g"
    t.text     "border_style"
    t.string   "img_scale_type"
  end

  create_table "elements", :force => true do |t|
    t.integer  "page_id"
    t.string   "elem_type"
    t.text     "content"
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
    t.boolean  "locked",     :default => false
  end

  create_table "form_fields", :force => true do |t|
    t.string   "target_email"
    t.text     "message_success"
    t.string   "name_title"
    t.string   "email_title"
    t.string   "phone_title"
    t.text     "message_title"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.integer  "element_id"
  end

  create_table "gallery_attribs", :force => true do |t|
    t.integer  "col"
    t.integer  "row"
    t.integer  "margin"
    t.integer  "element_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.integer  "cell_width"
    t.integer  "cell_height"
  end

  add_index "gallery_attribs", ["element_id"], :name => "index_gallery_attribs_on_element_id"

  create_table "global_page_settings", :force => true do |t|
    t.integer  "user_id"
    t.integer  "page_width"
    t.string   "bg_color"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
    t.string   "bg_type"
    t.text     "canvas_bg_color"
    t.string   "texture_bg"
    t.text     "gradient_bg"
    t.string   "gb_type_pageWrap"
  end

  create_table "identities", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "images", :force => true do |t|
    t.string   "caption"
    t.string   "image"
    t.integer  "element_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.text     "description"
    t.string   "link_type"
    t.text     "link_text"
    t.string   "link_target"
  end

  add_index "images", ["element_id"], :name => "index_images_on_element_id"

  create_table "page_img_bg_settings", :force => true do |t|
    t.integer  "global_page_setting_id"
    t.string   "color"
    t.string   "hor_alignment"
    t.string   "ver_alignment"
    t.string   "repeat"
    t.string   "attachment"
    t.string   "image"
    t.datetime "created_at",             :null => false
    t.datetime "updated_at",             :null => false
  end

  create_table "pages", :force => true do |t|
    t.integer  "user_id"
    t.boolean  "active"
    t.integer  "height"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "title"
  end

  add_index "pages", ["user_id"], :name => "index_pages_on_user_id"

  create_table "slideshow_attribs", :force => true do |t|
    t.string   "transition"
    t.integer  "interval"
    t.boolean  "autoplay"
    t.boolean  "caption"
    t.boolean  "pagination"
    t.string   "prev_nex_arr"
    t.string   "font"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.integer  "element_id"
  end

  add_index "slideshow_attribs", ["element_id"], :name => "index_slideshow_attribs_on_element_id"

  create_table "slideshow_images", :force => true do |t|
    t.string   "caption"
    t.string   "image"
    t.integer  "element_id"
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
    t.integer  "position"
    t.string   "link_type"
    t.text     "link_text"
    t.string   "link_target"
    t.text     "description"
    t.text     "default_image_url"
  end

  add_index "slideshow_images", ["caption"], :name => "index_slideshow_images_on_caption"
  add_index "slideshow_images", ["element_id"], :name => "index_slideshow_images_on_element_id"

  create_table "users", :force => true do |t|
    t.string   "username"
    t.string   "password"
    t.string   "email"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "provider"
    t.string   "uid"
    t.string   "name"
    t.integer  "top"
    t.integer  "left"
  end

end
