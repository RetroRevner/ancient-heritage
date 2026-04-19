let page = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a, .footer-links a, .sign a").forEach(link => {
    let linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === page) {
        link.classList.add("active");
    }
});