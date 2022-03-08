class ProfilesController < ApplicationController
    def index
        render json: Profile.all, status: :ok
    end
   
    def create
        profile = Profile.create!(profile_param)
        render json: profile, status: :created
    end

    def update
        change_colors = find_prof
        change_colors.update!(color_params)
        render json: change_colors, status: :ok
    end

    private

    def profile_param
        params.permit(:color1, :color2, :username)
    end

    def color_params
        params.permit(:color1, :color2)
    end

    def find_prof
        Profile.find(params[:id])
    end
end
