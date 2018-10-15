var tyre = document.getElementById('tyre');
var rim = document.getElementById('rim');
var size = document.getElementById('size');
var result = document.getElementById('result');

function calculate() {
	var a = parseInt(tyre.value) / 10;
	var b = parseInt(rim.value) * 2.54;
	var c = parseInt(size.value) * 2;

	if (a + b <= c) {
		console.log('ratai tilps');

	} else {
		console.log('ratai netilps');
		alert("Toks derinys netinkamas, pasirinkite mažesnį ratą arba padangą.")
	}

	result = a + b;

}