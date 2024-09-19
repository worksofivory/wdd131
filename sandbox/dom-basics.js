const newImg = document.createElement('img');
newImg.src = "https://picsum.photos/200/300";
document.body.append(newImg);

const newParagraph = document.createElement('p');
newParagraph.innerText = 'Added with JavaScript!';
document.body.append(newParagraph);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through JavaScript</p>"
document.body.appendChild(newSection);