class SessionsController < ApplicationController

  def create
    user = User.find_by(parent_email: params[:parent_email])
    if user && user.authenticate(params[:password])
      session[:current_user_id] = user.id
      render json: user.to_json(:include => :bear)
    else
      render json: {error: "We're beary sorry. We can't find that email or password."}
    end
  end

  def destroy
    session[:current_user_id] = nil
    redirect to root_path
  end

# <<<<<<< HEAD
# 	respond_to :html, :json
 
#   def create
#     @user = User.authenticate(params[:email], params[:password])
 
#     if @user
#       create_user_session(@user)
#       respond_with @user, location: '/', notice: "Login succesful."
#     else
#       respond_to do |format|
#         format.html { render 'new' }
#         format.json { render json: {error: "Invalid email or password."} }
#       end
#     end
#   end
 
#   def destroy
#     destroy_user_session
#     redirect_to '/', notice: "Logged out."
#   end
# =======
# 	def new
# 	end

end