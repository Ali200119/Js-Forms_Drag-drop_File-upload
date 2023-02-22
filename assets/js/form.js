"use strict"

// Drag and drop


// let header = document.querySelector("h1");
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     header.innerText = form.lastElementChild.previousElementSibling.previousElementSibling.value;

//     if (form.lastElementChild.previousElementSibling.previousElementSibling.value == "") {
//         form.lastElementChild.previousElementSibling.style.display = "inline";
//     }

//     else {
//         form.lastElementChild.previousElementSibling.style.display = "none";
//     }
// })

// let a = document.querySelector("a");

// a.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("Clicked");
// })

// let dragElem = document.getElementById("dragElement");
// let dropElem = document.getElementById("dropElement");


// dragElem.addEventListener("drag", function() {
//     console.log("Draging");
// })

// dragElem.addEventListener("dragend", function() {
//     console.log("Draging end");
// })



// dragElem.addEventListener("dragstart", function (event) {
//     event.dataTransfer.setData("id", this.getAttribute("id"));
// })

// dropElem.addEventListener("dragover", function (event) {
//     event.preventDefault();
// })

// dropElem.addEventListener("drop", function (event) {
//     let id = event.dataTransfer.getData("id");

//     this.append(document.getElementById(id));
// })

// let dragElems = document.querySelectorAll("main .leftside-elements .item");
// let dropElem = document.getElementById("dropElement");

// for (const item of dragElems) {
//     item.addEventListener("dragstart", function(event) {
//         event.dataTransfer.setData("id", this.getAttribute("id"));
//     })
// }

// dropElem.addEventListener("dragover", function (event) {
//     event.preventDefault();
// })

// dropElem.addEventListener("drop", function (event) {
//     let id = event.dataTransfer.getData("id");

//     this.append(document.getElementById(id));
// })





//File upload

let uploadElem = document.querySelector("main .upload");
let uploadArea = document.querySelector("main .upload-area");
let table = document.querySelector("main .image-data .table");

uploadArea.addEventListener("click", function () {
    uploadElem.click();
})

uploadElem.addEventListener("change", function (event) {
    table.parentNode.style.display = "block";

    for (const file of event.target.files) {
        let reader = new FileReader();

        reader.onloadend = (ev) => {
            let fileBase64 = ev.target.result;

            table.innerHTML += `<tr>
                <td>${file.name}</td>
                <td>${file.size / 1024} Kb</td>
                <td><img src="${fileBase64}"></td>
            </tr>`
        }

        reader.readAsDataURL(file);
    }
})

uploadArea.addEventListener("dragover", function (e) {
    e.preventDefault();
})

uploadArea.addEventListener("drop", function (e) {
    e.preventDefault();
    let files = e.dataTransfer.files;

    table.parentNode.style.display = "block";

    for (const file of files) {
        let reader = new FileReader();

        reader.onloadend = (ev) => {
            let fileBase64 = ev.target.result;

            table.innerHTML += `<tr>
                <td>${file.name}</td>
                <td>${file.size / 1024} Kb</td>
                <td><img src="${fileBase64}"></td>
            </tr>`
        }

        reader.readAsDataURL(file);
    }
})