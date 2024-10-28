import { studioImages } from "./artdata.js";
function random(num) {
	return Math.floor(Math.random() * num);
}
function checkRandomNumber(list, num){
    return list.includes(num);
}
function makeRandomList(list){
   const listOfNumbers =[];
   while (listOfNumbers.length < 4){
     const rand = random(list.length);
     if(!checkRandomNumber(listOfNumbers, rand))
         listOfNumbers.push(rand);}
    return listOfNumbers;
}
const list = makeRandomList(studioImages);
const slots = document.querySelectorAll("#studio-gallery figure");
const studio = document.querySelector("#studio-gallery");
slots.forEach((slot, index) => {
    if (index < list.length) {
        const image = studioImages[index]; 
        slot.innerHTML = `<img src="${image.smSrc}" alt="${image.desc}" data-id=${image.id}>`;
    }
});
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
studio.addEventListener("click", (event) => viewHandler(event, studioImages));