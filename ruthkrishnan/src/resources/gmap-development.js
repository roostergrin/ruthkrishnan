import mapStyles from './mapStyles.json'

export const setMap = (category) => {

  const geocoder = new google.maps.Geocoder()
  const addresses = document.querySelectorAll(`.page-new-developments__development-address--${category}`)

  const map = new google.maps.Map(document.getElementById('gmapdev'), {
    center: { lat: 37.7606805, lng: -122.4508183 },
    zoom: 13,
    fullscreenControl: false,
    styles: mapStyles
  })
  
  addresses.forEach((address, i) => {
    geocoder.geocode({ address: address.dataset.address }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat()
        const lng = results[0].geometry.location.lng()

        new google.maps.Marker({
          position: { lat, lng },
          map
        })
      }
    })
  })

}