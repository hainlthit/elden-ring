class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create, :index, :show]
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end 

    def show
        render json: current_user, status: :ok
    end 

    # https://learning.flatironschool.com/courses/4568/pages/authorizing-requests?module_item_id=362898

    private

    def user_params
        params.permit(:username, :password)
    end 

end
