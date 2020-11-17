mapboxgl.accessToken = 'pk.eyJ1Ijoibm9taWRlIiwiYSI6ImNraGw2eHYzdTE1ZHkyd3B0NjQyazV3bGgifQ.zc9dcBLcyDp84U3L9QB1Zw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, 
    { enableHighAccuracy: true})


function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1Ijoibm9taWRlIiwiYSI6ImNraGw2eHYzdTE1ZHkyd3B0NjQyazV3bGgifQ.zc9dcBLcyDp84U3L9QB1Zw'
    });

    map.addControl(directions, 'top-left');
}

