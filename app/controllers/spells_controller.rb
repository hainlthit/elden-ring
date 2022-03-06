class SpellsController < ApplicationController
    # skip_before_action :authorized_user, only: [:index, :show]
    def index
        spells = Spell.all
        render json: spells, status: :ok
    end

    def show
        spell = Spell.find(params[:id])
        render json: spell, status: :ok
    end
end
