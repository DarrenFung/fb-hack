#= require jquery
#= require jquery_ujs
#= require react
#= require chart.min
#= require_tree .

###* @jsx React.DOM ###

$ ->
  LineGraph = React.createClass
    componentDidMount: ->
      @chart = new Chart(@getDOMNode().getContext('2d'))
      @chart.Line(@state.data, {});

    getInitialState: ->
      data: @props.data

    render: ->
      `<canvas></canvas>`

  PieChart = React.createClass
    componentDidMount: ->
      @chart = new Chart(@getDOMNode().getContext('2d'))
      @chart.Pie(@state.data, {});

    getInitialState: ->
      data: @props.data

    render: ->
      `<canvas width="400" height="400"></canvas>`

  chart = $("<div></div>")
  $('div.main-content').append(chart)

  React.renderComponent(`<PieChart data={
    [
      {value: 30, color: "#F38630", title: "test"},
      {value: 70, color: "#69D2E7"}
    ]
    }/>`, chart.get(0))
