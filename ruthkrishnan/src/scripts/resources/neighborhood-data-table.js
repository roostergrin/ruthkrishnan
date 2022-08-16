export const dataTable = () => {
  const tableElement = document.getElementById("wrapper");
  const rktHotScore = document.getElementById("rkt-hot-score");
  const rktHotScoreText = document.getElementById("rkt-hot-score-text");
  const single = JSON.parse(tableElement.dataset.hjisingleyearly);
  // console.log("hji single yearly:");
  console.log("hji single yearly", single);
  // TODO: make a JSON with the content from single
  let year = [];
  // single.result.grouping.groups.forEach((year) => {
  //   year.push(year.measurements.salePrice.average)
  // });
  //
  let salePriceAvg = ["Average Sale Price"];
  let salePriceMedian = ["Median Sale Price"];
  let salePriceLow = ["Lowest Sale Price"];
  let salePriceHigh = ["Highest Sale Price"];
  let salePriceToSqFt = ["Sale Price per sq ft"];
  let saleToListPrice = ["Sale to List Price Percent"];
  let daysOnMarketMedian = ["Days on Market"];
  let competeScore = ["RKT Hot Score"];

  let data = [
    salePriceAvg,
    salePriceMedian,
    salePriceLow,
    salePriceHigh,
    salePriceToSqFt,
    saleToListPrice,
    daysOnMarketMedian,
    competeScore,
  ];

  var USDFormatterNoDec = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  var USDFormatterDec = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  single.result.grouping.groups.forEach((year) => {
    salePriceAvg.push(
      USDFormatterNoDec.format(year.measurements.salePrice.average)
    );
    salePriceMedian.push(
      USDFormatterNoDec.format(year.measurements.salePrice.median)
    );
    salePriceLow.push(
      USDFormatterNoDec.format(year.measurements.salePrice.low)
    );
    salePriceHigh.push(
      USDFormatterNoDec.format(year.measurements.salePrice.high)
    );
    daysOnMarketMedian.push(year.measurements.daysOnMarket.average.toFixed(0));
    salePriceToSqFt.push(
      USDFormatterDec.format(year.measurements.salePrice.average/year.measurements.size.average) +
        "/sq.ft"
    );
    saleToListPrice.push(
      (
        (year.measurements.salePrice.average /
          year.measurements.listPrice.average) *
        100
      ).toFixed(2) + "%"
    );
    competeScore.push(
      (
        ((year.measurements.salePrice.average /
        year.measurements.listPrice.average) / 
        (year.measurements.daysOnMarket.average )) * 2000
      ).toFixed(3)
    );
  });

  console.log(data);
  new gridjs.Grid({
    columns: ["dataLabel", "2019", "2020", "2021", "2022"],
    data: data,
  }).render(tableElement);


  let rktHotScoreValue = competeScore[competeScore.length-1]
  rktHotScore.innerHTML = rktHotScoreValue
  
  let rktHotScoreTextValue
  if(rktHotScoreValue <= 90) {
    rktHotScoreTextValue = "this is a very hot market"
    console.log(rktHotScoreTextValue)
  } 
  if (rktHotScoreValue <= 50) {
    rktHotScoreTextValue = "this is a hot market"
    console.log(rktHotScoreTextValue)
  } 
  if (rktHotScoreValue <=30) {
    rktHotScoreTextValue = "this is a moderately hot market"
    console.log(rktHotScoreTextValue)
  } 
  if (rktHotScoreValue <=20) {
    rktHotScoreTextValue = "currently, this is a less competitive market"
    console.log(rktHotScoreTextValue)
  } 
  if (rktHotScoreValue <= 10){
    rktHotScoreTextValue = "currently, this is not a competitive market"
    console.log(rktHotScoreTextValue)
  }
  rktHotScoreText.innerHTML = rktHotScoreTextValue

};

