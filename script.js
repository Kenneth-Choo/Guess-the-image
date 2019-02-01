//query form
const form = document.getElementById('query-form');

//text input field
const query = document.getElementById('query');
const list = document.getElementById('list-data');

//get button id
const buttonOne = document.getElementById('button-1');
const buttonTwo = document.getElementById('button-2');
const buttonThree = document.getElementById('button-3');
const buttonFour = document.getElementById('button-4');


// total word list
const tags = ["fries", "watermelon", "mountain", "koala", "burger", "cookie", "car", "boat"]
//duplicated word list for manipulating
let wordList = ["fries", "watermelon", "mountain", "koala", "burger", "cookie", "car", "boat"]
//empty array for sliced words
let selectedWords = []
//empty array for final word
let answer = []

// select one word to insert into array
function randomWords() {
	return Math.floor(Math.random()*wordList.length);
}

// store selected word into a var
function storeWord(arrayToBeTaken,arrayToBePassed) {
	let selectedRandomWord = randomWords();
	let randomSelectedWord = arrayToBeTaken.splice(selectedRandomWord, 1)
	arrayToBePassed.push(randomSelectedWord)
}

//loop to store into empty array
for (let i=0; i<4; i++){
	storeWord(wordList,selectedWords);
}

//assign wording to array
buttonOne.innerHTML = selectedWords[0];
buttonTwo.innerHTML = selectedWords[1];
buttonThree.innerHTML = selectedWords[2]
buttonFour.innerHTML = selectedWords[3]

//call final selected word
storeWord(selectedWords, answer)

// //set onsubmit
// form.onsubmit = function(event){
// 	event.preventDefault();

// 	//get value in input field
// 	const queryTerm = query.value;
// 	getTaggedPhotos(queryTerm);
// }

//match image with final word
getTaggedPhotos(answer);

//get tumblr api
function getTaggedPhotos(tagName){
	fetch('https://api.tumblr.com/v2/tagged?tag=' + tagName + '&api_key=9w4rVEHrALXMlS5H5OWNoKJyL8jjqKq6f7huVLpKB7FioV9PY3')
	.then(function(response){

		if(!response.ok){
			alert('Hey, it seems something went wrong, please try again later!');
			return;
		}
		return response.json();
	})
	.then(function(result){
		if(!result){
			return;
		}
		//clear list
		list.innerHTML = '';

		const items = result.response;

		for (let i = 0; i <items.length ; i++) {
			const item = items[i];

				if(item.photos != undefined){
				const altSizes = item.photos[0].alt_sizes;
				const imgSrc = altSizes[altSizes.length -3].url;

				const img = document.createElement('img');
				img.src = imgSrc;

				const li = document.createElement('li');
				li.appendChild(img);

				list.appendChild(li);
			}
		}

	})
	.catch(function(err){
		alert('Hey, seems like the Tumblr API is down, please try again later!')
	})
}

// match answers with buttons
	buttonOne.onclick = function (){
		if (buttonOne.innerHTML == answer ){
			alert('Congratulations, the right answer is ' + answer)
		} else {
			alert('Wrong! The right answer is ' + answer)
		}
		location.reload(true)
	}

	buttonTwo.onclick = function (){
		if (buttonTwo.innerHTML == answer ){
			alert('Congratulations, the right answer is ' + answer)
		} else {
			alert('Wrong! The right answer is ' + answer)
		}
		location.reload(true)
	}

	buttonThree.onclick = function (){
		if (buttonThree.innerHTML == answer ){
			alert('Congratulations, the right answer is ' + answer)
		} else {
			alert('Wrong! The right answer is ' + answer)
		}
		location.reload(true)
	}

	buttonFour.onclick = function (){
		if (buttonFour.innerHTML == answer ){
			alert('Congratulations, the right answer is ' + answer)
		} else {
			alert('Wrong! The right answer is ' + answer)
		}
		location.reload(true)
	}

	