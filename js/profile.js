let storeData = localStorage.getItem("user")
let userData = JSON.parse(storeData);

if (userData.Name) {
    document.getElementById("userName").innerText = "Hello " + userData.Name;
    document.getElementById("userEmail").innerText = userData.Email;
}

function removeFromLocal(key, id) {
    let savedItems = JSON.parse(localStorage.getItem(key)) || [];
    let updatedItems = savedItems.filter(el => el.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedItems));
}





let Data = localStorage.getItem("favorite");
let artifactData = JSON.parse(Data);


if (localStorage.getItem("favorite") === null) {
    document.getElementById("art").innerText = "add something you like!";
}

for (let j of artifactData || []) {
    let card = document.createElement("div");
    let pic = document.createElement("img");
    let picDiv = document.createElement("div");
    let textContainer = document.createElement("div");//creating elements for every piece of artifact
    let nameInfo = document.createElement("div");
    let name = document.createElement("h2");
    let matrial = document.createElement("h5");
    let cardFooter = document.createElement("div");
    let categ = document.createElement("h6");
    let iconDiv = document.createElement("div");
    let icon = document.createElement("i");
    let icon2 = document.createElement("i");
    let link = document.createElement("a");
    link.setAttribute("href", "search.html")
    icon.classList.add("fa-solid", "fa-heart", "heart-icon");
    icon2.classList.add("fa-solid", "fa-arrow-right", "arrow");

    icon.onclick = () => {
        removeFromLocal("favorite", j.id);
        card.remove();
        let remainingCards = document.querySelectorAll(".container");
        if (remainingCards.length === 0) {
            document.getElementById("art").innerText = "add something you like!";
        }
    };

    iconDiv.classList.add("iconBox");
    cardFooter.classList.add("cardFooter");//adding classes 
    textContainer.classList.add("text");
    picDiv.classList.add("picture");
    card.classList.add("container");
    nameInfo.classList.add("nameInfo")

    card.appendChild(picDiv);
    picDiv.appendChild(pic);
    card.appendChild(textContainer);
    nameInfo.appendChild(matrial);
    nameInfo.appendChild(name);
    textContainer.appendChild(nameInfo)
    textContainer.appendChild(cardFooter);
    cardFooter.appendChild(categ);
    cardFooter.appendChild(iconDiv);
    iconDiv.appendChild(icon);
    link.appendChild(icon2)
    iconDiv.appendChild(link);



    pic.setAttribute("src", j.image);
    name.innerText = j.artifactName;
    matrial.innerText = j.header;
    categ.innerText = j.category;


    document.querySelector(".fav").appendChild(card)
}

let main = document.querySelector("main");
function homeMod() {
    document.querySelector(".userName").classList.toggle("light");
    document.querySelector(".userEmail").classList.toggle("light");
    document.querySelector(".profilePic").classList.toggle("light");
    let x = document.querySelector(".profilePic");
    if (x.classList.contains("light")) {
        x.src = "../assets/Logos/Gemini_Generated_Image_ojby77ojby77ojby.png";
        x.style.width = "150px";
        x.style.height = "150px";
        x.style.transition = "1ms ease-in-out"
        x.style.border = "2px solid var(--big-text-light)";
    }
    else {
        x.src = "../assets/Logos/Gemini_Generated_Image_fbvl9mfbvl9mfbvl.png";
    }
    document.querySelector(".log").classList.toggle("light");
    document.querySelector(".btn").classList.toggle("light");
    document.querySelector(".art").classList.toggle("light");
    document.querySelector("#pop").classList.toggle("light");
    document.querySelector("hr").classList.toggle("light");

    let all = document.querySelectorAll(".container");
    all.forEach(container => {
        container.classList.toggle("light");
        container.querySelector(".nameInfo")?.classList.toggle("light");
        container.querySelector(".cardFooter")?.classList.toggle("light");
        container.querySelector(".iconBox")?.classList.toggle("light");
        container.querySelector(".arrow")?.classList.toggle("light");
    });
}

if (main.classList.contains("light")) {
    let currenS = localStorage.setItem("homeMod", "light");
}
else {
    let currentS = localStorage.setItem("homeMod", "dark");
}
let savedS = localStorage.getItem("homeMod");
let savedMod = localStorage.getItem("theme");
if (savedS !== savedMod) {
    homeMod();
}


function pop() {
    let box = document.createElement("div");
    box.classList.add("box");
    let icony = document.createElement("i");
    icony.classList.add("fa-solid", "fa-arrow-right-from-bracket", "icony");
    let heading = document.createElement("h1");
    heading.classList.add("heading");
    let warning = document.createElement("h4");
    warning.classList.add("warn");
    let hr = document.createElement("div");
    hr.classList.add("hr");
    let choice = document.createElement("div");
    choice.classList.add("choice");
    let yes = document.createElement("h4");
    let no = document.createElement("h4");
    yes.classList.add("yes");
    no.classList.add("no");
    document.querySelector("#pop").appendChild(box);


    box.appendChild(icony);
    box.appendChild(heading);
    box.appendChild(warning);
    box.appendChild(hr);
    box.appendChild(choice);
    choice.appendChild(no);
    choice.appendChild(yes);

    heading.innerText = "Sign Out"
    warning.innerText = "are you sure you want to sign out ?";
    yes.innerText = "sign out";
    no.innerText = "cancel";




    document.querySelector(".no" || ".no.light").onclick = () => { document.querySelector("#pop").removeChild(box); };
    document.querySelector(".yes" || ".yes.light").onclick = () => {
        let Button = document.getElementById("sign-btn");
        let Icon = document.getElementById("icon");
        Icon.style.display = "none";
        Button.style.display = "block";
        localStorage.removeItem("favorite");
        window.location.href = "../index.html";
        let log = "signedOut" ;
        localStorage.setItem('log', JSON.stringify(log));
    };

}