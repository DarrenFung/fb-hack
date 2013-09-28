#= require jquery
#= require jquery_ujs
#= require react
#= require chart.min
#= require heatmap
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

  BarChart = React.createClass
    componentDidMount: ->
      @chart = new Chart(@getDOMNode().getContext('2d'))
      console.log @state
      @chart.Bar(@state, @props.options ? {})
    getInitialState: ->
      labels: @props.labels
      datasets: @props.datasets
    changeData: ->


    render: ->
      `<canvas width="400" height="400" onClick={this.changeData}></canvas>`

  chart          = $("div.pie-chart")
  barChartPP       = $("div.bar-chart-pp")
  barChartPPLabels = ["0-14", "15-24", "25-36", "37-48", "49-60", "60-71", "72+"]
  barChartPPData   = [
    {
      fillColor : "rgba(220,220,220,0.5)"
      strokeColor : "rgba(220,220,220,1)"
      data : [10,59,90,81,56,55,40]
    },
    {
      fillColor : "rgba(151,187,205,0.5)"
      strokeColor : "rgba(151,187,205,1)"
      data : [5,48,40,19,96,27,100]
    }
  ]
  barChartNF       = $("div.bar-chart-nf")
  barChartNFLabels = ["0-14", "15-24", "25-36", "37-48", "49-60", "60-71", "72+"]
  barChartNFData   = [
    {
      fillColor : "rgba(220,220,220,0.5)"
      strokeColor : "rgba(220,220,220,1)"
      data : [20, 62,58, 30, 2, 3, 6]
    },
    {
      fillColor : "rgba(151,187,205,0.5)"
      strokeColor : "rgba(151,187,205,1)"
      data : [5,30,66,13,10, 2,0]
    }
  ]


  React.renderComponent(`<PieChart data={
    [
      {value: 10, color: "#F38630"},
      {value: 13, color: "#69D2E7"},
      {value: 19, color: "#E0E4CC"},
      {value: 2, color: "#f326cc"},
      {value: 6, color: "#26c30f"},
      {value: 30, color: "#0f0aff"},
      {value: 20, color: "#ffee22"}
    ]
    }/>`, chart.get(0))

  React.renderComponent(`<BarChart labels={barChartPPLabels} datasets={barChartPPData} />`, barChartPP.get(0))
  React.renderComponent(`<BarChart labels={barChartNFLabels} datasets={barChartNFData} />`, barChartNF.get(0))

  # React.renderComponent(`<HeatMap max="20" data={[
  #               { x: 10, y: 20, count: 18 },
  #               { x: 25, y: 25, count: 14 },
  #               { x: 50, y: 30, count: 20 }]} />`, heatMap.get(0))
