  
class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user 
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Sorry, that wasn't a valid login. Please try again. If you've forgotten your password, you can always reset it."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render 'api/users/show'
    else
      render json: ['Nobody signed in'], status: 404
    end
  end

end