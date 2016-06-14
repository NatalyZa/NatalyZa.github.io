
					
$(function () {
	
					// SLIDER SMALL
	var count1 = 1;
	var count2 = 1;
	var count3 = 1;

			// SLIDER 1
	$('.steps-1_block1').addClass('show');

	$('.steps-1_nav_right').on('click', function(){
		$('.steps-1_block' + count1 ).removeClass('show');
		$('.steps-1_block' + ++count1 ).addClass('show');
		if(count1 == 4) { count1 = 1; $('.steps-1_block1').addClass('show'); }
	});

	$('.steps-1_nav_left').on('click', function(){
		$('.steps-1_block' + count1).removeClass('show');
		$('.steps-1_block' + --count1).addClass('show');
		if(count1 == 0) { count1 = 3; $('.steps-1_block3').addClass('show')};
	});

			// SLIDER 2
	$('.steps-2_block1').addClass('show');

	$('.steps-2_nav_right').on('click', function(){
		$('.steps-2_block' + count2 ).removeClass('show');
		$('.steps-2_block' + ++count2 ).addClass('show');
		if(count2 == 4) { count2 = 1; $('.steps-2_block1').addClass('show'); }
	});

	$('.steps-2_nav_left').on('click', function(){
		$('.steps-2_block' + count2).removeClass('show');
		$('.steps-2_block' + --count2).addClass('show');
		if(count2 == 0) { count2 = 3; $('.steps-2_block3').addClass('show')};
	});

			// SLIDER 3
	$('.steps-3_block1').addClass('show');

	$('.steps-3_nav_right').on('click', function(){
		$('.steps-3_block' + count3 ).removeClass('show');
		$('.steps-3_block' + ++count3 ).addClass('show');
		if(count3 == 4) { count3 = 1; $('.steps-3_block1').addClass('show'); }
	});

	$('.steps-3_nav_left').on('click', function(){
		$('.steps-3_block' + count3).removeClass('show');
		$('.steps-3_block' + --count3).addClass('show');
		if(count3 == 0) { count3 = 3; $('.steps-3_block3').addClass('show')};
	});

});






$(function () {

		var apiKey = '2708023-0848a307d4df840432333e492';
		var htmlTemp; 
		var mytmpl;

		$.ajax ({
	            url: 'https://pixabay.com/api/?key='+apiKey+'&q= &per_page=7&image_type=photo',
	            success: function(data, textStatus) {
	   
	            htmlTemp = $('#list-template').html();
				mytmpl = tmpl(htmlTemp, {data:data});
					
					$('.grid').append(mytmpl);
					

	            	isotopeInit();

	            }
	        });

		$('.ideas_submit').on('click', function () {

			var searchValue = $('.ideas_search').val();
			
			$.ajax ({
	            url: 'https://pixabay.com/api/?key='+apiKey+'&q='+searchValue+'&per_page=7&image_type=photo',
	            success: function(data, textStatus) {
	            	
	            	if (data.hits.length == 0) {
	            		$('.grid').html('<p class="ideas_warning">I\'m sorry, but I have not found what you need</p>');
	            		$('.ideas').css({
	            			height: '500px',
	            		});
	            	} else {
	   
	            htmlTemp = $('#list-template').html();
				mytmpl = tmpl(htmlTemp, {data:data});
					
					
					$('.grid').html(mytmpl);
					$('.ideas').css({
	            			height: '1385px',
	            		});


	            	isotopeInit();
					}
	            }
	        });

				return false;
		});



});




function isotopeInit() {
	$('.grid').isotope({
	itemSelector: '.grid-item',
	gutter: 5,
	percentPosition: true,
   	masonry: {
  	columnWidth: 50
	}
});
}





