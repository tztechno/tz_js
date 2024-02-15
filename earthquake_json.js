const fetch = require('node-fetch');
const fs = require('fs');
const { DateTime, Duration } = require('luxon');

const today = DateTime.now().toUTC();
const monthAgo = today.minus(Duration.fromObject({ weeks: 4 }));
const start = monthAgo.toFormat('yyyy-MM-dd');
const end = today.toFormat('yyyy-MM-dd');
const mag = 2.0;
const maxLat = 48;
const minLat = 25;
const maxLong = 154;
const minLong = 122;

const url = `https://earthquake.usgs.gov/fdsnws/event/1/query.geojson?starttime=${start}T00:00:00&endtime=${end}T23:59:59&maxlatitude=${maxLat}&minlatitude=${minLat}&maxlongitude=${maxLong}&minlongitude=${minLong}&minmagnitude=${mag}&orderby=time`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const jsonData = JSON.stringify(data);
        fs.writeFileSync('new.json', jsonData);
    })
    .catch(error => console.error('Error:', error));
