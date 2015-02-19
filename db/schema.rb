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
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 20141214201549) do
=======
ActiveRecord::Schema.define(version: 20141218171719) do
>>>>>>> b1e38a9611a04a7bd0969368249747aa5c26e9f7

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bears", force: true do |t|
    t.string   "name"
    t.string   "gender"
    t.integer  "hunger"
    t.integer  "happiness"
    t.integer  "energy"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

<<<<<<< HEAD
  create_table "users", force: true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.string   "interest"
    t.string   "color"
    t.integer  "bear_id"
=======
  create_table "memories", force: true do |t|
    t.string   "category"
    t.string   "image_url"
    t.integer  "bear_id"
    t.integer  "search_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "keyword"
  end

  create_table "searches", force: true do |t|
    t.string   "keyword"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "parent_email"
    t.string   "password_digest"
    t.string   "child_name"
    t.string   "child_gender"
    t.string   "favorite_color"
>>>>>>> b1e38a9611a04a7bd0969368249747aa5c26e9f7
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
