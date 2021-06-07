import * as Location from 'expo-location';

const tenMeteresWithDegrees=0.0001;

const getLocation = increment => {
    return {
        timestamp:10000,
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            altitudeAccuracy:5,
            altitude:5,
            latitude:19.1750992 + increment * tenMeteresWithDegrees,
            longitude:77.2936257 + increment * tenMeteresWithDegrees,
        }
    }
}

let counter = 0;

setInterval(()=> {
Location.EventEmitter.emit('Expo.LocationChanged',{
    watchId:Location._getCurrentWatchId(),
    location:getLocation(counter)
});
    counter++;
},1000)