class Bear < ActiveRecord::Base
<<<<<<< HEAD
=======
	has_many :memories, dependent: :destroy
>>>>>>> b1e38a9611a04a7bd0969368249747aa5c26e9f7
	belongs_to :user
	validates_presence_of :name, :gender, :hunger, :happiness, :energy, :user_id
	validates_numericality_of :hunger, :happiness, :energy, :user_id
end