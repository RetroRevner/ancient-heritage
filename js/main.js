let log = JSON.parse(localStorage.getItem("log"));
let Button = document.getElementById("sign-btn");
let Icon = document.getElementById("icon");
if (log) {
    Icon.style.display = "none";
    Button.style.display = "block";
} else {
    Icon.style.display = "block";
    Button.style.display = "none";
}

function changeMod() {
    document.querySelector(".mode-cnt").classList.toggle("light");
    document.body.classList.toggle("light");
    document.querySelector(".span1").classList.toggle("light");
    document.querySelector(".nav-bar").classList.toggle("light");
    document.querySelector(".footer").classList.toggle("light");
    document.querySelector(".sign-btn").classList.toggle("light");
    document.querySelector(".icon").classList.toggle("light");
    document.querySelectorAll(".nav-links a").forEach(e => {
        if (e.classList.contains("active")) {
            e.classList.toggle("active-light");
        }
        else {
            e.classList.toggle("light");
        }
    })

    document.querySelectorAll(".footer-links a").forEach(e => {
        if (e.classList.contains("active")) {
            e.classList.toggle("active-light");
        }
        else {
            e.classList.toggle("light");
        }
    })

    setTimeout(() => {
        document.querySelector(".sun").classList.toggle("light");
        document.querySelector(".moon").classList.toggle("light");
        document.querySelector(".sun2").classList.toggle("light");
        document.querySelector(".moon2").classList.toggle("light");
    }, 100)
    if (document.querySelector(".span1").classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}
if (document.querySelector(".span1").classList.contains("light")) {
    localStorage.setItem("theme", "light");
} else {
    localStorage.setItem("theme", "dark");
}
let saved = localStorage.getItem("theme");
if (saved === "light") {
    changeMod();
}
