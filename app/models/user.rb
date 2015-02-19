class User < ActiveRecord::Base
<<<<<<< HEAD
	has_one :bear,  dependent: :destroy
	
	validates_presence_of :email
	validates_uniqueness_of :email
	has_secure_password

	def self.authenticate(email, pass)
    user = where(email: email).first
    user && BCrypt::Password.new(user.password_digest) == pass ? user : nil
  end
 
  def password=(pass)
    return if pass.blank?
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

=======
	has_many :bears,  dependent: :destroy
	has_many :searches, dependent: :destroy
	
	validates_presence_of :parent_email, :child_name, :favorite_color
	validates_uniqueness_of :parent_email
	has_secure_password
>>>>>>> b1e38a9611a04a7bd0969368249747aa5c26e9f7
end