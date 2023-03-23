export const dataTable = () => {
  const neighborhoodDataTable = document.getElementById("neighborhood-data-table");
  const tableElement = document.getElementById("wrapper");
  const condoTableElement = document.getElementById("condo");
  const residenceTypeElement = document.getElementById("residenceType");
  const homeToggle = document.getElementById("homeToggle");
  const condoToggle = document.getElementById("condoToggle");
  const single = JSON.parse(tableElement.dataset.hjisingleyearly);
  const condo = JSON.parse(tableElement.dataset.hjicondoyearly);
  condo.residenceTypeName = 'Condo'
  single.residenceTypeName = 'Home'

  let singleSalePriceAvg = ["Average Sale Price"];
  let singleSalePriceMedian = ["Median Sale Price"];
  let singleSalePriceLow = ["Lowest Sale Price"];
  let singleSalePriceHigh = ["Highest Sale Price"];
  let singleSalePriceToSqFt = ["Sale Price per sq ft"];
  let singleSaleToListPrice = ["Sale to List Price Percent"];
  let singleDaysOnMarketMedian = ["Days on Market"];

  let condoSalePriceAvg = ["Average Sale Price"];
  let condoSalePriceMedian = ["Median Sale Price"];
  let condoSalePriceLow = ["Lowest Sale Price"];
  let condoSalePriceHigh = ["Highest Sale Price"];
  let condoSalePriceToSqFt = ["Sale Price per sq ft"];
  let condoSaleToListPrice = ["Sale to List Price Percent"];
  let condoDaysOnMarketMedian = ["Days on Market"];

  let singleData = [
    singleSalePriceAvg,
    singleSalePriceMedian,
    singleSalePriceLow,
    singleSalePriceHigh,
    singleSalePriceToSqFt,
    singleSaleToListPrice,
    singleDaysOnMarketMedian,
  ];

  let condoData = [
    condoSalePriceAvg,
    condoSalePriceMedian,
    condoSalePriceLow,
    condoSalePriceHigh,
    condoSalePriceToSqFt,
    condoSaleToListPrice,
    condoDaysOnMarketMedian,
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
  
  const missingSingle = single.result.count == 0 
  const missingCondo = condo.result.count == 0 
  console.log('single ', single.result.count)
  console.log('condo ', condo.result.count)
  if (missingSingle) {
    tableElement.classList.add('neighborhood-data-table__table--hidden')
  }
  if (missingCondo) {
    condoTableElement.classList.add('neighborhood-data-table__table--hidden')
  } else {
    if (missingSingle) {
      condoTableElement.classList.remove('neighborhood-data-table__table--hidden')
      residenceTypeElement.innerHTML = "Condo"
    }
  }
  if (missingSingle || missingCondo) {
    condoToggle.style="display:none;"
    homeToggle.style="display:none;"
  }
  
  let currentYear = new Date().getFullYear() - 1

  function timeConverter(UNIX_timestamp) {
    var timestampDate = new Date(UNIX_timestamp * 1000);
    var year = timestampDate.getFullYear();
    return year
  }

  console.log(single.result)
  single.result.grouping.groups.forEach((year, i) => {
    console.log((currentYear - timeConverter(year.value)), (single.result.grouping.groups.length - i))
    console.log(timeConverter(year.value), currentYear)
    singleSalePriceAvg.push(
      USDFormatterNoDec.format(year.measurements.salePrice.average)
    );
    singleSalePriceMedian.push(
      USDFormatterNoDec.format(year.measurements.salePrice.median)
    );
    singleSalePriceLow.push(
      USDFormatterNoDec.format(year.measurements.salePrice.low)
    );
    singleSalePriceHigh.push(
      USDFormatterNoDec.format(year.measurements.salePrice.high)
    );
    singleDaysOnMarketMedian.push(year.measurements.daysOnMarket.average.toFixed(0));
    singleSalePriceToSqFt.push(
      USDFormatterDec.format(
        year.measurements.salePrice.average / year.measurements.size.average
      ) + "/sq.ft"
    );
    singleSaleToListPrice.push(
      (
        (year.measurements.salePrice.average /
          year.measurements.listPrice.average) *
        100
      ).toFixed(2) + "%"
    );
  })

  condo.result.grouping.groups.forEach((year) => {
    condoSalePriceAvg.push(
      USDFormatterNoDec.format(year.measurements.salePrice.average)
    );
    condoSalePriceMedian.push(
      USDFormatterNoDec.format(year.measurements.salePrice.median)
    );
    condoSalePriceLow.push(
      USDFormatterNoDec.format(year.measurements.salePrice.low)
    );
    condoSalePriceHigh.push(
      USDFormatterNoDec.format(year.measurements.salePrice.high)
    );
    condoDaysOnMarketMedian.push(year.measurements.daysOnMarket.average.toFixed(0));
    condoSalePriceToSqFt.push(
      USDFormatterDec.format(
        year.measurements.salePrice.average / year.measurements.size.average
      ) + "/sq.ft"
    );
    condoSaleToListPrice.push(
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


  
  new gridjs.Grid({
    columns: ["dataLabel", (currentYear - 3).toString(), (currentYear - 2).toString(), (currentYear - 1).toString(), (currentYear).toString()],
    data: singleData,
  }).render(tableElement);
  
  new gridjs.Grid({
    columns: ["dataLabel", (currentYear - 3).toString(), (currentYear - 2).toString(), (currentYear - 1).toString(), (currentYear).toString()],
    data: condoData,
  }).render(condoTableElement);

  homeToggle.addEventListener("click", () => {
    console.log("home")
    homeToggle.classList.add('neighborhood-data-table__toggle--active')
    condoToggle.classList.remove('neighborhood-data-table__toggle--active')
    condoTableElement.classList.add('neighborhood-data-table__table--hidden')
    tableElement.classList.remove('neighborhood-data-table__table--hidden')
    // updates span content to fit the correct residence type, condo or single
    residenceTypeElement.innerHTML = "Home"
    // adds a class to the table to update styling if condo or single
    // neighborhoodDataTable.classList.add("Home");
    // neighborhoodDataTable.classList.remove("Condo");
  })
  
  condoToggle.addEventListener("click", () => {
    console.log("condo")
    condoToggle.classList.add('neighborhood-data-table__toggle--active')
    homeToggle.classList.remove('neighborhood-data-table__toggle--active')
    tableElement.classList.add('neighborhood-data-table__table--hidden')
    condoTableElement.classList.remove('neighborhood-data-table__table--hidden')
    // updates span content to fit the correct residence type, condo or single
    residenceTypeElement.innerHTML = "Condo"
  })
}