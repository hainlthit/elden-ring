class CommentSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id
  belongs_to :user
end
