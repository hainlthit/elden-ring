class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :comments
  belongs_to :profile
  has_many :comments
end
