class ChartController < ApplicationController

  def index
  end

  def login
    render 'login', layout: 'login'
  end

end
