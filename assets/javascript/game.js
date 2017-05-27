$(document).ready(function() {

	/***VARIABLES***/ 
	var game = {
		wins: 0,
		losses: 0,
		score: 0,
		randomNumber: getRandomIntFromInterval(19, 120),
		crystalOnePoints: getRandomIntFromInterval(1, 12),
		crystalTwoPoints: getRandomIntFromInterval(1, 12),
		crystalThreePoints: getRandomIntFromInterval(1, 12),
		crystalFourPoints: getRandomIntFromInterval(1, 12),
		winMessage: "Congratulations, you win!",
		lossMessage: "Better luck next time!",
	}


	/***EVENTS***/

	init();

	$('#crystal-1').on('click', function() {
		$('#score').html(game.score += game.crystalOnePoints);
		checkWin();
    });

	$('#crystal-2').on('click', function() {
		$('#score').html(game.score += game.crystalTwoPoints);
		checkWin();
    });

	$('#crystal-3').on('click', function() {
		$('#score').html(game.score += game.crystalThreePoints);
		checkWin();
    });

	$('#crystal-4').on('click', function() {
		$('#score').html(game.score += game.crystalFourPoints);
		checkWin();
    });


	/***FUNCTIONS***/

	function init() {
		$('#random-number').html(game.randomNumber);
		$('#score').html(game.score);
		$('#wins').html('Wins: ' + game.wins);
		$('#losses').html('Losses: ' + game.losses);
		console.log(game.crystalOnePoints);
		console.log(game.crystalTwoPoints);
		console.log(game.crystalThreePoints);
		console.log(game.crystalFourPoints);
	}

	//function to generate random numbers with a specific range
	function getRandomIntFromInterval (min, max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	//determine whether the player wins or loses
	function checkWin() {
		if (game.score === game.randomNumber) {
			game.wins++;
			$('#wins').html('Wins: ' + game.wins);
			$('#message').html(game.winMessage);
			setTimeout(function() {
          		reset();
        	}, 2000);
		}

		if (game.score > game.randomNumber) {
			game.losses++;
			$('#losses').html('Losses: ' + game.losses);
			$('#message').html(game.lossMessage); 
			setTimeout(function() {
				reset();
			}, 2000);
		}
	}

	//function to reset the game
	function reset() {
		game.randomNumber = getRandomIntFromInterval(19, 120);
		game.crystalOnePoints = getRandomIntFromInterval(1, 12);
		game.crystalTwoPoints = getRandomIntFromInterval(1, 12);
		game.crystalThreePoints = getRandomIntFromInterval(1, 12);
		game.crystalFourPoints = getRandomIntFromInterval(1, 12);
		game.score = 0;
		$('#random-number').html(game.randomNumber);
		$('#score').html(game.score);
		$('#message').html('');
		console.log(game.crystalOnePoints);
		console.log(game.crystalTwoPoints);
		console.log(game.crystalThreePoints);
		console.log(game.crystalFourPoints);
	}

});