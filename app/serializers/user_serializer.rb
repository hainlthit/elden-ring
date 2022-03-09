class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  belongs_to :profile
  has_many :comments
end
