export const dataTable = () => {
  const neighborhoodDataTable = document.getElementById("neighborhood-data-table");
  const tableElement = document.getElementById("wrapper");
  const residenceTypeElement = document.getElementById("residenceType");
  const single = JSON.parse(tableElement.dataset.hjisingleyearly);
  const condo = JSON.parse(tableElement.dataset.hjicondoyearly);
  condo.residenceTypeName = 'Condo'
  single.residenceTypeName = 'Home'
  
  let salePriceAvg = ["Average Sale Price"];
  let salePriceMedian = ["Median Sale Price"];
  let salePriceLow = ["Lowest Sale Price"];
  let salePriceHigh = ["Highest Sale Price"];
  let salePriceToSqFt = ["Sale Price per sq ft"];
  let saleToListPrice = ["Sale to List Price Percent"];
  let daysOnMarketMedian = ["Days on Market"];
  // let competeScore = ["RKT Hot Score"];

  let data = [
    salePriceAvg,
    salePriceMedian,
    salePriceLow,
    salePriceHigh,
    salePriceToSqFt,
    saleToListPrice,
    daysOnMarketMedian,
    // competeScore,
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
  function scaleRange(x, min, max) {
    console.log("x", x, min, max);
    console.log("scaleRange", (x - min) / (max - min));
    return (x - min) / (max - min);
  }
  
  const residenceType = single.result.count > 0 ? single : condo
  console.log('residenceType', residenceType)
  // updates span content to fit the correct residence type, condo or single
  residenceTypeElement.innerHTML = residenceType.residenceTypeName
  // adds a class to the table to update styling if condo or single
  neighborhoodDataTable.classList.add(residenceType.residenceTypeName);
  
  residenceType.result.grouping.groups.forEach((year) => {
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
      USDFormatterDec.format(
        year.measurements.salePrice.average / year.measurements.size.average
      ) + "/sq.ft"
    );
    saleToListPrice.push(
      (
        (year.measurements.salePrice.average /
          year.measurements.listPrice.average) *
        100
      ).toFixed(2) + "%"
    );
    // competeScore.push(
    //   (scaleRange(
    //     year.measurements.salePrice.average /
    //       year.measurements.listPrice.average /
    //       year.measurements.daysOnMarket.median,
    //     0.004895742795938363,
    //     0.06963788300835655
    //   ) * 100).toFixed(0)
    // );
  });

  let currentYear = new Date().getFullYear()
  new gridjs.Grid({
    columns: ["dataLabel", (currentYear - 3).toString(), (currentYear - 2).toString(), (currentYear - 1).toString(), (currentYear).toString()],
    data: data,
  }).render(tableElement);

  // let rktHotScoreValue = competeScore[competeScore.length - 1];
  // rktHotScore.innerHTML = rktHotScoreValue;

  // let rktHotScoreTextValue;
  // if (rktHotScoreValue <= 100) {
  //   rktHotScoreTextValue = "most homes sell over list price with very few days on market";
  //   console.log(rktHotScoreTextValue);
  // }
  // if (rktHotScoreValue <= 90) {
  //   rktHotScoreTextValue = "many homes sell over list price with few days on market";
  //   console.log(rktHotScoreTextValue);
  // }
  // if (rktHotScoreValue <= 70) {
  //   rktHotScoreTextValue = "some homes sell over list price but may takes weeks to sell";
  //   console.log(rktHotScoreTextValue);
  // }
  // if (rktHotScoreValue <= 30) {
  //   rktHotScoreTextValue = "few homes sell over list price and can take months to sell";
  //   console.log(rktHotScoreTextValue);
  // }
  // rktHotScoreText.innerHTML = rktHotScoreTextValue;
};
