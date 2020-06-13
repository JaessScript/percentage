let canvas;

let font,
	fontsize = 20;
let value = 70;
let rows = 10;
let cols = 10;
let grid = [];

function preload() {
	// Ensure the .ttf or .otf font stored in the assets directory
	// is loaded before setup() and draw() are called
	font = loadFont('assets/Fipps-Regular.otf');
}

// Resive the canvas when the size of the browser changes
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function make2Darray(rows, cols) {
	let array = new Array(rows);

	for (let i = 0; i < array.length; i++) {
		array[i] = new Array(cols);
	}

	return array;
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	// Set text characteristics
	textFont(font);
	textSize(fontsize);
	textAlign(CENTER, CENTER);

	// Initialise the grid where the percentage is represented
	grid = make2Darray(rows, cols);
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			grid[i][j] = createVector(i, j);
		}
	}
}

function draw() {
	background(170);

	// Align the text in the center
	// and run drawWords() in the middle of the canvas
	textAlign(CENTER);
	drawWords(width * 0.5);

	// Represent the percentage
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			fill(255);
			ellipse(100 + 30 * grid[i][j].x, 100 + 30 * grid[i][j].y, 10, 10);
			let p = createP('&#128514');
			p.position(100 + 30 * grid[i][j].x, 100 + 30 * grid[i][j].y);
		}
	}
}

function drawWords(x) {
	// The text() function needs three parameters:
	// the text to draw, the horizontal position,
	// and the vertical position
	fill(255);
	text('70 per cent of people in Berlin agree with: ', x, 80);
	fill(255);
	text('"If you have nothing to hide, you should not be scared of cctvs"', x, 150);
}