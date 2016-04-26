$(function carousel() {
	var leftControl = $('.carousel_arrow_left');
	var rightControl = $('.carousel_arrow_right');
	var elementsList = $('.carousel-list');

	var pixelsOffset = 225;
	var currentLeftValue = 0;
	var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
    var maximumOffset = 0;

	leftControl.on('click', function(){       
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });

	rightControl.on('click', function(){
		 if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
	});
	
	});
