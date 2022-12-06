Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
    #get "characters", to: "characters#index"
  root to: "pages#home"
  resources :characters
  get "ruta1", to:"characters#ruta1"
  get "ruta2", to:"characters#ruta2"
  get "ruta3", to:"characters#ruta3"

end
