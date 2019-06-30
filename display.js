setInterval(function(){
    async function main() {
        let weather = require('openweather-apis');
        weather.setLang('en');
        weather.setCity('London');
        weather.setUnits('metric');
        weather.setAPPID('a1455077b4513bce44a2b8461a0ccc0f');
        weather.getTemperature(function (err, temp) {
            console.log (temp);
        });
    }
    main().catch(console.error);
}, 1000);