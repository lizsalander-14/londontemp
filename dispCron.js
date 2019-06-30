const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'tempLondon.log' })
    ]
});
let CronJob=require('cron').CronJob;
new CronJob('*/1 * * * *',function(){
    let weather = require('openweather-apis');
    weather.setLang('en');
    weather.setCity('London');
    weather.setUnits('metric');
    weather.setAPPID('a1455077b4513bce44a2b8461a0ccc0f');
    weather.getTemperature(function (err, temp) {
        console.log(temp);
        logger.info(temp);
    });
},null,true,'America/Los_Angeles');