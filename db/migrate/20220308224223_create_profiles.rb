class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :username
      t.string :color1
      t.string :color2

      t.timestamps
    end
  end
end
