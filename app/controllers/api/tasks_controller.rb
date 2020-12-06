class Api::TasksController < ApplicationController

  def index
    @tasks = current_user.tasks
    render :index
  end

  def create
    @task = Task.new(task_params)
    (@task.user_id = current_user.id) unless @task.user_id
    @task.completed = false
    if @task.save
      render :show
    else
      error = @task.errors.full_messages
      render json: error, status: 401
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render :show
    else
      error = @task.errors.full_messages
      render json: error, status: 401
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    render json: task
  end

  private
  def task_params
    params.require(:task).permit(:title, :due_date, :completed, :list_id)
  end

end