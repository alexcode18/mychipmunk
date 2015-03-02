class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :email
    	t.string :password_digest
        t.string :interest
    	t.string :color
        t.references :bear

    	t.timestamps
    end
  end
end
