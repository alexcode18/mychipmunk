class BearsController < ApplicationController

	before_filter :authenticate_user!

	def index
		@bears = Bear.all
		render json: @bears.to_json(include: :user)
	end

	def show
		# @bear = Bear.find(params[:id])
		# render json: @bear.to_json(include: :user)
	end

	def create
		# @bear = Bear.new()
		# @bear.user_id = params[:user_id]
		# @bear.name = params[:name]
		# @bear.gender = params[:gender]
		# @bear.hunger = 100
		# @bear.happiness = 100
		# @bear.energy = 100

		# if @bear.save()
		# 	render json: @bear
		# end
	end

	def edit
	end

	def update
	end

	def destroy
	end

	def automaticscore
		# @bear = Bear.find(params[:id])

		# if @bear.energy > 5
		# 	@bear.energy -= 1
		# end

		# if @bear.happiness > 5
		# 	@bear.happiness -= 1
		# end

		# if @bear.hunger > 5
		# 	@bear.hunger -= 1
		# end
		
		# @bear.save()
		# render json: @bear
	end

	def raise_happy
		# @bear = Bear.find(params[:id])
		# if @bear.happiness <= 90 
		# 	@bear.happiness += 10
		# else
		# 	@bear.happiness = 100
		# end
		# @bear.save()
		# render json: @bear
	end

	def raise_hunger
		# @bear = Bear.find(params[:id])
		# if @bear.hunger <= 90 
		# 	@bear.hunger += 10
		# else
		# 	@bear.hunger = 100
		# end
		# @bear.save()
		# render json: @bear
	end

	def raise_energy
		# @bear = Bear.find(params[:id])
		# @bear.energy += 1

		# @bear.save()
		# render json: @bear
	end

	# private

	# def bear_params
	# 	params.require(:bear).permit(:name, :gender, :hunger, :happiness, :energy)
	# end
end