//
// Info: This file generates the grid and painting interactions
//


const canvas = $("#pixel_canvas");

// Function: Creates the grid
function makeGrid() {

	const height = $("#input_height").val();
	const width = $("#input_width").val();
	let grid;

	// To erase the grid
	while (canvas.find('tr').length > 0) {
		canvas.children('tr').remove();
	}

	// To calculate the size of the grid
	for (let row = 0; row < height; row++) {
		grid += "<tr>";

		for (let col = 0; col < width; col++) {
			grid += "<td></td>";
		} 
		
		grid += "</tr>";		
	}
	
	canvas.append(grid);
}


// Function: changing color format rgb to hex
const hex_digits = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

function hex(x) {
	return isNaN(x) ? "00" : hex_digits[(x - x % 16) / 16] + hex_digits[x % 16];
}

function rgbToHex(rgb) {
	if(rgb != "rgba(0, 0, 0, 0)") {
		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	} 

	return "#ffffff";
}


// Event: When user clicks submit
const submit_button = $(":submit");

submit_button.on("click", function(e) {
	e.preventDefault();

	makeGrid();
});

// Event: When user clicks on cells
canvas.on("click", "td", function(e) {
	e.preventDefault();

	let bgcolor = $(this).css("background-color");
	bgcolor = rgbToHex(bgcolor); 
	const colorpick = $("#colorPicker").val();

	// To paint the cell or erase if the cell already has that color
	if(bgcolor == colorpick) {
		$(this).css("background-color", "#ffffff");
	} else {
		$(this).css("background-color", colorpick);
	}
});







