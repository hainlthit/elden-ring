class AddImageToSkill < ActiveRecord::Migration[6.1]
  def change
    add_column :skills, :image, :string
  end
end
