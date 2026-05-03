let current = null; //مكان لتخزين قيمة الصورة المضغوطة
let cnt = document.getElementById("information-container");
let iframe = document.getElementById("map-iframe");
const sounds = {
    "pyramid": new Audio("../assets/audios/pyramid.MP3"),
    "siwa": new Audio("../assets/audios/siwa.MP3"),
    "bahariya": new Audio("../assets/audios/bahariya.MP3"),
    "farafra": new Audio("../assets/audios/farafra.MP3"),
    "dakhla": new Audio("../assets/audios/dakhla.MP3"),
    "kharga": new Audio("../assets/audios/kharga.MP3"),
    "abu-simbel": new Audio("../assets/audios/abu-simbel.MP3"),
    "karnak": new Audio("../assets/audios/karnak.MP3")
};
function mapMod() {
    let imgs = iframe.contentDocument.querySelectorAll("#icons-container img");
    let p = iframe.contentDocument.querySelectorAll("#icons-container p");
    let map = iframe.contentDocument.getElementById("map");
    let btn = iframe.contentDocument.querySelectorAll("#zoom-btn button");
    btn.forEach(e => {
        e.classList.toggle("light");
    });
    cnt.classList.toggle("light");
    map.classList.toggle("light");
    imgs.forEach(e => {
        e.classList.toggle("light");
    })
    p.forEach(e => {
        e.classList.toggle("light");
    });
    document.getElementById("img").classList.toggle("light");
}
//----------------------------------------------------------------------------------------------------------------------------------

function selected(value) {
    // window.parent
    // iframeدي عشان الفانكشن بيتم استدعائها داخل الـ
    // فا مش بيكون شايف الكونتينر اصلا 
    // parentتخليه يخرج للـ
    // اللي هو صفحة الماب ويدور فيها
    let infoCnt = window.parent.document.getElementById("information-container");
    if (!infoCnt.classList.contains("selected") || current === value) { //يشوف لو الكونتينر معروض وتم الضغط على نفس الزرار
        infoCnt.classList.toggle("selected");
        window.parent.document.getElementById("map-container").classList.toggle("selected");
        window.parent.document.getElementById("map-iframe").classList.toggle("selected");
        window.parent.document.getElementById("map-main").classList.toggle("selected");
    }
    current = value; //بنعرف قيمة اخر زرار عشان لو دوسنا عليه تاني

    if (value == "pyramid") { //بنغير الصورة والمعلومات المعروضة على حسب القيمة المبعوتة
        infoCnt.innerHTML = `
            <p class="p1">Relic Focus</p>
            <p class="p2">The Great<br>Pyramid of Giza</p>
            <img src="../assets/images/Map-imgs/` + value + `.png" id="img" usemap="#image-map" draggable="false">
            <map name="image-map">
                <area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
                    coords="40,309,250,54,503,308" shape="poly">
            </map>
            <div id="selected-info">
                <p>
                    <label>ERA</label>
                    <br> Old Kingdom
                </p>
                <p>
                    <label>HEIGHT</label>
                    <br> 146.6m
                </p>
                <p>
                    <label>PHARAOH</label>
                    <br> khufu
                </p>
                <p>
                    <label>STATE</label>
                    <br> Preserved
                </p>
            </div>
            <p id="info-p">
                The oldest and largest of the three pyramids in the Giza pyramid complex, this architectural marvel
                remained the tallest man-made structure in the world for over 3,800 years.
            </p>
        `;
    }

    if (value == "siwa") {
        infoCnt.innerHTML = `
            <p class="p1">Relic Focus</p>
            <p class="p2">Siwa Oasis</p>
            <img src="../assets/images/Map-imgs/` + value + `.png" id="img" usemap="#image-map" draggable="false">
            <map name="image-map">
                <area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Siwa_Oasis"
                coords="1,133,80,163,106,230,130,259,190,223,220,273,360,281,365,255,403,292,514,300,528,272,559,309,615,297,676,305,749,336,798,406,857,420,860,399,878,399,886,422,1046,450,1083,445,1083,451,1099,449,1097,436,1116,428,1118,441,1277,411,1278,692,424,716,487,852,-1,848" 
                shape="poly">
            </map>
            <div id="selected-info">
                <p>
                    <label>LOCATION</label>
                    <br> Western Desert
                </p>
                <p>
                    <label>FAMOUS FOR</label>
                    <br> Temple of Oracle
                </p>
                <p>
                    <label>FOUNDED</label>
                    <br> 26th Dynasty
                </p>
                <p>
                    <label>STATE</label>
                    <br> UNESCO Heritage
                </p>
            </div>
            <p id="info-p">
                One of Egypt's most isolated settlements, Siwa is a natural paradise famous for its unique Berber 
                culture and the historic Shali Fortress, where the Oracle of Amun once stood.
            </p>
        `;
    }

    if (value == "bahariya") {
        infoCnt.innerHTML = `
            <p class="p1">Relic Focus</p>
            <p class="p2">Bahariya Oasis</p>
            <img src="../assets/images/Map-imgs/` + value + `.png" id="img" usemap="#image-map" draggable="false">
            <map name="image-map">
                <area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Bahariya_Oasis"
                coords="-1,178,121,177,102,136,166,123,174,135,198,100,222,126,204,158,222,184,671,180,674,389,1,388" shape="poly">
            </map>
            <div id="selected-info">
                <p>
                    <label>LOCATION</label>
                    <br> Western Desert
                </p>
                <p>
                    <label>FAMOUS FOR</label>
                    <br> Golden Mummies
                </p>
                <p>
                    <label>FOUNDED</label>
                    <br> Middle Kingdom
                </p>
                <p>
                    <label>STATE</label>
                    <br> Archeological Site
                </p>
            </div>
            <p id="info-p">
                Known as the "Northern Oasis," Bahariya is a lush depression surrounded by black hills. 
                It gained worldwide fame with the discovery of the Valley of the Golden Mummies 
                and serves as the main gateway to the stunning Black and White Deserts.
            </p>
        `;
    }

    if (value == "farafra") {
        infoCnt.innerHTML = `
            <p class="p1">Relic Focus</p>
            <p class="p2">Farafra Oasis</p>
            <img src="../assets/images/Map-imgs/` + value + `.png" id="img" usemap="#image-map" draggable="false">
            <map name="image-map">
                <area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Farafra,_Egypt"
                coords="46,248,57,214,54,141,62,131,62,54,122,27,126,9,147,7,148,20,182,31,202,23,223,33,236,52,250,72,259,89,252,123,222,157,213,191,222,220,262,247,516,375,502,389,2,389,-1,272"
                shape="poly">
            </map>
            <div id="selected-info">
                <p>
                    <label>LOCATION</label>
                    <br> Western Desert
                </p>
                <p>
                    <label>FAMOUS FOR</label>
                    <br> White Desert
                </p>
                <p>
                    <label>FOUNDED</label>
                    <br> Old Kingdom
                </p>
                <p>
                    <label>STATE</label>
                    <br> Natural Protectorate
                </p>
            </div>
            <p id="info-p">
                A tranquil oasis known for its traditional mud-brick architecture, Farafra is the closest 
                point to the world-renowned White Desert National Park, famous for its surreal 
                chalk-white rock formations shaped by centuries of wind erosion.
            </p>
        `;
    }

    if (value == "dakhla") {
        infoCnt.innerHTML = `
            <p class="p1">Relic Focus</p>
            <p class="p2">Dakhla Oasis</p>
            <img src="../assets/images/Map-imgs/` + value + `.png" id="img" usemap="#image-map" draggable="false">
            <map name="image-map">
                <area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Dakhla,_Western_Sahara"
                coords="-1,100,673,390" shape="rect">
            </map>
            <div id="selected-info">
                <p>
                    <label>LOCATION</label>
                    <br> New Valley
                </p>
                <p>
                    <label>FAMOUS FOR</label>
                    <br> Al-Qasr Village
                </p>
                <p>
                    <label>FOUNDED</label>
                    <br> Pharaonic Times
                </p>
                <p>
                    <label>STATE</label>
                    <br> Archeological Site
                </p>
            </div>
            <p id="info-p">
                Considered one of the most beautiful oases in Egypt, Dakhla is home to the stunning 
                medieval Islamic village of Al-Qasr. It has been continuously inhabited since 
                prehistoric times and features remarkable Roman temples and mud-brick fortresses.
            </p>
        `;
    }

    if (value == "kharga") {
        infoCnt.innerHTML = `
            <p class="p1">Relic Focus</p>
            <p class="p2">Kharga Oasis</p>
            <img src="../assets/images/Map-imgs/` + value + `.png" id="img" usemap="#image-map" draggable="false">
            <map name="image-map">
                <area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Kharga_Oasis"
                coords="1,412,208,404,217,255,206,237,209,226,214,220,217,187,208,180,398,111,617,201,617,242,735,224,934,323,936,377,960,373,960,514,548,542,111,494,0,505"
                shape="poly">
            </map>
            <div id="selected-info">
                <p>
                    <label>LOCATION</label>
                    <br> New Valley
                </p>
                <p>
                    <label>FAMOUS FOR</label>
                    <br> Temple of Hibis
                </p>
                <p>
                    <label>FOUNDED</label>
                    <br> Middle Kingdom
                </p>
                <p>
                    <label>STATE</label>
                    <br> Archeological Site
                </p>
            </div>
            <p id="info-p">
                The capital of the New Valley, Kharga was a vital stop on the ancient "Forty Days Road" trade route. 
                It is home to the Temple of Hibis, the best-preserved Persian-era temple in Egypt, 
                and the Necropolis of Al-Bagawat, one of the world's oldest Christian cemeteries.
            </p>
        `;
    }

    if (value == "abu-simbel") {
        infoCnt.innerHTML = `
            <p class="p1">Relic Focus</p>
            <p class="p2">Abu Simbel</p>
            <img src="../assets/images/Map-imgs/` + value + `.png" id="img" usemap="#image-map" draggable="false">
            <map name="image-map">
                <area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Abu_Simbel"
                coords="-1,242,0,157,59,117,74,92,293,75,318,40,335,34,365,11,404,0,499,1,499,244,188,225,51,232"
                shape="poly">
            </map>
            <div id="selected-info">
                <p>
                    <label>LOCATION</label>
                    <br> Aswan
                </p>
                <p>
                    <label>FAMOUS FOR</label>
                    <br> Solar Alignment
                </p>
                <p>
                    <label>FOUNDED</label>
                    <br> 19th Dynasty
                </p>
                <p>
                    <label>STATE</label>
                    <br> UNESCO Heritage
                </p>
            </div>
            <p id="info-p">
                Built by Ramses II, these massive rock-cut temples are a marvel of ancient engineering, 
                famous for the solar alignment phenomenon and their miraculous relocation by UNESCO.
            </p>
        `;
    }

    if (value == "karnak") {
        infoCnt.innerHTML = `
            <p class="p1">Relic Focus</p>
            <p class="p2">El Karnak</p>
            <img src="../assets/images/Map-imgs/` + value + `.png" id="img" usemap="#image-map" draggable="false">
            <map name="image-map">
                <area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Karnak"
                coords="-1,272,107,268,110,250,135,242,144,241,144,218,157,153,190,149,192,133,214,125,214,116,224,114,238,104,301,94,300,81,361,73,374,86,422,80,447,90,448,101,479,108,490,143,514,137,514,117,524,118,522,92,539,90,543,49,576,44,581,30,605,36,617,19,635,18,674,10,673,390,0,390"
                shape="poly">
            </map>
            <div id="selected-info">
                <p>
                    <label>LOCATION</label>
                    <br> Luxor
                </p>
                <p>
                    <label>FAMOUS FOR</label>
                    <br> Great Hypostyle Hall
                </p>
                <p>
                    <label>FOUNDED</label>
                    <br> Middle Kingdom
                </p>
                <p>
                    <label>STATE</label>
                    <br> UNESCO Heritage
                </p>
            </div>
            <p id="info-p">
                The largest religious complex ever built, Karnak is a vast open-air museum featuring 
                the magnificent Great Hypostyle Hall and its 134 massive sandstone columns.
            </p>
        `;
    }
    window.parent.imageMapResize();
    //imapعشان يظبط ابعاد الـ
    //للصورة الجديدة

    let p = document.querySelectorAll("#icons-container img");
    p.forEach(e => {
        if (e.id !== value) {
            e.classList.remove("active");
        } else {
            e.classList.toggle("active");
        }
    });
    if (infoCnt.classList.contains("selected") || current !== value) {
        sounds[value].play();
    }
}

//------------------------------------------------------------------------------------------------------------------------------
let observer = new MutationObserver(() => {
    if (cnt.classList.contains("light")) {
        window.parent.document.querySelector(".p1").classList.add("light");
        window.parent.document.querySelector(".p2").classList.add("light");
        window.parent.document.getElementById("img").classList.add("light");
        window.parent.document.getElementById("selected-info").classList.add("light");
        window.parent.document.getElementById("info-p").classList.add("light");
        document.querySelectorAll("#selected-info label").forEach(e => {
            e.classList.add("light");
        });
    }
    else {
        window.parent.document.querySelector(".p1").classList.remove("light");
        window.parent.document.querySelector(".p2").classList.remove("light");
        window.parent.document.getElementById("img").classList.remove("light");
        window.parent.document.getElementById("selected-info").classList.remove("light");
        window.parent.document.getElementById("info-p").classList.remove("light");
        document.querySelectorAll("#selected-info label").forEach(e => {
            e.classList.remove("light");
        });
    }
});
observer.observe(window.parent.document.getElementById("information-container"), {
    childList: true, attributes: true
});
//------------------------------------------------------------------------------------------------------------------------------

const normal_scale = 1;
const max_scale = 3;
const add = 0.2;
function zoomIn() {
    let map = document.getElementById("iframe-container");
    let scale = parseFloat(map.style.scale) || 1;
    //style.scale عشان الرقم اللي بييجي من parsefloat
    // string بيكون على هيئة
    // "1.5"
    // فا هي بتخلي القيمة تكون رقم
    // ممكن مع اول ضغطة مفيش قيمة تتبعت فا عملنا || 1
    if (scale < max_scale) { //عشان ميعملش زوم اكتر من 3
        map.style.scale = scale + add;
    }
    if (parseFloat(map.style.scale) > normal_scale) {
        document.body.classList.add("grap");
    }
}
function zoomout() {
    let map = document.getElementById("iframe-container");
    let scale = parseFloat(map.style.scale);
    if (scale > normal_scale) { //عشان ميصغرش عن 1
        map.style.scale = scale - add;
    }
    if (parseFloat(map.style.scale) === normal_scale) {
        document.body.classList.remove("grap");
    }
}
//----------------------------------------------------------------------------------------------------------------------------------

function places() {
    if (!document.getElementById("menu-links").classList.contains("places")) {
        document.getElementById("menu-links").classList.toggle("places");
        document.getElementById("places").classList.toggle("selected");
        document.getElementById("map").classList.toggle("selected");
    }
}

function map() {
    if (document.getElementById("menu-links").classList.contains("places")) {
        document.getElementById("menu-links").classList.toggle("places");
        document.getElementById("places").classList.toggle("selected");
        document.getElementById("map").classList.toggle("selected");
    }
}

iframe.onload = () => {
    if (cnt.classList.contains("light")) {
        let currentMap = localStorage.setItem("mapMod", "light");
    }
    else {
        let currentMap = localStorage.setItem("mapMod", "dark");
    }
    let savedMap = localStorage.getItem("mapMod");
    let savedMod = localStorage.getItem("theme");
    if (savedMap !== savedMod) {
        mapMod();
    }
}