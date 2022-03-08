class AddImagesToClass < ActiveRecord::Migration[6.1]
  def change
    add_column :er_classes, :image, :string
  end
end
