Rocksuper::Application.routes.draw do

  resources :form_fields

  resources :gallery_attribs

  resources :slideshow_images do
  	collection { post :sort }
  end

  resources :slideshow_attribs

  resources :page_img_bg_settings

  resources :global_page_settings

  resources :images

  resources :element_styles

  root :to => "public#index"
  #match '/users/:id' => 'users#destroy', :as => :delete_user, :via => [:delete]
  
  get "public/index"
  match "/auth/:provider/callback" => "sessions#create"
  
  match "/auth/twitter" => "auth#twitter", :as => :twitter_auth
  match "/auth/facebook" => "auth#facebook", :as => :facebook_auth
  match "/auth/identity" => "auth#identity", :as => :identity_auth
  match "/auth/identity/register" => "auth#identity#register", :as => :identity_auth_register
  
  match "/signout" => "sessions#destroy", :as => :signout
  
  resources :users
  resources :pages
  resources :elements
  resources :webpages
  #get "webpages/edit"
  #resources :webpages

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
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

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => "welcome#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  match ':controller(/:action(/:id(.:format)))'
end
