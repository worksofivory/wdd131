import { galleryImages } from "./artdata.js";
const gallery = document.querySelector("#gallery");
const filterForm = document.querySelector("#filterForm");
function renderGallery(list, selector){
    const galleryList = document.querySelector(selector);
    galleryList.innerHTML = '';
    list.forEach((element) => {
        galleryList.innerHTML += `<figure><img src="${element.smSrc}" alt="${element.desc}" data-id="${element.id}"></figure>`;}
    );
}
renderGallery(galleryImages, "#gallery");

function filterGallery(list){
    const checkedBoxes = Array.from(filterForm.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);
    if(checkedBoxes.length === 0){
        renderGallery(list, "#gallery");
    }else{
        const filteredGallery = list.filter(image =>{
            return checkedBoxes.every(category => image.tags.includes(category));
        });
        renderGallery(filteredGallery, "#gallery");
    }
}
function closeViewer(){
    const view = document.querySelector(".viewer");
    view.remove();
 }
function viewHandler(event, list) {
    const modal = event.target;
    if (modal.tagName === 'IMG') {
        const imageId = modal.getAttribute("data-id");
        const imageData = list.find(image => image.id === parseInt(imageId));
        if (imageData) {
            const fullSrc = imageData.fullSrc;
            const description = imageData.desc;
            document.body.insertAdjacentHTML("afterbegin", 
                `<div class="viewer">
                    <button class="close-viewer">X</button>
                    <img src="${fullSrc}" alt="${description}">
                </div>`);
            document.querySelector(".close-viewer").addEventListener("click", closeViewer);
        }
    }
}
gallery.addEventListener("click", (event) => viewHandler(event, galleryImages));
filterForm.addEventListener("change", () => {
    filterGallery(galleryImages);
})
