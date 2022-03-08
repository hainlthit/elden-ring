class AddProfileIdToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :profile_id, :integer
  end
end
