class UsersController < ApplicationController

	# before_action :authenticate, except: [:create ]

	def index
		@users = User.all
		render json: @users
	end

	def show
		@user = User.find(params[:id])

		if current_user && @user == current_user
			render json: @user
		else
		 	render json: { errors: "This bearea is restricted." }, status: 401
		end
	end

	def create
    @user = User.new()
		@user.parent_email = params[:email]
		@user.password = params[:password]
		@user.password_confirmation = params[:password_confirmation]
		@user.interest = params[:interest]
		@user.color = params[:color]

    if @user.save
      session[:current_user] = @user.id
      render json: @user
    end
  end

t.string :email
    	t.string :password_digest
        t.string :interest
    	t.string :color
        t.references :bear


  def update
  	@user = User.find(params[:id])
  	@user.email = params[:email]
		@user.interest = params[:interest]
  	if (params[:password] != nil) && (params[:password] === params[:password_confirmation])
			@user.password = params[:password]
			@user.password_confirmation = params[:password_confirmation]
		end

		@user.color = params[:color]
  	if @user.save()
  		render json: @user
  	else
			render json: { errors: @user.errors.full_messages }, status: 422
		end
	end

	def delete
		@user = User.find(params[:id])
    @user.destroy
    session[:current_user] = nil if @user == current_user
    redirect_to root_path
	end

	private

	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation, :interest, :color)
	end
end