class Spell < ApplicationRecord

    validates :spellname, presence: true
end
