export const dataTable = () => {
  const tableElement = document.getElementById("wrapper");
  const single = JSON.parse(tableElement.dataset.hjisingleyearly);
  console.log("hji single yearly:");
  console.log(single.result.grouping.groups);

  // TODO: make a JSON with the content from single
  let year = []
  // single.result.grouping.groups.forEach((year) => {
  //   year.push(year.measurements.salePrice.average)
  // });
  //
  let salePriceAvg = ["Average Sale Price"]
  let salePriceMedian = ["Median Sale Price"]
  let salePriceLow = ["Lowest Sale Price"]
  let salePriceHigh = ["Highest Sale Price"]
  let daysOnMarketAverage = ["Days on Market"]
  let listPricePerSqFtAverage = ["List Price per sq ft"]
  let saleToListPrice = ["Sale to List Price Percent"]
  
  let data = [
    salePriceAvg,
    salePriceMedian,
    salePriceLow,
    salePriceHigh,
    daysOnMarketAverage,
    listPricePerSqFtAverage,
    saleToListPrice,
  ]


  var USDFormatterNoDec = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  var USDFormatterDec = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  single.result.grouping.groups.forEach(year => {
    salePriceAvg.push(USDFormatterNoDec.format(year.measurements.salePrice.average))
    salePriceMedian.push(USDFormatterNoDec.format(year.measurements.salePrice.median))
    salePriceLow.push(USDFormatterNoDec.format(year.measurements.salePrice.low))
    salePriceHigh.push(USDFormatterNoDec.format(year.measurements.salePrice.high))
    daysOnMarketAverage.push(year.measurements.daysOnMarket.average)
    listPricePerSqFtAverage.push(USDFormatterDec.format(year.measurements.listPricePerSqFt.median)+ '/sq.ft')
    saleToListPrice.push(((year.measurements.salePrice.average/year.measurements.listPrice.average)*100).toFixed(2) + "%")
  }
  )

  console.log(data)
  new gridjs.Grid({
    columns: ["dataLabel","2019", "2020", "2021", "2022"],
    data: data
  }).render(tableElement);
};
