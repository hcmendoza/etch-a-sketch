var main = function() {

	// Button Click - Start/Reset
	$('#gameStart').on('click', function() {

		//Clear the board
		$('.container').empty();

		var sides = prompt("How many squares per side? Please enter a number between 1 and 100.");
		var size = 960/sides;

		var rows = function() {
			for(var x = 0; x < sides; x++) {
				$('.container').append('<div class="row"></div>');
			}
			return false;
		};

		var columns = function() {
			for(var x = 0; x < sides; x++) {
				$('.row').append('<div class="tile"></div>');
			}
			$('.tile').css({'width': size,'height': size});
			return false;
		};

		//Create the grid
		rows();
		columns();

		//Track mouse trail
		$('.tile').on('mouseleave', function() {
			$(this).addClass('selected');
		});
	});
};



$(document).ready(main);