	//var tablewidth = 500;
		var turncounter = 0;

function initializeGame(){
	var t = document.getElementById("mainTable");
	//tablewidth = 600 -  tablewidth;
	//t.style.width = tablewidth + "px";
	turncounter = 0;	

	for (var row = 0; row <= 2; row++) {
		for (var cell = 0; cell <= 2; cell++) {
			t.rows[row].cells[cell].innerHTML = null;
  	};
	};	
 }

function markSquare(squaure){
	if (squaure.innerHTML !== 'O'){

   	if(turncounter % 2 ==0)
			squaure.innerHTML = 'X';
		else 
			squaure.innerHTML = 'O';

		turncounter ++;
		checkWin(squaure);
	}
}

function checkWin(squaure){
		//there are 8 possible places to win in tic-tac-toe
	if (squaure.id === 'topleft') {
		// 3 possible ways to win if the player moves here:
			  // across the top
		if (squaure.innerHTML === getInnerByID('topcenter') 
			   && squaure.innerHTML === getInnerByID('topright')) {
			wonGame(squaure.innerHTML);
		}
				// down the left side
		if (squaure.innerHTML === getInnerByID('midleft') 
			   && squaure.innerHTML === getInnerByID('bottomleft')) {
			wonGame(squaure.innerHTML);
		}
				// diagonally
		if (squaure.innerHTML === getInnerByID('midcenter') 
			   && squaure.innerHTML === getInnerByID('bottomright')) {
			wonGame(squaure.innerHTML);
		}
	}

	else if (squaure.id === 'topcenter') {
		// 2 possible ways to win if the player moves here:
			  // across the top
		if (squaure.innerHTML === getInnerByID('topleft') 
			    && squaure.innerHTML === getInnerByID('topright')) {
			wonGame(squaure.innerHTML);
		}
			// down the center
		if (squaure.innerHTML === getInnerByID('midcenter') 
			    && squaure.innerHTML === getInnerByID('bottomcenter')) {
			wonGame(squaure.innerHTML);
  	}
  }
	
  else if (squaure.id === 'topright') {
	// 3 ways to win
		  // across the top
		if (squaure.innerHTML === getInnerByID('topcenter') 
  		    && squaure.innerHTML === getInnerByID('topleft')) {
			wonGame(squaure.innerHTML);
		}
			// down the left side
		if (squaure.innerHTML === getInnerByID('midleft') 
			    && squaure.innerHTML === getInnerByID('bottomleft')) {
			wonGame(squaure.innerHTML);
		}
			// diagonally
		if (squaure.innerHTML === getInnerByID('midcenter') 
				  && squaure.innerHTML === getInnerByID('bottomright')) {
			wonGame(squaure.innerHTML);
		}
	}
	
  else if (squaure.id === 'midleft') {
	// 2 possible ways to win if the player moves here:
		  // down the left
		if (squaure.innerHTML === getInnerByID('topleft') 
				  && squaure.innerHTML === getInnerByID('bottomleft')) {	
      wonGame(squaure.innerHTML);
		}
			// accross the middle
		if (squaure.innerHTML === getInnerByID('midcenter') 
			    && squaure.innerHTML === getInnerByID('midright')) {
			wonGame(squaure.innerHTML);
		}
	}

	else if (squaure.id === 'midcenter') {
	// 4 ways of winning
		  // down the centre
		if (squaure.innerHTML === getInnerByID('topcenter') 
			    && squaure.innerHTML === getInnerByID('bottomcenter')) {
			wonGame(squaure.innerHTML);
		}
			// accross the middle
		if (squaure.innerHTML === getInnerByID('midleft') 
			    && squaure.innerHTML === getInnerByID('midright')) {
			wonGame(squaure.innerHTML);
  	}
		  // diagonally (\)
		if (squaure.innerHTML === getInnerByID('topleft') 
			    && squaure.innerHTML === getInnerByID('bottomright')) {
			wonGame(squaure.innerHTML);
		}
			// diagonally (/)
		if (squaure.innerHTML === getInnerByID('topright') 
			    && squaure.innerHTML === getInnerByID('bottomleft')) {
			wonGame(squaure.innerHTML);
		}
	}

	else if (squaure.id === 'midright') {
  // down the right
		if (squaure.innerHTML === getInnerByID('topright') 
			    && squaure.innerHTML === getInnerByID('bottomright')) {
			wonGame(squaure.innerHTML);
		}
			// accross the middle
		if (squaure.innerHTML === getInnerByID('midcenter') 
			    && squaure.innerHTML === getInnerByID('midleft')) {
			wonGame(squaure.innerHTML);
		}
  }
	else if (squaure.id === 'bottomleft') {
		// down the left
		if (squaure.innerHTML === getInnerByID('topleft') 
			    && squaure.innerHTML === getInnerByID('midleft')) {
			wonGame(squaure.innerHTML);
		}
			// accross the middle
		if (squaure.innerHTML === getInnerByID('bottomcenter') 
			    && squaure.innerHTML === getInnerByID('bottomright')) {
				wonGame(squaure.innerHTML);
		}
			// diagonally
		if (squaure.innerHTML === getInnerByID('midcenter') 
			    && squaure.innerHTML === getInnerByID('topright')) {
			wonGame(squaure.innerHTML);
		}
	}

	else if (squaure.id === 'bottomcenter') {
			// down the center
		if (squaure.innerHTML === getInnerByID('midcenter') 
			    && squaure.innerHTML === getInnerByID('topcenter')) {
			wonGame(squaure.innerHTML);
		}
			// accross the bottom
		if (squaure.innerHTML === getInnerByID('bottomleft') 
			    && squaure.innerHTML === getInnerByID('bottomright')) {
				wonGame(squaure.innerHTML);
		}
	}
  		// bottom right
	else {
  		// down the right
		if (squaure.innerHTML === getInnerByID('topright') 
			    && squaure.innerHTML === getInnerByID('midright')) {
			wonGame(squaure.innerHTML);
		}
			// accross the bottom
		if (squaure.innerHTML === getInnerByID('bottomcenter') 
			    && squaure.innerHTML === getInnerByID('bottomleft')) {
			wonGame(squaure.innerHTML);
		}
			// diagonally
		if (squaure.innerHTML === getInnerByID('midcenter') 
			    && squaure.innerHTML === getInnerByID('topleft')) {
			wonGame(squaure.innerHTML);
		}
	}

}

function getInnerByID(elementID){
	return document.getElementById(elementID).innerHTML;
}

function wonGame(player) {
	if(player !== '') {
		alert(player + ' has won the game!');
		initializeGame();
    // console.log(player);
	}
}