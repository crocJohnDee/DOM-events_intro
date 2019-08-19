// events and event listeners (event handlers)

//takes 2 args. the handling and the  event (callback)
// document.addEventListener("mousedown", (e) => {
//     alert("Mouse Pressed");
//     console.log(e);

// })

//-----------------------------------------

//Event.preventDefault()

// We use this ethod when we DO NOT want an HTML element to behave in its default manner.
let link = document.querySelector("a");
// This is the method to access the first matched element.
link.addEventListener("click", (e) => {
    console.log("something");
    e.preventDefault();
})

//------------------------------------------

// Event.stopPropagation
// Events flow upwards

// document.getElementById("button12").addEventListener("mousedown", (e) => {
//     alert("Button clicked");
//     if (e.button === 2) {
//         e.stopPropagation();
//     }
// });

// // Event listener on the paragraph element with its logic

// document.getElementById("demo").addEventListener("mousedown", (e) => {
//     alert("Paragraph clicked")
// })

// -------------------------------------------------

// remove an event listener from an element
// in order to remove an event listener from an element, wee need to call the romveEventListener method with the event name and the function name

// let heading = document.querySelector("h1");

// function listener(e) {
//     if (e.type === "mouseenter") {
//         heading.style.color = "orangered";
//     } else if (e.type === "mouseleave") {
//         heading.style.color = "chartreuse";
//         heading.removeEventListener("mouseleave", listener);
//     }
//     console.log(e);
// }

// heading.addEventListener("mouseenter", listener);
// heading.addEventListener("mouseleave", listener);

//---------------------------------------------------

// DOM ContentLoaded
// if you want to take some action once the HTML scripts have been loaded, you use DOMContendLoaded

// function onLoad(e) {
//     console.log(e);
//     alert("Page has loaded")
// }

// document.addEventListener("DOMContentLoaded", onLoad);

// keyup

// let input = document.querySelector("input");

// function onKeyUpEvent(e) {
//     console.log(e);
//     console.log(e.key + " was pressed");
// }

// input.addEventListener("keyup", onKeyUpEvent);

// ----------------------------------------------

// Form Events
// submit

function logSubmit(e) {
    log.textContent = `Form Submitted! Time Stamp ${e.timeStamp}`;
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(formData.get("name"));
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);


// reset

function logReset(e) {
    resetLog.textContent = `Form reset! Time stamp ${e.timeStamp}`;
}

const resetLog = document.getElementById("reset-log");
form.addEventListener("reset", logReset);
