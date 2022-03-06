class CreateSpells < ActiveRecord::Migration[6.1]
  def change
    create_table :spells do |t|
      t.string :spellname
      t.string :spelltype
      t.string :effect
      t.string :image
      t.integer :fp

      t.timestamps
    end
  end
end
