class SpellSerializer < ActiveModel::Serializer
  attributes :id, :spellname, :spelltype, :effect, :image, :fp
end
