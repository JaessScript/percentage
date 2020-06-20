let canvas;
let next;

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
	// drawGrid(cols, rows, grid);
	// setup();
}

function make2Darray(cols, rows) {
	let array = new Array(cols);

	for (let i = 0; i < array.length; i++) {
		array[i] = new Array(rows);
	}

	return array;
}

function drawGridDesktop(cols, rows, grid) {
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

function drawGridMobile(cols, rows, grid) {
	let counter = 0;
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			counter++;
			if (counter <= value) {
				let p = createP('&#128514');
				p.position(20 + 30 * grid[i][j].y, windowWidth / 2 + 30 * grid[i][j].x);
			} else {
				let p = createP('&#128545');
				p.position(20 + 30 * grid[i][j].y, windowWidth / 2 + 30 * grid[i][j].x);
			}
		}
	}
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	next = select('#next');
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	// Initialise the grid where the percentage is represented
	grid = make2Darray(cols, rows);
	// Initialise coordinates of the emoticons in the grid
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			grid[i][j] = createVector(i, j);
		}
	}
	// Draw the emoticons in the grid
	if (windowWidth < windowHeight) {
		drawGridMobile(cols, rows, grid);
	} else {
		drawGridDesktop(cols, rows, grid);
	}
}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function draw() {
	background(30);
}
