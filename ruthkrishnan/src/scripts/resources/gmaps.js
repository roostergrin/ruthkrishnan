import mapStyles from './mapStyles.json'

export const setMap = () => {

  const geocoder = new google.maps.Geocoder()
  const address = document.querySelector('#gmapnd').getAttribute('data-address')
  

  geocoder.geocode({ address: address }, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      const lat = results[0].geometry.location.lat()
      const lng = results[0].geometry.location.lng()

      if (google) {
        const map = new google.maps.Map(document.getElementById('gmapnd'), {
          center: { lat, lng },
          zoom: 17,
          fullscreenControl: false,
          styles: mapStyles
        })

        new google.maps.Marker({
          position: map.getCenter(),
          map
        })
      }

    }
  })
}
  
