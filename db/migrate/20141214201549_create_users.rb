class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
        t.string :interest
    	t.string :color
        t.references :bear

    	t.timestamps
    end
  end
end
