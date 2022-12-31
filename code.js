const app = require("express")();
const fetch = require("node-fetch");
const PORT = 8080;
const schedule = require("node-schedule");
require("dotenv").config();

app.listen(process.env.PORT || PORT, () =>
  console.log("its running on port " + PORT)
);

const keyPowerApi = process.env.KEY;

let powerPriceTodayZone1 = null;
let powerPriceTodayZone2 = null;
let powerPriceTodayZone3 = null;
let powerPriceTodayZone4 = null;
let powerPriceTodayZone5 = null;

let powerPriceTomorrowZone1 = null;
let powerPriceTomorrowZone2 = null;
let powerPriceTomorrowZone3 = null;
let powerPriceTomorrowZone4 = null;
let powerPriceTomorrowZone5 = null;

// Updating prices for today for each zone
const job = schedule.scheduleJob("01 23 * * *", function () {
  function tomorrowsDate() {
    const todayInMilliSeconds = new Date().getTime();
    const milliSecondsInOneDay = 24 * 60 * 60 * 1000;
    const tomorrowInMilliseconds = todayInMilliSeconds + milliSecondsInOneDay;
    const tomorrow = new Date(tomorrowInMilliseconds);
    const tomorrowDayOnly = tomorrow.getDate();
    let tomorrowDayOnlyIfDateIsNotTwoDigits = "";
    let tomorrowsDate = "";
    const tomorrowMonthOnly = tomorrow.getMonth() + 1;
    const tomorrowYearOnly = tomorrow.getFullYear();

    if (tomorrowDayOnly < 10) {
      tomorrowDayOnlyIfDateIsNotTwoDigits = "0" + tomorrowDayOnly;
    } else {
      tomorrowDayOnlyIfDateIsNotTwoDigits = tomorrowDayOnly;
    }

    if (tomorrowMonthOnly < 10) {
      tomorrowsDate =
        tomorrowYearOnly +
        "-0" +
        tomorrowMonthOnly +
        "-" +
        tomorrowDayOnlyIfDateIsNotTwoDigits;
    } else {
      tomorrowsDate =
        tomorrowYearOnly +
        "-" +
        tomorrowMonthOnly +
        "-" +
        tomorrowDayOnlyIfDateIsNotTwoDigits;
    }

    return tomorrowsDate;
  }

  // prod

  const powerPriceUrlTodayZone1 = `https://norway-power.ffail.win/?zone=NO1&date=${tomorrowsDate()}&key=${keyPowerApi}`;
  const powerPriceUrlTodayZone2 = `https://norway-power.ffail.win/?zone=NO2&date=${tomorrowsDate()}&key=${keyPowerApi}`;
  const powerPriceUrlTodayZone3 = `https://norway-power.ffail.win/?zone=NO3&date=${tomorrowsDate()}&key=${keyPowerApi}`;
  const powerPriceUrlTodayZone4 = `https://norway-power.ffail.win/?zone=NO4&date=${tomorrowsDate()}&key=${keyPowerApi}`;
  const powerPriceUrlTodayZone5 = `https://norway-power.ffail.win/?zone=NO5&date=${tomorrowsDate()}&key=${keyPowerApi}`;

  // test

  /*  const powerPriceUrlTodayZone1 = `https://playground-norway-power.ffail.win/?zone=NO1&date=${tomorrowsDate()}&key=${keyPowerApi}`
       const powerPriceUrlTodayZone2 = `https://playground-norway-power.ffail.win/?zone=NO2&date=${tomorrowsDate()}&key=${keyPowerApi}`
       const powerPriceUrlTodayZone3 = `https://playground-norway-power.ffail.win/?zone=NO3&date=${tomorrowsDate()}&key=${keyPowerApi}`
       const powerPriceUrlTodayZone4 = `https://playground-norway-power.ffail.win/?zone=NO4&date=${tomorrowsDate()}&key=${keyPowerApi}`
       const powerPriceUrlTodayZone5 = `https://playground-norway-power.ffail.win/?zone=NO5&date=${tomorrowsDate()}&key=${keyPowerApi}` */

  fetch(powerPriceUrlTodayZone1)
    .then((response) => response.json())
    .then((data) => {
      powerPriceTodayZone1 = data;
      console.log(powerPriceTodayZone1);
    });

  fetch(powerPriceUrlTodayZone2)
    .then((response) => response.json())
    .then((data) => {
      powerPriceTodayZone2 = data;
    });

  fetch(powerPriceUrlTodayZone3)
    .then((response) => response.json())
    .then((data) => {
      powerPriceTodayZone3 = data;
    });

  fetch(powerPriceUrlTodayZone4)
    .then((response) => response.json())
    .then((data) => {
      powerPriceTodayZone4 = data;
    });

  fetch(powerPriceUrlTodayZone5)
    .then((response) => response.json())
    .then((data) => {
      powerPriceTodayZone5 = data;
    });
});

app.get("/powerprice-zone1", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send({
    powerPriceTodayZone1,
  });
});

app.get("/powerprice-zone2", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send({
    powerPriceTodayZone2,
  });
});

app.get("/powerprice-zone3", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send({
    powerPriceTodayZone3,
  });
});

app.get("/powerprice-zone4", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send({
    powerPriceTodayZone4,
  });
});

app.get("/powerprice-zone5", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send({
    powerPriceTodayZone5,
  });
});

// Updating prices for tomorrow for each zone
const jobTomorrow = schedule.scheduleJob("01 13 * * *", function () {
  function tomorrowsDate() {
    const todayInMilliSeconds = new Date().getTime();
    const milliSecondsInOneDay = 24 * 60 * 60 * 1000;
    const tomorrowInMilliseconds = todayInMilliSeconds + milliSecondsInOneDay;
    const tomorrow = new Date(tomorrowInMilliseconds);
    const tomorrowDayOnly = tomorrow.getDate();
    let tomorrowDayOnlyIfDateIsNotTwoDigits = "";
    let tomorrowsDate = "";
    const tomorrowMonthOnly = tomorrow.getMonth() + 1;
    const tomorrowYearOnly = tomorrow.getFullYear();

    if (tomorrowDayOnly < 10) {
      tomorrowDayOnlyIfDateIsNotTwoDigits = "0" + tomorrowDayOnly;
    } else {
      tomorrowDayOnlyIfDateIsNotTwoDigits = tomorrowDayOnly;
    }

    if (tomorrowMonthOnly < 10) {
      tomorrowsDate =
        tomorrowYearOnly +
        "-0" +
        tomorrowMonthOnly +
        "-" +
        tomorrowDayOnlyIfDateIsNotTwoDigits;
    } else {
      tomorrowsDate =
        tomorrowYearOnly +
        "-" +
        tomorrowMonthOnly +
        "-" +
        tomorrowDayOnlyIfDateIsNotTwoDigits;
    }

    return tomorrowsDate;
  }

  console.log(tomorrowsDate());

  // dev

  /* const powerPriceUrlTomorrowZone1 = `https://playground-norway-power.ffail.win/?zone=NO1&date=${tomorrowsDate()}&key=${keyPowerApi}`
    const powerPriceUrlTomorrowZone2 = `https://playground-norway-power.ffail.win/?zone=NO2&date=${tomorrowsDate()}&key=${keyPowerApi}`
    const powerPriceUrlTomorrowZone3 = `https://playground-norway-power.ffail.win/?zone=NO3&date=${tomorrowsDate()}&key=${keyPowerApi}`
    const powerPriceUrlTomorrowZone4 = `https://playground-norway-power.ffail.win/?zone=NO4&date=${tomorrowsDate()}&key=${keyPowerApi}`
    const powerPriceUrlTomorrowZone5 = `https://playground-norway-power.ffail.win/?zone=NO5&date=${tomorrowsDate()}&key=${keyPowerApi}` */

  // prod

  const powerPriceUrlTomorrowZone1 = `https://norway-power.ffail.win/?zone=NO1&date=${tomorrowsDate()}&key=${keyPowerApi}`;
  const powerPriceUrlTomorrowZone2 = `https://norway-power.ffail.win/?zone=NO2&date=${tomorrowsDate()}&key=${keyPowerApi}`;
  const powerPriceUrlTomorrowZone3 = `https://norway-power.ffail.win/?zone=NO3&date=${tomorrowsDate()}&key=${keyPowerApi}`;
  const powerPriceUrlTomorrowZone4 = `https://norway-power.ffail.win/?zone=NO4&date=${tomorrowsDate()}&key=${keyPowerApi}`;
  const powerPriceUrlTomorrowZone5 = `https://norway-power.ffail.win/?zone=NO5&date=${tomorrowsDate()}&key=${keyPowerApi}`;

  fetch(powerPriceUrlTomorrowZone1)
    .then((response) => response.json())
    .then((data) => {
      powerPriceTomorrowZone1 = data;
      console.log(powerPriceTomorrowZone1);
    });

  fetch(powerPriceUrlTomorrowZone2)
    .then((response) => response.json())
    .then((data) => {
      powerPriceTomorrowZone2 = data;
    });

  fetch(powerPriceUrlTomorrowZone3)
    .then((response) => response.json())
    .then((data) => {
      powerPriceTomorrowZone3 = data;
    });

  fetch(powerPriceUrlTomorrowZone4)
    .then((response) => response.json())
    .then((data) => {
      powerPriceTomorrowZone4 = data;
    });

  fetch(powerPriceUrlTomorrowZone5)
    .then((response) => response.json())
    .then((data) => {
      powerPriceTomorrowZone5 = data;
    });
});

app.get("/powerprice-zone1-tomorrow", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send({
    powerPriceTomorrowZone1,
  });
});

app.get("/powerprice-zone2-tomorrow", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send({
    powerPriceTomorrowZone2,
  });
});

app.get("/powerprice-zone3-tomorrow", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send({
    powerPriceTomorrowZone3,
  });
});

app.get("/powerprice-zone4-tomorrow", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send({
    powerPriceTomorrowZone4,
  });
});

app.get("/powerprice-zone5-tomorrow", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send({
    powerPriceTomorrowZone5,
  });
});
