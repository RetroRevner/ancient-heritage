let user = JSON.parse(localStorage.getItem("user"));
let Button = document.getElementById("sign-btn");
let Icon = document.getElementById("icon");
if (user) {
    Icon.style.display = "block";
    Button.style.display = "none";
}

function changeMod() {
    let changer = document.querySelector(".mode-cnt");
    let iframe = document.getElementById("map-iframe");
    if (!changer.classList.contains("light")) {
        changer.classList.add("light");
        document.body.classList.add("light");
        document.querySelector(".sun2").classList.add("light");
        document.querySelector(".span1").classList.add("light");
        document.querySelector(".moon").classList.add("light");
        document.querySelector(".nav-bar").classList.add("light");
        document.querySelector(".footer").classList.add("light");
        document.querySelector(".sign-btn").classList.add("light");
        document.querySelector(".icon").classList.add("light");
        document.querySelectorAll(".nav-links a").forEach(e => {
            if (e.classList.contains("active")) {
                e.classList.replace("active", "active-light");
            }
            else {
                e.classList.add("light");
            }
        })
        document.querySelectorAll(".footer-links a").forEach(e => {
            if (e.classList.contains("active")) {
                e.classList.replace("active", "active-light");
            }
            else {
                e.classList.add("light");
            }
        })
        setTimeout(() => {
            document.querySelector(".moon2").classList.add("light");
            document.querySelector(".sun").classList.add("light");
        }, 100)
        iframe.contentDocument.getElementById("map-dark").style.opacity = "0";
        iframe.contentDocument.getElementById("map-light").style.opacity = "1";
    }
    else {
        changer.classList.remove("light");
        document.body.classList.remove("light");
        document.querySelector(".nav-bar").classList.remove("light");
        document.querySelector(".span1").classList.remove("light");
        document.querySelector(".moon2").classList.remove("light");
        document.querySelector(".sun").classList.remove("light");
        document.querySelector(".sign-btn").classList.remove("light");
        document.querySelector(".icon").classList.remove("light");
        document.querySelector(".footer").classList.remove("light");
        document.querySelectorAll(".nav-links a").forEach(e => {
            if (e.classList.contains("active-light")) {
                e.classList.replace("active-light", "active");
            }
            else {
                e.classList.remove("light");
            }
        })
        document.querySelectorAll(".footer-links a").forEach(e => {
            if (e.classList.contains("active-light")) {
                e.classList.replace("active-light", "active");
            }
            else {
                e.classList.remove("light");
            }
        })
        setTimeout(() => {
            document.querySelector(".sun2").classList.remove("light");
            document.querySelector(".moon").classList.remove("light");
        }, 100)
        iframe.contentDocument.getElementById("map-dark").style.opacity = "1";
        iframe.contentDocument.getElementById("map-light").style.opacity = "0";
    }
}
