# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Task.destroy_all

demo11 = User.create!({first_name:'Guest1', last_name:'User1', username:'guest1', email:'guest1@user.com', password:'password1'})

Task.create!([
{title:'Watch Movie', completed:'true', user_id: demo11.id},
#   {title:'Exercise', completed:'false', user_id: demo.id},
#   {title:'Haircut', completed:'false', user_id: demo.id},
#   {title:'Complete Full Stack Project', completed:'false', user_id: demo.id},
#   {title:'Get a job!', completed:'false', user_id: demo.id},

])

Task.create!(title:'Watch Movie', completed:'true', user_id: 6)
Task.create!(title:'Exercise', completed:'false', user_id: 6)
Task.create!(title:'Haircut', completed:'false', user_id: 6)