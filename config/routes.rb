Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :tasks, only: [:edit, :destroy, :index, :create, :update, :show ]
    resources :lists, only: [:edit, :destroy, :index, :create, :update, :show ]
  end

  root "static_pages#root"
end
