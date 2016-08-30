var main = function() {
//Grid Constructor
	var constructor = function() {
	//Clear the board
		$('.container').empty();

	//USER input
		var sides = prompt("How many squares per side? Please enter a number between 1 and 100.");
		var size = 960/sides;

	//Build the grid
		var rows = function() {
			for(var x = 0; x < sides; x++) {
				$('.container').append('<div class="row"></div>');
			}
		};

		var columns = function() {
			for(var x = 0; x < sides; x++) {
				$('.row').append('<div class="tile"></div>');
			}
			$('.tile').css({'width': size,'height': size});
		};

		rows();
		columns();
	};

//CLEAR
	$('#clear').on('click', function() {
		//Clear the board
		$('.container').empty();
	});

//GRAY
	$('#gray').on('click', function() {
		constructor();
		$('.tile').on('mouseleave', function() {
			$(this).addClass('selected');
		});
	});

//RANDOM COLOR
	$('#random').on('click', function() {
		constructor();
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var randomColor = "rgb("+r+ ", " +g+", "+b+")";
		$('.tile').on('mouseenter', function() {
			$(this).css('background-color', randomColor);
		});
	});

//COLORFUL
	$('#colorful').on('click', function() {
		constructor();
		$('.tile').on('mouseenter', function() {
			var r = Math.floor(Math.random()*256);
			var g = Math.floor(Math.random()*256);
			var b = Math.floor(Math.random()*256);
			var randomColor = "rgb("+r+ ", " +g+", "+b+")";
			$(this).css('background-color', randomColor);
		});
	});

//OPACITY
	$('#opacity').on('click', function() {
		
		constructor();
		$('.tile').css({'background-color': '#000', 'opacity': '0'});

		$('.tile').on('mouseenter', function() {
			var opacity = +$(this).css('opacity');
			opacity += 0.1;
			$(this).css('opacity', opacity);
		});

	});
};


$(document).ready(main);