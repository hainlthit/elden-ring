class SkillSerializer < ActiveModel::Serializer
  attributes :id, :skill_name, :skill_type, :equipment, :fp, :effect
end
