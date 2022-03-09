class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :is_admin
  belongs_to :profile
  has_many :comments
end
