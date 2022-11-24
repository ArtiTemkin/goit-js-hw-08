var throttle = require('lodash.throttle');

const email = document.querySelector('input');
const message = document.querySelector('textarea');

function saveEmailToLocalStorage ()  {
    const dataJSON = window.localStorage.getItem("feedback-form-state")

    let data = {
        email: "",
        message: ""
    };
    if (dataJSON !== null) {
        data = JSON.parse(dataJSON)
        data.email = email.value

    } else {
        data.email=email.value
        
    }
    throttledUpdateLocalStorage(JSON.stringify(data)) 
}

function savemessageToLocalStorage() {
    const dataJSON = window.localStorage.getItem("feedback-form-state")

    let data = {
        email: "",
        message: ""
    };
    if (dataJSON !== null) {
        data = JSON.parse(dataJSON)
        data.message = message.value

    } else {
        data.message = message.value
    }
    throttledUpdateLocalStorage(JSON.stringify(data)) 
}

let throttledUpdateLocalStorage = throttle(updateLocalStorage, 500);

function updateLocalStorage(json) {
    window.localStorage.setItem("feedback-form-state", json)
}

email.oninput = saveEmailToLocalStorage
message.oninput = savemessageToLocalStorage

// player.on("timeupdate", throttle((data) => saveCurrentTime(data),1000)) 

window.onload = function () {
    loadFormData()
}

function loadFormData() {
    const dataJson = window.localStorage.getItem("feedback-form-state")

    if (dataJson !==null) {
        const data = JSON.parse(dataJson)
        email.value = data.email !== null ? data.email : ""
        message.value = data.message !== null ? data.message : ""
    }
}

function dataSubmit(event) {
    event.preventDefault()
    const JSONFromStorage = window.localStorage.getItem("feedback-form-state");
    const dataFromStorage = JSON.parse(JSONFromStorage)
    console.log(dataFromStorage)

    email.value = "";
    message.value = "";
    
    window.localStorage.clear()
}

const form = document.querySelector("form");
form.addEventListener("submit", dataSubmit)
