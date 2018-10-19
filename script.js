var tyre = document.getElementById('tyre');
var rim = document.getElementById('rim');
var size = document.getElementById('size');
var result = document.getElementById('result');


function calculate() {
	var a = parseInt(tyre.value) / 10; // padangos aukstis
	var b = parseInt(rim.value) * 2.54 / 2; // rato spindulys
	var c = parseInt(size.value); // arkos spindulys
	var d = (2 * a + 2 * b); // viso rato su padanga skersmuo
	var e = Math.round(10000000 / (d * 3.1428)); // apsisukimu skaicius
	var f = Math.round ((2 * c - d) / 2); // laisva vieta
	if (a + b <= c) {
		console.log('ratai tilps');
		result.innerHTML = 'Ratas tilps. Nuvažiavus 100km ratas padarys ' + e + ' apsisukimų.' + ' Laisvos vietos likutis arkoje - ' + f + ' cm'

	} else {
		console.log('ratai netilps');
		alert('Ratas yra per didelis!')
		result.innerHTML = 'Toks derinys netinkamas, pasirinkite mažesnį ratą arba padangą. Minimalus arkos spindulys su šiuo deriniu - ' + d / 2 +'cm'
	}
}