class CommentsController < ApplicationController
    def index
        render json: Comment.all, status: :ok
    end
   
    def create
        comment = Comment.create!(comment_param)
        render json: comment, status: :created
    end

    private

    def comment_param
        params.permit(:message)
    end
end
