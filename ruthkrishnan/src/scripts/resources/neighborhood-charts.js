export const neighborhoodCharts = () => {

  const data = Array.from(document.querySelectorAll('.single-neighborhoods-content__data'))
  // const condos = JSON.parse()
  const condo = JSON.parse(data[0].dataset.neighborhoodhjicondo)
  const single = JSON.parse(data[0].dataset.neighborhoodhjisingle)
  console.log('single:')
  console.log(single.success)
  console.log('condo:')
  console.log(data[0].dataset.neighborhoodhjisingle.replaceAll('\\', ''))

  let labels = ["2020 Q4", "2021 Q1", "2021 Q2", "2021 Q3", "2021 Q4", "2022 Q1", "2022 Q2"]

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
          data: [3,7,4,3,7,4,1]
        },
        {
          label: "Single family home",
          backgroundColor: "rgb(35,35,35)",
          data: [4,3,3,3,7,4,2]
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            max: 8,
            padding: 15,
            callback: (value, index, values) => value === 0 ? undefined : value,
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
	new Chart(ctx, config);

  function change_text(value){
    document.getElementById("graphTitle").innerHTML = value;
}
}
