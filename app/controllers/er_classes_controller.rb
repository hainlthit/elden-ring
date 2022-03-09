class ErClassesController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :show, :create, :update, :destroy]

    def index
        er_class = ErClass.all
        render json: er_class, status: :ok
    end

    def show
        er_class = ErClass.find(params[:id])
        render json: er_class, status: :ok
    end

    def create
        new_er_class = ErClass.create!(er_class_params)
        render json: new_er_class, status: :created
    end
    
    def update 
        er_class = ErClass.find(params[:id])
        er_class.update!(er_class_params)
        render json: er_class, status: :ok
    end 

    def destroy
        er_class = ErClass.find(params[:id])
        er_class.destroy
        render json: {}
    end 

    private

    def er_class_params
        params.permit(:name, :level, :info, :weapons, :image)
    end

end
