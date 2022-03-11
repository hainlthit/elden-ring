class User < ApplicationRecord
    has_secure_password
    belongs_to :profile
    has_many :comments

    
end
