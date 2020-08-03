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
require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
