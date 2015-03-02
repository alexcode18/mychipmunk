class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  helper_method :authenticate

  def index
  	render layout: 'application', text: ''
  end

  def authenticate
    	redirect_to root_path unless session[:current_user_id]
  end
end
