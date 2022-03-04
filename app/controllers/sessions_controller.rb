class SessionsController < ApplicationController
    def login
        user = User.find_by(username:params[:username])
       
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json: {error: "Username or Password is inccorect"}
        end 
    end 
end
