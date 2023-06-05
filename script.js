//for length
const millimeterEl = document.querySelector("#millimeter");
const centimeterEl = document.querySelector("#centimeter");
const meterEl = document.querySelector("#meter");
const kilometerEl = document.querySelector("#kilometer");

function millimeter(value) {
	centimeterEl.value = value / 10;
	meterEl.value = value / 1000;
	kilometerEl.value = value / 1000000;
}

function centimeter(value) {
	millimeterEl.value = value * 10;
	meterEl.value = value / 100;
	kilometerEl.value = value / 100000;
}

function meter(value) {
	millimeterEl.value = value * 1000;
	centimeterEl.value = value * 100;
	kilometerEl.value = value / 1000;
}

function kilometer(value) {
	millimeterEl.value = value * 1000000;
	centimeterEl.value = value * 10000;
	meterEl.value = value * 1000;
}

//for weight
const MilligramEl = document.querySelector("#Milligram");
const GramEl = document.querySelector("#Gram");
const KilogramEl = document.querySelector("#Kilogram");
const TonneEl = document.querySelector("#Tonne");

function Milligram(value) {
	GramEl.value = value / 1000;
	KilogramEl.value = value / 1000000;
	TonneEl.value = value / 1000000000;
}

function Gram(value){
	MilligramEl.value = value * 1000;
	KilogramEl.value =  value / 1000;
	TonneEl.value = value /  1000000;
}

function Kilogram(value){
	MilligramEl.value = value * 1000000;
	GramEl.value = value * 1000;
	TonneEl.value = value / 1000;
}

function Tonne(value){
	MilligramEl.value = value * 1000000000;
	GramEl.value = value * 1000000;
	KilogramEl.value = value * 1000;
}

// for Temperature
const DegreeCelsiusEl = document.querySelector("#DegreeCelsius");
const FahrenheitEl = document.querySelector("#Fahrenheit");
const KelvinEl = document.querySelector("#Kelvin");

function DegreeCelsius(value){
	FahrenheitEl.value = value * 9/5 + 32;
	KelvinEl.value = value + 273.15; 
}

function Fahrenheit(value){
	DegreeCelsiusEl.value = value - 32 * 5/9;
	KelvinEl.value = value - 32 * 5/9 + 273.15;
}

function Kelvin(value){
	DegreeCelsiusEl.value = value - 273.15;
	FahrenheitEl.value = value - 273.15 * 9/5 + 32;
}

// for Area
const SquareinchEl = document.querySelector("#Squareinch");
const SquarefootEl = document.querySelector("#Squarefoot");
const SquaremeterEl = document.querySelector("#Squaremeter");
const SquarekilometerEl = document.querySelector("#Squarekilometer");

function Squareinch(value){
	SquarefootEl.value = value / 144;
	SquaremeterEl.value = value / 1550;
	SquarekilometerEl.value = value / 1550000000;
}

function Squarefoot(value){
	SquareinchEl.value = value * 144;
	SquaremeterEl.value = value / 10.764;
	SquarekilometerEl.value = value / 1076000;
}

function Squaremeter(value){
	SquareinchEl.value = value * 1550;
	SquarefootEl.value = value * 10.764;
	SquarekilometerEl.value = value / 1000000;
}

function Squarekilometer(value){
	SquareinchEl.value = value * 1550000000;
	SquarefootEl.value =  value * 1076000;
	SquaremeterEl.value = value * 1000000;
}