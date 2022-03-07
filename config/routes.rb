Rails.application.routes.draw do
  
  resources :er_classes
  resources :skills
  resources :spells, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :create]
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  get '/authorized_user', to: 'users#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
