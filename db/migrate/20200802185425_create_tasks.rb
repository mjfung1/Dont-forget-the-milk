class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.boolean :completed, null: false
      t.integer :user_id, null: false
      t.integer :list_id
      t.date :due_date
      
      t.timestamps
    end
  end
end
