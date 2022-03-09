class SkillsController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :show, :create, :update, :destroy]
    
    def index
        skill = Skill.all
        render json: skill, status: :ok
    end

    def show
        skill = Skill.find(params[:id])
        render json: skill, status: :ok
    end

    def create
        new_skill = Skill.create!(skill_params)
        render json: new_skill, status: :created
    end
    
    def update 
        skill = Skill.find(params[:id])
        skill.update!(skill_params)
        render json: skill, status: :ok
    end 

    def destroy
        skill = Skill.find(params[:id])
        skill.destroy
        render json: {}
    end 

    private

    def skill_params
        params.permit(:skill_name, :skill_type, :equipment, :fp, :effect, :image)
    end
end
