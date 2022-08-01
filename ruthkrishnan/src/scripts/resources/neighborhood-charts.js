export const neighborhoodCharts = () => {
  const data = Array.from(document.querySelectorAll('.single-neighborhoods-content__data'))
  // const condos = JSON.parse()
  const condo = JSON.parse(data[0].dataset.neighborhoodhjicondo)
  const single = JSON.parse(data[0].dataset.neighborhoodhjisingle)
  console.log('single:')
  console.log(single)
  console.log('condo:')
  console.log(condo)
}
