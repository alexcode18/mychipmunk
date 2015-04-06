class BingsController < ApplicationController

	def create
		auth = {:username => "", :password => ENV["BING_API_KEY"]}
		url = "https://api.datamarket.azure.com/Bing/Search/v1/Web?Query=%27#{params[:search]}%27&$format=JSON&$top=15&Adult='Strict'"
		@search = HTTParty.get(url, :basic_auth => auth)
		render json: @search
	end

	def add_more
		auth = {:username => "", :password => ENV["BING_API_KEY"]}
		url = "https://api.datamarket.azure.com/Bing/Search/v1/Web?Query=%27#{params[:search]}%27&$format=JSON&$top=15&Adult='Strict'&$skip=#{params[:offset]}"
		@search = HTTParty.get(url, :basic_auth => auth)
		render json: @search
	end
end