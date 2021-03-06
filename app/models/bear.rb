class Bear < ActiveRecord::Base
	belongs_to :user
	validates_presence_of :name, :gender, :hunger, :happiness, :energy, :user_id
	validates_numericality_of :hunger, :happiness, :energy, :user_id
end