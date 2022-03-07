class CreateErClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :er_classes do |t|
      t.string :name
      t.integer :level
      t.string :info
      t.string :weapons

      t.timestamps
    end
  end
end
