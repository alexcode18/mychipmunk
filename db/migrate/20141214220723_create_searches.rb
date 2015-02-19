class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
    	t.string :keyword
    	t.belongs_to :user

    	t.timestamps
    end
  end
end
