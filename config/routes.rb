Rails.application.routes.draw do

  root 'application#index'
  resources :bears, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:index, :show, :create, :update, :destroy]
<<<<<<< HEAD

=======
  resources :searches, only: [:index, :show, :create, :update, :destroy]
  resources :memories, only: [:index, :show, :create, :update, :destroy]
  resources :bings
>>>>>>> b1e38a9611a04a7bd0969368249747aa5c26e9f7
  put 'bears/:id/automaticscore' => 'bears#automaticscore', as: 'autoscore'
  put 'bears/:id/raise_happy' => 'bears#raise_happy', as: 'raise_happy'
  put 'bears/:id/raise_health' => 'bears#raise_health', as: 'raise_health'
  put 'bears/:id/raise_energy' => 'bears#raise_energy', as: 'raise_energy'
  get 'sessions/new' => 'sessions#new', as: 'login'
  post 'sessions' => 'sessions#create'
  delete 'sessions' => 'sessions#destroy'
<<<<<<< HEAD

  match 'login'  => 'sessions#new', :via => :get
  match 'logout' => 'sessions#destroy', :via => [:get, :delete]
  match 'signup' => 'users#new', :via => :get
 
  resource :session, :only => [:new, :create, :destroy]
  resource :account, :controller => 'users', :except => [:index, :destroy, :show, :edit]
=======
>>>>>>> b1e38a9611a04a7bd0969368249747aa5c26e9f7
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
