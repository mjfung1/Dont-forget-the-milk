# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Task.destroy_all
List.destroy_all

user = User.create!({first_name:'demo', last_name:'user', username:'demo', email:'demo@user.com', password:'nothunter12'})

lists = List.create!([
  {title:'Personal', user_id: user.id},
  {title:'Work', user_id: user.id},
  {title:'Groceries', user_id: user.id}
])

tasks = Task.create!([
  {title:'Watch Movie', completed:'true', user_id: user.id, list_id: lists.first.id},
  {title:'Exercise', completed:'false', user_id: user.id, list_id: lists.first.id},
  {title:'Get bologna', completed:'false', user_id: user.id, list_id: lists.last.id},
  {title:'Complete Full Stack Project', completed:'false', user_id: user.id, list_id: lists.first.id},
  {title:'Get milk', completed:'false', user_id: user.id, list_id: lists.last.id},
  {title:'Get a job!', completed:'false', user_id: user.id, list_id: lists.first.id},

])

