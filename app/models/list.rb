# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  title      :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord
    validates :title, presence: true
    

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    
    has_many :tasks,
        foreign_key: :list_id,
        class_name: :Task
end
