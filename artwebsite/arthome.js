import { galleryImages } from "./artdata.js";
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

const studioList = makeRandomList(studioImages);
const galleryList = makeRandomList(galleryImages);
const studioSlots = document.querySelectorAll("#studio-preview figure");
const gallerySlots = document.querySelectorAll("#gallery-preview figure");
function renderPreview(slots, list, bigList){
slots.forEach((slot, index) => {
    if (index < list.length) {
        const image = bigList[index]; 
        slot.innerHTML = `<img src="${image.thumbSrc}" alt="${image.desc}" data-id=${image.id}>`;
    }
});}

renderPreview(studioSlots, studioList, studioImages);
renderPreview(gallerySlots, galleryList, galleryImages);