let canvas;

let font,
	fontsize = 20;
let value = 70;
let cols = 10;
let rows = 10;
let grid = [];

function preload() {
	// Ensure the .ttf or .otf font stored in the assets directory
	// is loaded before setup() and draw() are called
	font = loadFont('assets/Fipps-Regular.otf');
}

// Resive the canvas when the size of the browser changes
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	//drawGrid(cols, rows, grid);
}

function make2Darray(cols, rows) {
	let array = new Array(cols);

	for (let i = 0; i < array.length; i++) {
		array[i] = new Array(rows);
	}

	return array;
}

function drawGrid(cols, rows, grid) {
	let counter = 0;
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			counter++;
			if (counter <= value) {
				let p = createP('&#128514');
				p.position(windowWidth * 0.4 + 30 * grid[i][j].y, windowHeight * 0.4 + 30 * grid[i][j].x);
			} else {
				let p = createP('&#128545');
				p.position(windowWidth * 0.4 + 30 * grid[i][j].y, windowHeight * 0.4 + 30 * grid[i][j].x);
			}
		}
	}
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	// canvas.style('z-index', '-1');

	// Set text characteristics
	textFont(font);
	textSize(fontsize);
	textAlign(CENTER, CENTER);

	// Initialise the grid where the percentage is represented
	grid = make2Darray(cols, rows);
	// Initialise coordinates of the emoticons in the grid
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] = createVector(i, j);
		}
	}
	// Draw the emoticons in the grid
	drawGrid(cols, rows, grid);
}

function draw() {
	// background(170);

	// Align the text in the center
	// and run drawWords() in the middle of the canvas
	textAlign(CENTER);
	drawWords(width * 0.5);
}

function drawWords(x) {
	// The text() function needs three parameters:
	// the text to draw, the horizontal position,
	// and the vertical position
	fill(0);
	text('70 per cent of people in Berlin agree with: ', x, 80);
	fill(0);
	text('"If you have nothing to hide, you should not be scared of cctvs"', x, 150);
}