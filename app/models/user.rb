class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
	has_one :bear,  dependent: :destroy
	
	validates_presence_of :email
	validates_uniqueness_of :email
	# has_secure_password

end