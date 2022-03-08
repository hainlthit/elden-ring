class ErClassSerializer < ActiveModel::Serializer
  attributes :id, :name, :level, :info, :weapons, :image
end
