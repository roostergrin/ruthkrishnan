import mapStyles from './mapStyles.json'

export const setMap = (category) => {

  const geocoder = new google.maps.Geocoder()
  const developments = document.querySelectorAll(`.page-new-developments__development-address--${category}`)
  let openWindow = null

  const map = new google.maps.Map(document.getElementById('gmapdev'), {
    center: { lat: 37.7606805, lng: -122.4508183 },
    zoom: 13,
    fullscreenControl: false,
    styles: mapStyles
  })
  
  developments.forEach((development, i) => {
    geocoder.geocode({ address: development.dataset.address }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat()
        const lng = results[0].geometry.location.lng()
        const infoTitle = development.dataset.title
        const infoAddress = results[0].formatted_address.slice(0, -5)
        const infoSlug = development.dataset.slug
        
        const content = `
        <h4>${infoTitle}</h4>
        <p>${infoAddress}</p>
        <a href='https://dev.ruthkrishnan.com/new-developments/${infoSlug}'>view property</a>
        `

        const infoWindow = new google.maps.InfoWindow({
          content
        })

        const marker = new google.maps.Marker({
          position: { lat, lng },
          map
        })

        marker.addListener('click', () => {
          if (openWindow === infoWindow) {
            openWindow.close()
            openWindow = null
          } else if (openWindow) {
            openWindow.close()
            infoWindow.open(map, marker)
            openWindow = infoWindow
          } else {
            infoWindow.open(map, marker)
            openWindow = infoWindow
          }
        })
      }
    })
  })

}