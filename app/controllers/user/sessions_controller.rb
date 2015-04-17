class User::SessionsController < Devise::SessionsController
# before_filter :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  #   if current_user.bear_id === undefined || current_user.bear_id === nil do
  #     @new_bear = Bear.new()
  #     @new_bear.name = Faker::Name.first_name()
  #     @new_bear.gender = ["M", "F"].sample
  #     @new_bear.hunger = 100
  #     @new_bear.happiness = 100
  #     @new_bear.energy = 100
  #     @new_bear.user_id = current_user.id

  #     current_user.bear_id = @new_bear.id
  #     @new_bear.save()
  #     current_user.save()
  #   end
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # You can put the params you want to permit in the empty array.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.for(:sign_in) << :attribute
  # end
end
