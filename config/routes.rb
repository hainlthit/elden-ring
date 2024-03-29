Rails.application.routes.draw do
  
  resources :comments, only: [:index, :create]
  resources :profiles, only: [:index, :create, :update]
  resources :er_classes, only: [:index, :show, :create, :update, :destroy]
  resources :skills, only: [:index, :show, :create, :update, :destroy]
  resources :spells, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create]
  
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  get '/authorized_user', to: 'users#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
