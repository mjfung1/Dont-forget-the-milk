# == Schema Information
#
# Table name: tasks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  completed  :boolean          not null
#  user_id    :integer          not null
#  list_id    :integer
#  due_date   :date
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Task < ApplicationRecord
  validates :title, presence: true
  validates :completed, inclusion: { in: [true, false]}

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :list,
    foreign_key: :list_id,
    class_name: :List,
    optional: true
end


    
