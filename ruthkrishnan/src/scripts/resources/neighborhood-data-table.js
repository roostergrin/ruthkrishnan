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
  let listPriceToSalePriceAverage = ["List Price to Sale Price"]
  
  let data = [
    salePriceAvg,
    salePriceMedian,
    salePriceLow,
    salePriceHigh,
    daysOnMarketAverage,
    listPricePerSqFtAverage,
    listPriceToSalePriceAverage,
  ]

  single.result.grouping.groups.forEach(year => {
    salePriceAvg.push(year.measurements.salePrice.average)
    salePriceMedian.push(year.measurements.salePrice.median)
    salePriceLow.push(year.measurements.salePrice.low)
    salePriceHigh.push(year.measurements.salePrice.high)
    daysOnMarketAverage.push(year.measurements.daysOnMarket.average)
    listPricePerSqFtAverage.push(year.measurements.listPricePerSqFt.average)
    listPriceToSalePriceAverage.push(year.measurements.listPrice.average/year.measurements.salePrice.average)
  }
  )

  console.log(data)
  new gridjs.Grid({
    columns: ["","2019", "2020", "2021", "2022"],
    data: data
  }).render(tableElement);
};
