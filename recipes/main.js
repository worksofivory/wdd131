import { recipes } from "./recipes.js";

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function tagsTemplate(tags) {
    let html = '<ul class="recipe__tags">';
    for (const tag of tags) {
        html += `<li>${tag}</li>`;
    }
    html += '</ul>';
    return html;
}

function ratingTemplate(rating) {
    let html = '';
    for (let spot = 1; spot <= 5; spot+=1) {
        if (spot <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    return `<span class="recipe__ratings" role="img" aria-label="Rating: ${rating} out of 5 stars">${html}</span>`;
}

function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="${recipe.image}" alt="image of ${recipe.name}" />
	<figcaption>
		${tagsTemplate(recipe.tags)}
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			${ratingTemplate(recipe.rating)}
		</p>
		<p class="recipe__description">
			${recipe.description}
		</p>
</figcaption>
</figure>`;
}

function renderRecipes(recipeList) {
	const recipeBox = document.querySelector(".recipeBox");
	const recipesHtml = recipeList.map(recipe => recipeTemplate(recipe)).join("");
    recipeBox.innerHTML = recipesHtml;
}
function searchList(list, q){
    function searchCallback(ob){
        return (ob.name.toLowerCase().includes(q.toLowerCase()) || 
                ob.description.toLowerCase().includes(q.toLowerCase()) ||
                ob.tags.find((tag) => tag.toLowerCase().includes(q.toLowerCase())));
    }
    const filtered = list.filter(searchCallback);

    const sorted = filtered.sort((a, b) => a.distance > b.distance);
    return sorted;
  }
  
function init() {
  const recipe = getRandomListEntry(recipes)
  renderRecipes([recipe]);
  const searchButton = document.querySelector('#searchButton');
    const searchInput = document.querySelector('#searchBar');
    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        const searchQuery = searchInput.value.trim();
        if (searchQuery) {
            const filteredRecipes = searchList(recipes, searchQuery);
            renderRecipes(filteredRecipes);
        } else {
            renderRecipes(recipes);
        }
    });
}

init();