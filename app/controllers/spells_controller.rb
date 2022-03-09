class SpellsController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :show]
    def index
        spells = Spell.all
        render json: spells, status: :ok
    end

    def show
        spell = Spell.find(params[:id])
        render json: spell, status: :ok
    end

    def create
        new_spell = Spell.create!(spell_params)
        render json: new_spell, status: :created
    end

    
    def update 
        spell = Spell.find(params[:id])
        spell.update!(spell_params)
        render json: spell, status: :ok
    end 

    def destroy
        spell = Spell.find(params[:id])
        spell.destroy
        render json: {} 
    end 

    private

    def spell_params
        params.permit(:id, :spellname, :spelltype, :effect, :image, :fp)
    end


end
