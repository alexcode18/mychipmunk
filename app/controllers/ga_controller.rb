class GAController < ApplicationController

	def create
		auth = {:username => "aschattner@gmail.com", :password => 'airbender'}
		# ENV["GA_KEY"]
		url = "https://profiles.generalassemb.ly/profiles/1073/steps/the_lead"
		@search = HTTParty.get(url, :basic_auth => auth)
		render json: @search
	end
end