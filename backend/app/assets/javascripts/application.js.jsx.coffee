#= require jquery
#= require jquery_ujs
#= require react
#= require chart.min
#= require_tree .

###* @jsx React.DOM ###

test = React.createClass
  componentDidMount: ->
    @chart = new Chart(@getDomNode().getContext('2d'))
    @chart.Line(@state.data, {});

  getInitialState: ->
    data:
      labels : ["January","February","March","April","May","June","July"]
      datasets : [
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : [65,59,90,81,56,55,40]
        },
        {
          fillColor : "rgba(151,187,205,0.5)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          data : [28,48,40,19,96,27,100]
        }
      ]
  render: ->
    # @chart.Line(@state.data, {});

chart = $("<canvas></canvas>").get(0)

React.renderComponent(`<test />`, chart)
