class ChartController < ApplicationController

  def index
    flash.now[:popular] = 'current'
  end

  def login
    render 'login', layout: 'login'
  end

  def rearrangements
    flash.now[:rearrangement] = 'current'
  end

  def pie
    flash.now[:pie] = 'current'
  end

  def age
    flash.now[:age] = 'current'
  end

  def heatmap
    flash.now[:heatmap] = 'current'
  end

end
