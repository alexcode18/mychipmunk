class User < ActiveRecord::Base
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

end