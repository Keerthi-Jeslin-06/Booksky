// Select popup elements
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

// Open popup
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

// Cancel popup
var cancelpopup = document.getElementById("cancel-book")
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

// Add book
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click", function (event) {
    event.preventDefault()

    if (
        booktitleinput.value === "" ||
        bookauthorinput.value === "" ||
        bookdescriptioninput.value === ""
    ) {
        alert("Please fill all fields")
        return
    }

    var div = document.createElement("div")
    div.setAttribute("class", "book-container")

    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="this.parentElement.remove()">Delete</button>
    `

    container.append(div)

    // Clear inputs
    booktitleinput.value = ""
    bookauthorinput.value = ""
    bookdescriptioninput.value = ""

    // Close popup
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})