class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :ok
    end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end 

    # https://learning.flatironschool.com/courses/4568/pages/authorizing-requests?module_item_id=362898

    private

    def user_params
        params.permit(:username, :password)
    end 

end
