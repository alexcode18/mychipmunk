class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
<<<<<<< HEAD
    	t.string :email
    	t.string :password_digest
        t.string :interest
    	t.string :color
        t.references :bear
=======
    	t.string :parent_email
    	t.string :password_digest
    	t.string :child_name
    	t.string :child_gender
    	t.string :favorite_color

>>>>>>> b1e38a9611a04a7bd0969368249747aa5c26e9f7

    	t.timestamps
    end
  end
end
