class User < ActiveRecord::Base
	has_one :bear,  dependent: :destroy
	
	validates_presence_of :email
	validates_uniqueness_of :email
	has_secure_password

end