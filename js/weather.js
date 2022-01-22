function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`You live in ${lat} ${lng}`);
};
function onGeoError(){
    console.log("Can't find your location");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);