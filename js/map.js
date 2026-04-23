function info() {
    let infoCnt = window.parent.document.getElementById("information-container");
    let mapCnt = window.parent.document.getElementById("map-container");
    let main = window.parent.document.getElementById("map-main");
    let styled = window.parent.getComputedStyle(infoCnt);
    let top = styled.top;
    if (top !== "0px") {
        infoCnt.style.top = "0";
        mapCnt.style.marginRight = "20%";
        main.style.marginBottom = "90px";
    } else {
        infoCnt.style.top = "-150vh";
        mapCnt.style.marginRight = "0";
        main.style.marginBottom = "0";
    }
}

const normal_scale = 1;
const max_scale = 2;
const add = 0.2;
function zoomIn() {
    let map = document.getElementById("iframe-container");
    let scale = parseFloat(map.style.scale) || 1;
    if (scale < max_scale) {
        map.style.scale = scale + add;
    }
}
function zoomout() {
    let map = document.getElementById("iframe-container");
    let scale = parseFloat(map.style.scale);
    if (scale > normal_scale) {
        map.style.scale = scale - add;
    }
}