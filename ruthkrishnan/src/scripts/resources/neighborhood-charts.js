export const neighborhoodCharts = () => {

  const data = Array.from(document.querySelectorAll('.single-neighborhoods-content__data'))
  // const condos = JSON.parse()
  const condo = JSON.parse(data[0].dataset.neighborhoodhjicondo)
  const single = JSON.parse(data[0].dataset.neighborhoodhjisingle)

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth();
    var quarter;
    if (month === 11){
      quarter = "Q1"
    } else if (month === 2){
      quarter = "Q2"
    }else if (month === 5){
      quarter = "Q3"
    }else {
      quarter = "Q4"
    }

    var time = year + ' ' + quarter;
    return time;
  }

  function getIntersection(listA, listB) {
    const intersection =
      listA.filter(element => listB.includes(element));
    return intersection;
  }

  let singleLabels = []
  let singleAvg = []
  let singleMed = []
  let singleLow = []
  let singleHi = []
  let singleSq = []
  let singleList = []
  let singleData = single.result.grouping.groups
  singleData.forEach((item) => {
    //console.log("Single: ")
    var quarter = timeConverter(item.value)
    singleLabels.push(quarter)
    //console.log(quarter);
    //console.log("Avg Sales",item.measurements.salePrice.average)
    singleAvg.push(item.measurements.salePrice.average)
    //console.log("Med Sales",item.measurements.salePrice.median)
    singleMed.push(item.measurements.salePrice.median)
    //console.log("Low Sales",item.measurements.salePrice.low)
    singleLow.push(item.measurements.salePrice.low)
    //console.log("High Sales",item.measurements.salePrice.high)
    singleHi.push(item.measurements.salePrice.high)
    //console.log("Sq Sales",item.measurements.listPricePerSqFt.median)
    singleSq.push(item.measurements.listPricePerSqFt.median)
    //console.log("List 2 Sales",item.measurements.salePrice.average)
    let listsale = parseInt(item.measurements.listPrice.average) / parseInt(item.measurements.salePrice.average)
    singleList.push(listsale.toFixed(3))
  })


  let condoLabels = []
  let condoAvg = []
  let condoMed = []
  let condoLow = []
  let condoHi = []
  let condoSq = []
  let condoList = []
  let condoData = condo.result.grouping.groups
  condoData.forEach((item) => {
    //console.log("Condos: ")
    var quarter = timeConverter(item.value)
    condoLabels.push(quarter)
    //console.log(quarter);
    //console.log("Avg Sales",item.measurements.salePrice.average)
    condoAvg.push(item.measurements.salePrice.average)
    //console.log("Med Sales",item.measurements.salePrice.median)
    condoMed.push(item.measurements.salePrice.median)
    //console.log("Low Sales",item.measurements.salePrice.low)
    condoLow.push(item.measurements.salePrice.low)
    //console.log("High Sales",item.measurements.salePrice.high)
    condoHi.push(item.measurements.salePrice.high)
    //console.log("Sq Sales",item.measurements.listPricePerSqFt.median)
    condoSq.push(item.measurements.listPricePerSqFt.median)
    //console.log("List 2 Sales",item.measurements.salePrice.average)
    let listsale = parseInt(item.measurements.listPrice.average) / parseInt(item.measurements.salePrice.average)
    condoList.push(listsale.toFixed(3))
  })

  let labels = getIntersection(singleLabels, condoLabels)

  let draw = Chart.controllers.line.prototype.draw;
  Chart.controllers.line = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = '#E56590';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 4;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});

  Chart.pluginService.register({
    beforeDraw: function (chart, easing) {
      if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
        var helpers = Chart.helpers;
        var ctx = chart.chart.ctx;
        var chartArea = chart.chartArea;

        ctx.save();
        ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
        ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        ctx.restore();
      }
    }
  });

  var config = {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: "Condominiums",
          backgroundColor: "rgb(233,232,232)",
          data: condoAvg
        },
        {
          label: "Single family home",
          backgroundColor: "rgb(35,35,35)",
          data: singleAvg
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 15,
            callback: (value, index, values) => {
              if (value == 0){
                return undefined
              } else if (value <= 1){
                return value.toFixed(1)
              }
              return value
            },
            precision: 0
          },
          gridLines : {
            lineWidth: 2,
            drawTicks: false,
            drawBorder: false
          }
        }],
        xAxes : [ {
          gridLines : {
            display : false
          }
        }]
      },
      legend: {
        display: false
      },
      chartArea: {
        backgroundColor: 'white'
      }
    }
  }
  let ctx = document.getElementById("neighborhoodChart").getContext("2d");
	const barChart = new Chart(ctx, config);

  var btns = document.getElementsByClassName("single-neighborhoods-cart__button");
  var title = document.getElementById("graphTitle")

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {
      let value = event.target.value
      title.innerHTML = value

      if (value === "Average Sales Price"){
        barChart.data.datasets[0].data = condoAvg
        barChart.data.datasets[1].data = singleAvg
      }else if (value === "Median Sales Price"){
        barChart.data.datasets[0].data = condoMed
        barChart.data.datasets[1].data = singleMed
      }else if (value === "Lowest Sales Price"){
        barChart.data.datasets[0].data = condoLow
        barChart.data.datasets[1].data = singleLow
      }else if (value === "Highest Sales Price"){
        barChart.data.datasets[0].data = condoHi
        barChart.data.datasets[1].data = singleHi
      }else if (value === "List Price per Sq Foot"){
        barChart.data.datasets[0].data = condoSq
        barChart.data.datasets[1].data = singleSq
      }else {
        barChart.data.datasets[0].data = condoList
        barChart.data.datasets[1].data = singleList
      }
      //console.log(barChart.data.datasets[0])
      //console.log(barChart.data.datasets[1])
      barChart.update();
    });
  }
}
