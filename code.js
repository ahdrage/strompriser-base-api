const app = require('express')();
const fetch = require('node-fetch');
const PORT = 8080;
const schedule = require('node-schedule');
require('dotenv').config();

app.listen(process.env.PORT || PORT, () => console.log("its running on port " + PORT))


const keyPowerApi = process.env.KEY







// prod 

/* 
const powerPriceUrlTodayZone2 = `https://norway-power.ffail.win/?zone=NO2&date=${tomorrowsDate()}&key=${keyPowerApi}`
const powerPriceUrlTodayZone3 = `https://norway-power.ffail.win/?zone=NO3&date=${tomorrowsDate()}&key=${keyPowerApi}`
const powerPriceUrlTodayZone4 = `https://norway-power.ffail.win/?zone=NO4&date=${tomorrowsDate()}&key=${keyPowerApi}`
const powerPriceUrlTodayZone5 = `https://norway-power.ffail.win/?zone=NO5&date=${tomorrowsDate()}&key=${keyPowerApi}`


const powerPriceUrlTomorrowZone2 = `https://norway-power.ffail.win/?zone=NO2&date=${tomorrowsDate()}&key=${keyPowerApi}`
const powerPriceUrlTomorrowZone3 = `https://norway-power.ffail.win/?zone=NO3&date=${tomorrowsDate()}&key=${keyPowerApi}`
const powerPriceUrlTomorrowZone4 = `https://norway-power.ffail.win/?zone=NO4&date=${tomorrowsDate()}&key=${keyPowerApi}`
const powerPriceUrlTomorrowZone5 = `https://norway-power.ffail.win/?zone=NO5&date=${tomorrowsDate()}&key=${keyPowerApi}` */

// test

/*  


const powerPriceUrlTomorrowZone2 = `https://playground-norway-power.ffail.win/?zone=NO2&date=${tomorrowsDate()}&key=${keyPowerApi}`
const powerPriceUrlTomorrowZone3 = `https://playground-norway-power.ffail.win/?zone=NO3&date=${tomorrowsDate()}&key=${keyPowerApi}`
const powerPriceUrlTomorrowZone4 = `https://playground-norway-power.ffail.win/?zone=NO4&date=${tomorrowsDate()}&key=${keyPowerApi}`
const powerPriceUrlTomorrowZone5 = `https://playground-norway-power.ffail.win/?zone=NO5&date=${tomorrowsDate()}&key=${keyPowerApi}` */


// Updating prices for today for each zone
const job = schedule.scheduleJob('01 23 * * *', function () {

/*     function todaysDate() {

        const d = new Date();
        const currentHour = d.getHours()
        const checkDate = d.getDate()
        let ddIfDateIsNotTwoDigits = ""
        let todaysDate = ""
        const dd = d.getDate()
        const mm = d.getMonth() + 1
        const yy = d.getFullYear()
        if (dd < 10) {
            ddIfDateIsNotTwoDigits = "0" + dd
            todaysDate = yy + "-" + mm + "-" + ddIfDateIsNotTwoDigits
            return todaysDate
        }
    
        else {
            todaysDate = yy + "-" + mm + "-" + dd
            return todaysDate
        }
        
    } */

    function tomorrowsDate() {

        const todayInMilliSeconds = new Date().getTime()
        const milliSecondsInOneDay = 24 * 60 * 60 * 1000
        const tomorrowInMilliseconds = todayInMilliSeconds + milliSecondsInOneDay
        const tomorrow = new Date(tomorrowInMilliseconds)
        const tomorrowDayOnly = tomorrow.getDate()
        let tomorrowDayOnlyIfDateIsNotTwoDigits = "" 
        let tomorrowsDate = "" 
        const tomorrowMonthOnly = tomorrow.getMonth() + 1
        const tomorrowYearOnly = tomorrow.getFullYear()

        if (tomorrowDayOnly < 10) {
            tomorrowDayOnlyIfDateIsNotTwoDigits = "0" + tomorrowDayOnly
            tomorrowsDate = tomorrowYearOnly + "-" + tomorrowMonthOnly + "-" + tomorrowDayOnlyIfDateIsNotTwoDigits
            return tomorrowsDate 
        }

        else {
            const tomorrowsDate = tomorrowYearOnly + "-" + tomorrowMonthOnly + "-" + tomorrowDayOnly
            return tomorrowsDate

        }

    }



    

    // const powerPriceUrlTodayZone1 = `https://playground-norway-power.ffail.win/?zone=NO1&date=${tomorrowsDate()}&key=${keyPowerApi}`
    const powerPriceUrlTodayZone1 = `https://norway-power.ffail.win/?zone=NO1&date=${tomorrowsDate()}&key=${keyPowerApi}`



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
const jobTomorrow = schedule.scheduleJob('01 13 * * *', function () {

    function tomorrowsDate() {

        const todayInMilliSeconds = new Date().getTime()
        const milliSecondsInOneDay = 24 * 60 * 60 * 1000
        const tomorrowInMilliseconds = todayInMilliSeconds + milliSecondsInOneDay
        const tomorrow = new Date(tomorrowInMilliseconds)
        const tomorrowDayOnly = tomorrow.getDate()
        let tomorrowDayOnlyIfDateIsNotTwoDigits = "" 
        let tomorrowsDate = "" 
        const tomorrowMonthOnly = tomorrow.getMonth() + 1
        const tomorrowYearOnly = tomorrow.getFullYear()

        if (tomorrowDayOnly < 10) {
            tomorrowDayOnlyIfDateIsNotTwoDigits = "0" + tomorrowDayOnly
            tomorrowsDate = tomorrowYearOnly + "-" + tomorrowMonthOnly + "-" + tomorrowDayOnlyIfDateIsNotTwoDigits
            return tomorrowsDate 
        }

        else {
            const tomorrowsDate = tomorrowYearOnly + "-" + tomorrowMonthOnly + "-" + tomorrowDayOnly
            return tomorrowsDate

        }

    }

   

    console.log(tomorrowsDate());

   // const powerPriceUrlTomorrowZone1 = `https://playground-norway-power.ffail.win/?zone=NO1&date=${tomorrowsDate()}&key=${keyPowerApi}`

     const powerPriceUrlTomorrowZone1 = `https://norway-power.ffail.win/?zone=NO1&date=${tomorrowsDate()}&key=${keyPowerApi}`


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

    /*         fetch(powerPriceUrlTomorrowZone2)
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
