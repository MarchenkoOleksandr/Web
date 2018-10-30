"use strict";

var select = document.getElementById("selectCurrency"),
prices = document.getElementsByClassName("prices"),
hours = document.getElementsByClassName("hours"),
days = document.getElementsByClassName("days"),
weeks = document.getElementsByClassName("weeks"),
months = document.getElementsByClassName("months"),
currencyObj = {},
hoursFlag = false,
daysFlag = false,
weeksFlag = false,
monthsFlag = false,
xhr = new XMLHttpRequest;
selectValue();
var checkbox = document.getElementsByClassName("checkbox"),
checkboxChecked = [];

function selectValue(){
    new Promise(function(e,n){
        xhr.open("GET", select.value, true),
        xhr.onload=function(){
            return e(xhr.responseText)
        },
        xhr.onerror=function(){
            return n(xhr.statusText)
        }
        xhr.send()
    }).then(function(e){

        currencyObj = JSON.parse(e);
        for (var n = 0; n < prices.length; n++){
            checkbox[n].checked = false;
            prices[n].innerHTML = select[select.selectedIndex].id + currencyObj.ask;
            hoursFlag=currencyObj.changes.price.hour < 0;
            hours[n].innerHTML="<span>+</span>" + currencyObj.changes.price.hour + select[select.selectedIndex].id;
            hours[n].classList.toggle("text-red", hoursFlag);
            daysFlag = currencyObj.changes.price.day < 0;
            days[n].innerHTML = "<span>+</span>" + currencyObj.changes.price.day + select[select.selectedIndex].id;
            days[n].classList.toggle("text-red", daysFlag);
            weeksFlag = currencyObj.changes.price.week < 0;
            weeks[n].innerHTML = "<span>+</span>" + currencyObj.changes.price.week + select[select.selectedIndex].id;
            weeks[n].classList.toggle("text-red", weeksFlag);
            monthsFlag = currencyObj.changes.price.month < 0;
            months[n].innerHTML = "<span>+</span>" + currencyObj.changes.price.month + select[select.selectedIndex].id;
            months[n].classList.toggle("text-red", monthsFlag)
        }
    },
        function(e){ })
    }

    function toggleCheck(){
        for (var e = 0; e < checkbox.length; e++)
        checkboxChecked[e] = checkbox[e].checked,
        checkboxChecked[e]?(hoursFlag = currencyObj.changes.percent.hour < 0,
        hours[e].innerHTML = "<span>+</span>" + currencyObj.changes.percent.hour + "%",
        hours[e].classList.toggle("text-red",hoursFlag),
        daysFlag = currencyObj.changes.percent.day < 0,
        days[e].innerHTML = "<span>+</span>" + currencyObj.changes.percent.day + "%",
        days[e].classList.toggle("text-red", daysFlag),
        weeksFlag = currencyObj.changes.percent.week < 0,
        weeks[e].innerHTML = "<span>+</span>" + currencyObj.changes.percent.week + "%",
        weeks[e].classList.toggle("text-red", weeksFlag),
        monthsFlag = currencyObj.changes.percent.month < 0,
        months[e].innerHTML = "<span>+</span>" + currencyObj.changes.percent.month + "%",
        months[e].classList.toggle("text-red", monthsFlag)):(hoursFlag = currencyObj.changes.price.hour < 0,
        hours[e].innerHTML = "<span>+</span>" + currencyObj.changes.price.hour + select[select.selectedIndex].id,
        hours[e].classList.toggle("text-red", hoursFlag),
        daysFlag = currencyObj.changes.price.day < 0,
        days[e].innerHTML = "<span>+</span>" + currencyObj.changes.price.day + select[select.selectedIndex].id,
        days[e].classList.toggle("text-red", daysFlag),
        weeksFlag = currencyObj.changes.price.week < 0,
        weeks[e].innerHTML = "<span>+</span>" + currencyObj.changes.price.week + select[select.selectedIndex].id,
        weeks[e].classList.toggle("text-red", weeksFlag),
        monthsFlag = currencyObj.changes.price.month < 0,
        months[e].innerHTML = "<span>+</span>" + currencyObj.changes.price.month + select[select.selectedIndex].id,
        months[e].classList.toggle("text-red", monthsFlag))
    }

    $(document).ready(function(){
        $("#selectCurrency").niceSelect();
    });