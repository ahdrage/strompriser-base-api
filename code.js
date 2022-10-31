const app = require('express')();
const fetch = require('node-fetch');
const PORT = 8080;
const schedule = require('node-schedule');
require('dotenv').config();

app.listen(process.env.PORT || PORT, () => console.log("its running on port " + PORT))


const keyPowerApi = process.env.KEY

const d = new Date();

const currentHour = d.getHours()
const dd = d.getDate();
const mm = d.getMonth() + 1;
const yy = d.getFullYear();

todaysDate = yy + "-" + mm + "-" + dd

const todayInMilliSeconds = new Date().getTime()
const milliSecondsInOneDay = 24 * 60 * 60 * 1000
const tomorrowInMilliseconds = todayInMilliSeconds + milliSecondsInOneDay
const tomorrow = new Date(tomorrowInMilliseconds)
const tomorrowDayOnly = "0" + tomorrow.getDate()
const tomorrowMonthOnly = tomorrow.getMonth() + 1;
const tomorrowYearOnly = tomorrow.getFullYear();
const tomorrowsDate = tomorrowYearOnly + "-" + tomorrowMonthOnly + "-" + tomorrowDayOnly

console.log(todaysDate);


console.log(tomorrowsDate);




// prod 

  const powerPriceUrlTodayZone1 = `https://norway-power.ffail.win/?zone=NO1&date=${todaysDate}&key=${keyPowerApi}`                           
  const powerPriceUrlTodayZone2 = `https://norway-power.ffail.win/?zone=NO2&date=${todaysDate}&key=${keyPowerApi}`  
  const powerPriceUrlTodayZone3 = `https://norway-power.ffail.win/?zone=NO3&date=${todaysDate}&key=${keyPowerApi}`  
  const powerPriceUrlTodayZone4 = `https://norway-power.ffail.win/?zone=NO4&date=${todaysDate}&key=${keyPowerApi}`  
  const powerPriceUrlTodayZone5 = `https://norway-power.ffail.win/?zone=NO5&date=${todaysDate}&key=${keyPowerApi}`   

  const powerPriceUrlTomorrowZone1 = `https://norway-power.ffail.win/?zone=NO1&date=${tomorrowsDate}&key=${keyPowerApi}`                           
  const powerPriceUrlTomorrowZone2 = `https://norway-power.ffail.win/?zone=NO2&date=${tomorrowsDate}&key=${keyPowerApi}`  
  const powerPriceUrlTomorrowZone3 = `https://norway-power.ffail.win/?zone=NO3&date=${tomorrowsDate}&key=${keyPowerApi}`  
  const powerPriceUrlTomorrowZone4 = `https://norway-power.ffail.win/?zone=NO4&date=${tomorrowsDate}&key=${keyPowerApi}`  
  const powerPriceUrlTomorrowZone5 = `https://norway-power.ffail.win/?zone=NO5&date=${tomorrowsDate}&key=${keyPowerApi}`  

// test

/* const powerPriceUrlTodayZone1 = `https://playground-norway-power.ffail.win/?zone=NO1&date=${todaysDate}&key=${keyPowerApi}`

const powerPriceUrlTomorrowZone1 = `https://playground-norway-power.ffail.win/?zone=NO1&date=${tomorrowsDate}&key=${keyPowerApi}`
const powerPriceUrlTomorrowZone2 = `https://playground-norway-power.ffail.win/?zone=NO2&date=${tomorrowsDate}&key=${keyPowerApi}`
const powerPriceUrlTomorrowZone3 = `https://playground-norway-power.ffail.win/?zone=NO3&date=${tomorrowsDate}&key=${keyPowerApi}`
const powerPriceUrlTomorrowZone4 = `https://playground-norway-power.ffail.win/?zone=NO4&date=${tomorrowsDate}&key=${keyPowerApi}`
const powerPriceUrlTomorrowZone5 = `https://playground-norway-power.ffail.win/?zone=NO5&date=${tomorrowsDate}&key=${keyPowerApi}` */


// Updating prices for today for each zone
const job = schedule.scheduleJob('10 21 * * *', function () {

    fetch(powerPriceUrlTodayZone1)
        .then(response => response.json())
        .then(data => {
            const firstLine = data

            console.log(firstLine);



            app.get('/powerprice-zone1', (req, res) => {
                res.set('Access-Control-Allow-Origin', '*');
                res.status(200).send({
                    firstLine
                })
            })

        })

/*     fetch(powerPriceUrlTodayZone2)
        .then(response => response.json())
        .then(data => {
            const firstLine = data

            console.log(firstLine);



            app.get('/powerprice-zone2', (req, res) => {
                res.set('Access-Control-Allow-Origin', '*');
                res.status(200).send({
                    firstLine
                })
            })

        })

    fetch(powerPriceUrlTodayZone3)
        .then(response => response.json())
        .then(data => {
            const firstLine = data

            console.log(firstLine);



            app.get('/powerprice-zone3', (req, res) => {
                res.set('Access-Control-Allow-Origin', '*');
                res.status(200).send({
                    firstLine
                })
            })

        })


    fetch(powerPriceUrlTodayZone4)
        .then(response => response.json())
        .then(data => {
            const firstLine = data

            console.log(firstLine);



            app.get('/powerprice-zone4', (req, res) => {
                res.set('Access-Control-Allow-Origin', '*');
                res.status(200).send({
                    firstLine
                })
            })

        })

    fetch(powerPriceUrlTodayZone5)
        .then(response => response.json())
        .then(data => {
            const firstLine = data

            console.log(firstLine);



            app.get('/powerprice-zone5', (req, res) => {
                res.set('Access-Control-Allow-Origin', '*');
                res.status(200).send({
                    firstLine
                })
            })

        }) */




})
 
    // Updating prices for tomorrow for each zone
const jobTomorrow = schedule.scheduleJob('10 21 * * *', function () {

        fetch(powerPriceUrlTomorrowZone1)
            .then(response => response.json())
            .then(data => {
                const firstLine = data

                console.log(firstLine);



                app.get('/powerprice-zone1-tomorrow', (req, res) => {
                    res.set('Access-Control-Allow-Origin', '*');
                    res.status(200).send({
                        firstLine
                    })
                })

            })

       /*  fetch(powerPriceUrlTomorrowZone2)
            .then(response => response.json())
            .then(data => {
                const firstLine = data

                console.log(firstLine);



                app.get('/powerprice-zone2-tomorrow', (req, res) => {
                    res.set('Access-Control-Allow-Origin', '*');
                    res.status(200).send({
                        firstLine
                    })
                })

            })

        fetch(powerPriceUrlTomorrowZone3)
            .then(response => response.json())
            .then(data => {
                const firstLine = data

                console.log(firstLine);



                app.get('/powerprice-zone3-tomorrow', (req, res) => {
                    res.set('Access-Control-Allow-Origin', '*');
                    res.status(200).send({
                        firstLine
                    })
                })

            })


        fetch(powerPriceUrlTomorrowZone4)
            .then(response => response.json())
            .then(data => {
                const firstLine = data

                console.log(firstLine);



                app.get('/powerprice-zone4-tomorrow', (req, res) => {
                    res.set('Access-Control-Allow-Origin', '*');
                    res.status(200).send({
                        firstLine
                    })
                })

            })

        fetch(powerPriceUrlTomorrowZone5)
            .then(response => response.json())
            .then(data => {
                const firstLine = data

                console.log(firstLine);



                app.get('/powerprice-zone5-tomorrow', (req, res) => {
                    res.set('Access-Control-Allow-Origin', '*');
                    res.status(200).send({
                        firstLine
                    })
                })

            }) */




    })
