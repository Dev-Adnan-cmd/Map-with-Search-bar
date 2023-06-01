let map;
let markers = [];
const places = [
    { name: 'New Delhi', lat: 28.6139, lng: 77.2090 },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
    { name: 'Kolkata', lat: 22.5726, lng: 88.3639 },
    { name: 'Bengaluru', lat: 12.9716, lng: 77.5946 }
];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5
    });

    places.forEach(place => {
        const marker = new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: map,
            title: place.name
        });

        markers.push(marker);
    });
}

function search() {
    const searchInput = document.getElementById('location');
    const selectedPlace = searchInput.value;

    markers.forEach(marker => {
        if (marker.getTitle() === selectedPlace) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(() => {
                marker.setAnimation(null);
            }, 3000);

            map.setCenter(marker.getPosition());
            map.setZoom(10);
        }
    });
}
