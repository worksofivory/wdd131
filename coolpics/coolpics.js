const menubutton = document.querySelector("#menu-button");
const menu = document.querySelector(".menu");
const gallery = document.querySelector(".gallery");
function toggleMenu(){
    menu.classList.toggle("hide");
}
function handleResize(){
    if (screen.width >= 1000){
        menubutton.classList.add("hide");
        menu.classList.remove("hide");
    }
    if(screen.width < 1000){
        menubutton.classList.remove("hide");
        menu.classList.add("hide");
    }
}
function closeViewer(){
   const view = document.querySelector(".viewer");
   view.remove();
}
function viewHandler(event){
    const modal = event.target;
    if (modal.tagName === 'IMG') { 
        const src = modal.src.replace("-sm.jpeg", "-full.jpeg");
    document.body.insertAdjacentHTML("afterbegin", 
        `<div class="viewer"><button class="close-viewer">X</button><img src="${src}" alt="alt description"></div>`);
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);}
}
menubutton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
gallery.addEventListener("click", viewHandler);