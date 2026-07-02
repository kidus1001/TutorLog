// const listItems = document.querySelectorAll("li");

// function toggleDone (e) {
//     if (!e.target.className) {
//         e.target.className = "done";
//     } else {
//         e.target.className = "";
//     }
// }


// listItems.forEach((item) => {
//     item.addEventListener("click", toggleDone);
// });



// const headingText = document.querySelector("h1");
// headingText.textContent = "papa";


// const image = document.querySelector("img");

// image.addEventListener ("click", ()=> {
//     const mySrc = image.getAttribute("src");
//     if (mySrc === "images/begenatem.jpg") {
//         image.setAttribute("src", "images/download.png");
//     } else {
//         image.setAttribute ("src", "images/begenatem.jpg");
//     }
// })


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
    const Name = prompt("Please enter your name: ");
    if (Name) {
    localStorage.setItem("name", Name);
    myHeading.textContent = `Welcome brother, ${Name}`;
    } else {
        setUserName();
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome back brother, ${storedName}`
}

myButton.addEventListener ("click", ()=> {
    setUserName();
})