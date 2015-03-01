class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  helper_method :authenticate

  def authenticate
    redirect_to login_path unless session[:current_user_id]
  end
end
