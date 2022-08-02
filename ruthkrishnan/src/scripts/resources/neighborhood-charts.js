export const neighborhoodCharts = () => {
  const data = Array.from(document.querySelectorAll('.single-neighborhoods-content__data'))
  // const condos = JSON.parse()
  const condo = JSON.parse(data[0].dataset.neighborhoodhjicondo)
  const single = JSON.parse(data[0].dataset.neighborhoodhjisingle)
  console.log('single:')
  console.log(single)
  console.log('condo:')
  console.log(condo)
  
  window.onload = function() {
    let ctx = document.getElementById("myChart");
    let lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "2015",
          data: [10, 8, 6, 5, 12, 8, 16, 17, 6, 7, 6, 10]
        }]
      }
    })
  }
}