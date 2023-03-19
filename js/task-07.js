const fontControler=document.querySelector("#font-size-control");
const spanText=document.querySelector("#text");
fontControler.addEventListener("input", fontSizeContr);
function fontSizeContr () {
spanText.style.fontSize=`${fontControler.value}px`
}