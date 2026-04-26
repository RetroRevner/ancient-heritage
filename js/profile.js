let storeData = localStorage.getItem("user")
let userData = JSON.parse(storeData);

document.getElementById("userName").innerText= userData.Name;
document.getElementById("userEmail").innerText = userData.Email;







let Data = localStorage.getItem("favorite");
let artifactData = JSON.parse(Data);

for(let j of artifactData){
    let card = document.createElement("div");
    let pic = document.createElement("img");
    let picDiv = document.createElement("div");
    let textContainer = document.createElement("div");//creating elements for every piece of artifact
    let name = document.createElement("h2");
    let matrial = document.createElement("h5");
    let cardFooter = document.createElement("div");
    let categ = document.createElement("h6");
    let iconDiv = document.createElement("div");
    let icon = document.createElement("i");

    icon.classList.add("fa-solid", "fa-heart", "heart-icon");
    iconDiv.classList.add("iconBox");
    cardFooter.classList.add("cardFooter");//adding classes 
    textContainer.classList.add("text");
    picDiv.classList.add("picture");
    card.classList.add("container");

    card.appendChild(picDiv);
    picDiv.appendChild(pic);
    card.appendChild(textContainer);
    textContainer.appendChild(matrial);
    textContainer.appendChild(name);
    textContainer.appendChild(cardFooter);
    cardFooter.appendChild(categ,iconDiv);
    cardFooter.appendChild(iconDiv);
    iconDiv.appendChild(icon);
    
    

    pic.setAttribute("src",j.image);
    name.innerText= j.artifactName;
    matrial.innerText= j.header;
    categ.innerText= j.category;


    document.querySelector(".fav").appendChild(card)
}

