// special coutdown
let daysitem = document.querySelector("#days");
let hoursitem = document.querySelector("#hours");
let minitem = document.querySelector("#min");
let secitem = document.querySelector("#sec");


let coutdown = () =>   {
   let currentdate = new Date();
    let futuredate = new Date("31 oct 2022")
    let mydate = futuredate - currentdate;

    let days = Math.floor(mydate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(mydate / 1000 / 60 / 60) % 24;
    let min = Math.floor(mydate / 1000 / 60) % 60;
    let sec = Math.floor(mydate / 1000) % 60;
    
    daysitem.innerHTML = days;
    hoursitem.innerHTML = hours;
    minitem.innerHTML = min;
    secitem.innerHTML = sec;  
 }
    coutdown()

    setInterval(coutdown, 1000)


