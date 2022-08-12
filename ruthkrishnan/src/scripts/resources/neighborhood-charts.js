export const neighborhoodCharts = () => {
  //
  //
  //
  // USING 2.5 ChartJS https://www.chartjs.org/docs/2.7.3/
  //
  //
  //
  //
  const data = Array.from(
    document.querySelectorAll(".single-neighborhoods-content__data")
  );

  const condo = JSON.parse(data[0].dataset.neighborhoodhjicondo);
  const single = JSON.parse(data[0].dataset.neighborhoodhjisingle);

  function timeConverter(UNIX_timestamp) {
    var timestampDate = new Date(UNIX_timestamp * 1000);
    var year = timestampDate.getFullYear();
    var month = timestampDate.getMonth();
    console.log(year,month)
    var quarter;
    if (month === 2) {
      quarter = "Q1";
    } else if (month === 5) {
      quarter = "Q2";
    } else if (month === 8) {
      quarter = "Q3";
    } else if (month === 11) {
      quarter = "Q4";
    }

    var yearAndQuarter = year + " " + quarter;
    return yearAndQuarter;
  }

  let singleLabels = [];
  let singleAvg = [];
  let singleMed = [];
  let singleLow = [];
  let singleHi = [];
  let singleSq = [];
  let singleSaleToListRatio = [];
  let singleData = single.result.grouping.groups;
  singleData.forEach((singleQuarterData) => {
    //console.log("Single: ")
    var quarter = timeConverter(singleQuarterData.value);
    singleLabels.push(quarter);
    //console.log(quarter);
    //console.log("Avg Sales",singleQuarterData.measurements.salePrice.average)
    singleAvg.push(singleQuarterData.measurements.salePrice.average);
    //console.log("Med Sales",singleQuarterData.measurements.salePrice.median)
    singleMed.push(singleQuarterData.measurements.salePrice.median);
    //console.log("Low Sales",singleQuarterData.measurements.salePrice.low)
    singleLow.push(singleQuarterData.measurements.salePrice.low);
    //console.log("High Sales",singleQuarterData.measurements.salePrice.high)
    singleHi.push(singleQuarterData.measurements.salePrice.high);
    //console.log("Sq Sales",singleQuarterData.measurements.listPricePerSqFt.median)
    if (
      singleQuarterData.measurements.salePrice.median /
        singleQuarterData.measurements.size.median <
      99999
    ) {
      singleSq.push(
        singleQuarterData.measurements.salePrice.median /
          singleQuarterData.measurements.size.median
      );
    } else {
      singleSq.push(0);
    }
    singleSaleToListRatio
      .push(
        singleQuarterData.measurements.salePrice.median /
          singleQuarterData.measurements.listPrice.median
      )
      .toFixed(3);
  });

  let condoLabels = [];
  let condoAvg = [];
  let condoMed = [];
  let condoLow = [];
  let condoHi = [];
  let condoSq = [];
  let condoSaleToListRatio = [];
  let condoData = condo.result.grouping.groups;
  condoData.forEach((condoQuarterData) => {
    //console.log("Condos: ")
    var quarter = timeConverter(condoQuarterData.value);
    condoLabels.push(quarter);
    //console.log(quarter);
    //console.log("Avg Sales",condoQuarterData.measurements.salePrice.average)
    condoAvg.push(condoQuarterData.measurements.salePrice.average);
    //console.log("Med Sales",condoQuarterData.measurements.salePrice.median)
    condoMed.push(condoQuarterData.measurements.salePrice.median);
    //console.log("Low Sales",condoQuarterData.measurements.salePrice.low)
    condoLow.push(condoQuarterData.measurements.salePrice.low);
    //console.log("High Sales",condoQuarterData.measurements.salePrice.high)
    condoHi.push(condoQuarterData.measurements.salePrice.high);
    //console.log("Sq Sales",condoQuarterData.measurements.listPricePerSqFt.median)
    if (
      condoQuarterData.measurements.salePrice.median /
        condoQuarterData.measurements.size.median <
      99999
    ) {
      condoSq.push(
        condoQuarterData.measurements.salePrice.median /
          condoQuarterData.measurements.size.median
      );
    } else {
      condoSq.push(0);
    }

    condoSaleToListRatio
      .push(
        condoQuarterData.measurements.salePrice.median /
          condoQuarterData.measurements.listPrice.median
      )
      .toFixed(3);
  });

  function getIntersection(listA, listB) {
    const intersection = listA.filter((element) => listB.includes(element));
    return intersection;
  }
  
  let labels;
  if(condoLabels.length > singleLabels.length) {
    labels = Array.from(new Set(condoLabels.concat(singleLabels))); 
  } else {
    labels = Array.from(new Set(singleLabels.concat(condoLabels))); 
  }


  let draw = Chart.controllers.line.prototype.draw;
  Chart.controllers.line = Chart.controllers.line.extend({
    draw: function () {
      draw.apply(this, arguments);
      let ctx = this.chart.chart.ctx;
      let _stroke = ctx.stroke;
      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = "#E56590";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;
        _stroke.apply(this, arguments);
        ctx.restore();
      };
    },
  });

  Chart.pluginService.register({
    beforeDraw: function (chart, easing) {
      if (
        chart.config.options.chartArea &&
        chart.config.options.chartArea.backgroundColor
      ) {
        var helpers = chart.helpers;
        var ctx = chart.chart.ctx;
        var chartArea = chart.chartArea;

        ctx.save();
        ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
        ctx.fillRect(
          chartArea.left,
          chartArea.top,
          chartArea.right - chartArea.left,
          chartArea.bottom - chartArea.top
        );
        ctx.restore();
      }
    },
  });

  // USD formatter
  var USDFormatterNoDec = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0,
    // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  // var USDFormatterDec = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD", // These options are needed to round to whole numbers if that's what you want.
  //   // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //   // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  // });

  // tooltip
  const titleTooltip = (tooltipItems) => {
    return "Test";
  };

  const USDYLabel = (value) => USDFormatterNoDec.format(value);
  const USDTooltip = function (tooltipItem, data) {
    var label = data.datasets[tooltipItem.datasetIndex].label || "";

    if (label) {
      label += ": ";
    }
    label += USDFormatterNoDec.format(tooltipItem.yLabel);
    return label;
  };

  var config = {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Condominiums",
          backgroundColor: "rgb(233,232,232)",
          data: condoAvg,
        },
        {
          label: "Single family home",
          backgroundColor: "rgb(35,35,35)",
          data: singleAvg,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 15,
              callback: USDYLabel,
              precision: 0,
            },
            gridLines: {
              lineWidth: 2,
              drawTicks: false,
              drawBorder: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      chartArea: {
        backgroundColor: "white",
      },
      responsive: true,
      tooltips: {
        callbacks: {
          label: USDTooltip,
        },
      },
    },
  };

  const twoDecYLabel = (value) => Math.round(value * 100) / 100;
  const twoDecTooltip = function (tooltipItem, data) {
    var label = data.datasets[tooltipItem.datasetIndex].label || "";

    if (label) {
      label += ": ";
    }
    label += Math.round(tooltipItem.yLabel * 100) / 100;
    return label;
  };

  // build chart
  let ctx = document.getElementById("neighborhoodChart").getContext("2d");

  const barChart = new Chart(ctx, config);
  // Chart.defaults.global.defaultFontFamily = "Avenir Next";
  // Chart.defaults.global.defaultFontSize = 16
  // Chart.defaults.global.defaultFontWeight = 500
  Chart.defaults.global.defaultFontColor = "#232323";

  // change charts and chart title
  var title = document.getElementById("graphTitle");
  const filtersArr = document.querySelectorAll(
    ".single-neighborhoods-chart__filter"
  );

  // builds grid in the canvas for accessibility.
  const dataValues = {
    "Average Sales Price": [condoAvg, singleAvg],
    "Median Sales Price": [condoMed, singleMed],
    "Lowest Sales Price": [condoAvg, singleAvg],
    "Highest Sales Price": [condoHi, singleHi],
    "Sale Price per Sq Foot": [condoSq, singleSq],
    "Sale to List Price Ratio": [condoSaleToListRatio, singleSaleToListRatio],
  };

  const tableElement = document.getElementById("quarterlyTable");
  let value = "Average Sales Price"
  let tempLabels = [...labels];
  let tempCondoData = dataValues[value][0].map((x) => USDFormatterNoDec.format(x));
  let tempSingleData = dataValues[value][1].map((x) => USDFormatterNoDec.format(x));
  tempLabels.unshift("values");
  tempCondoData.unshift("Condo " + value);
  tempSingleData.unshift("Single " + value);

  const accessibilityGrid = new gridjs.Grid({
    columns: tempLabels,
    data: [
      tempCondoData,
      tempSingleData
    ],
  }).render(tableElement);


  const chartSwitch = (evt) => {
    let el = evt.srcElement;
    if (!el.classList.contains("single-neighborhoods-chart__filter--active")) {
      document
        .querySelector(".single-neighborhoods-chart__filter--active")
        .classList.remove("single-neighborhoods-chart__filter--active");
      el.classList.add("single-neighborhoods-chart__filter--active");
    }
    let value = el.dataset.filter;
    title.innerHTML = value;
    let currentData;

    if (currentData != value) {
      currentData = value;
      barChart.data.datasets[0].data = dataValues[value][0];
      barChart.data.datasets[1].data = dataValues[value][1];
      let tempLabels = [...labels];
      let tempCondoData = dataValues[value][0].map((x) => USDFormatterNoDec.format(x));
      let tempSingleData = dataValues[value][1].map((x) => USDFormatterNoDec.format(x));
      tempLabels.unshift("values");
      tempCondoData.unshift("Condo " + value);
      tempSingleData.unshift("Single " + value);
      accessibilityGrid
        .updateConfig({
          columns: tempLabels,
          data: [
            tempCondoData,
            tempSingleData
          ],
        })
        .forceRender(tableElement);
      if (value === "Sale to List Price Ratio") {
        tempCondoData = dataValues[value][0].map((x) => x.toFixed(2));
        tempSingleData = dataValues[value][1].map((x) => x.toFixed(2));
        tempCondoData.unshift("Condo " + value);
        tempSingleData.unshift("Single " + value);
        accessibilityGrid
          .updateConfig({
            columns: tempLabels,
            data: [
              tempCondoData,
              tempSingleData
            ],
          })
          .forceRender(tableElement);
      }
      if (value === "Sale to List Price Ratio") {
        barChart.config.options.scales.yAxes[0].ticks.beginAtZero = false;
        barChart.config.options.scales.yAxes[0].ticks.callback = twoDecYLabel;
        barChart.config.options.tooltips.callbacks.label = twoDecTooltip;
      } else {
        barChart.config.options.scales.yAxes[0].ticks.beginAtZero = true;
        barChart.config.options.scales.yAxes[0].ticks.callback = USDYLabel;
        barChart.config.options.tooltips.callbacks.label = USDTooltip;
      }
      barChart.update();
    }
  };

  filtersArr.forEach((el) => {
    el.addEventListener("click", chartSwitch);
    el.addEventListener("keyup", chartSwitch);
  });
};
