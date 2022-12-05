Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
    #get "characters", to: "characters#index"
  root to: "pages#home"
  resources :characters

end
