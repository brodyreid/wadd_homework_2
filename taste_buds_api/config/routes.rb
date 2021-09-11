Rails.application.routes.draw do
    namespace :api, defaults: { format: :json } do
        namespace :v1 do
            resource :session, only: [:create, :destroy]
            resources :users, only: [:create] do
                get :current, on: :collection
            end
            resources :recipes do
                resources :reviews, only: [:create, :delete], shallow: true
            end
        end
    end
end
