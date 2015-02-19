class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

<<<<<<< HEAD
  helper_method :current_user

  def index
    render layout: 'application', text: ''
  end

  def require_user
    return if current_user
 
    respond_to do |format|
      format.html { redirect_to login_path }
      format.all  { render :text => 'unauthorized', :status => :unauthorized }
    end
  end
 
  def current_user
    return @current_user if @current_user
 
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    elsif (header = request.headers['Authorization'].to_s.sub('Basic ','')) != ''
      header = Base64.decode64(header).split(':')
      username = header.shift
      password = header.join(':')
      @current_user = User.authenticate(username, password)
    end
  end
 
  def create_user_session(user)
    session[:user_id] = user.id
  end
 
  def destroy_user_session
    session[:user_id] = nil
=======
  helper_method :authenticate, :current_user, :logged_in?

  def index
  	render layout: 'application', text: ''
  end

  def authenticate
  	redirect_to root_path unless session[:current_user_id]
  end

  def logged_in?
  	:current_user_id != nil
>>>>>>> b1e38a9611a04a7bd0969368249747aa5c26e9f7
  end
end
