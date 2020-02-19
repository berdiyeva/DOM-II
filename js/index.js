// Your code goes here


// Navigation background color change
const navColor = document.querySelector("header")
// console.log(navColor)
navColor.addEventListener("mouseenter", (e) => {
    e.target.style.background = "#f5e9ba";
}, true)
navColor.addEventListener("mouseleave", (e) => {
    e.target.style.background = "";
}, true)


//Logo styling
const logoText = document.querySelector(".logo-heading")
// console.log(logoText)
logoText.addEventListener("dblclick", () => {
    logoText.textContent = "Yellow Bus"
    logoText.style.color = "#b39c09"
    logoText.style.border = "solid #b39c09"
})
// logoText.addEventListener("dblclick", () => {
//     logoText.textContent = ""
//     logoText.style.color = ""
//     logoText.style.border = ""
// })


// Navigation elements color change
document.querySelectorAll("a").forEach(element => {
    element.addEventListener("click", () => {
        //highlight the mouse enter target
        element.style.color = "#a15233";
        //reset the color after a short delay
        setTimeout(function() {
            e.target.style.color = "";
        }, 500);
    })
});


// Image gets smaller and bigger in main content
document.querySelectorAll(".img-content").forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(0.9)";
        element.style.transition = "all 0.2s"
    })
    element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1.0)";
        element.style.transition = "all 0.2s"
    })
})

// Text card gets bigger and smaller in main content
document.querySelectorAll(".text-content").forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.transform = "scale(1.1)";
        element.style.transition = "all 0.2s"
    })
    element.addEventListener("mouseleave", () => {
        element.style.transform = "scale(1.0)";
        element.style.transition = "all 0.2s"
    })
})


// Destinations 
document.querySelectorAll(".destination").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.background = "#e3d36b"
        element.style.borderRadius = "5%"
    })
    element.addEventListener("mouseleave", () => {
        element.style.background = "white"
    })
})

// Buttons
// document.querySelectorAll(".btn").forEach(element => {
//     element.addEventListener("click", () => {
//         element.style.background = "yellow"
//     })