import dogsData from './data.js';
import Dog from './dog.js';

let currentDogCount = 0;
let currentDog = new Dog(dogsData[currentDogCount]);
const likedEl = document.getElementById('liked');
const dislikeEl = document.getElementById('disliked');

document.getElementById('like').addEventListener('click', likedDog);
document.getElementById('dislike').addEventListener('click', dislikeDog);

render();

function render() {
	document.getElementById('mainContent').innerHTML = currentDog.getDogHtml();
}

function nextDog() {
	if (currentDogCount > dogsData.length - 2) {
		setTimeout(function () {
			document.getElementById(
				'mainContent'
			).innerHTML = `<h1 class='no-more'>No More Dogs :(</h1>`;
		}, 1500);
		document.getElementById('like').disabled = true;
		document.getElementById('dislike').disabled = true;
	} else {
		currentDogCount += 1;
		currentDog = new Dog(dogsData[currentDogCount]);
		setTimeout(render, 1500);
	}
}

function likedDog() {
	currentDog.setDogStatus(true);
	likedEl.style.display = 'block';
	nextDog();
	setTimeout(clearLikedDisliked, 1500);
}

function dislikeDog() {
	currentDog.setDogStatus(false);
	dislikeEl.style.display = 'block';
	nextDog();
	setTimeout(clearLikedDisliked, 1500);
}

function clearLikedDisliked() {
	dislikeEl.style.display = 'none';
	likedEl.style.display = 'none';
}
