class User < ActiveRecord::Base
  include BCrypt
  has_secure_password
  validates_presence_of :username, :email, :password
  validates :username, uniqueness: true
  validates :email, uniqueness: true

end
