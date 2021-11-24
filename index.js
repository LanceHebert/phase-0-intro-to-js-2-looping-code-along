const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
	for (let i = 0; i < gifts.length; i++) {
		console.log(`Wrapped ${gifts[i]} and added a bow!`);
		debugger;
	}
	return gifts;
}
wrapGifts(gifts);

const newArray = [];

function writeCards(arrayStringNames, eventName) {
	for (let i = 0; i < arrayStringNames.length; i++) {
		newArray.push(
			`Thank you, ${arrayStringNames[i]}, for the wonderful ${eventName} gift!`
		);
		
	}
	return newArray;
}

writeCards();
console.log(newArray);

function countDown(number) {
	while (number >= 0) {
		if (number === 10) {
			console.log(`T-minus ${number}`);
			number--;
		} else {
			console.log(number);
			number--;
		}
	}
}
countDown(10);
