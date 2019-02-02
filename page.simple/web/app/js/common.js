$(document).ready(function(){

	//*progress bar//
	function progress()
	{
	    var elem = document.querySelector('#progress');

	    var width = 0;

	    var id;

	    function progressStatus()
	    {
	        if ( width >= 100) {
	            clearInterval(id);
	        }else{
	            width++;

	            elem.style.width = width + '%';

	            elem.innerHTML = width + '%';
	        }
	    }
	    //*action*//
	    var start_progress = document.querySelector('.start-progress-btn');
	    var stop_progress = document.querySelector('.stop-progress-btn');
	    var reset = document.querySelector('.reset-progress-btn');

	    start_progress.onclick = function() {
	        var speed = document.querySelector('#speed').value || 10;
	        var time = Math.round(speed * 1000 / 100);
	        console.log(speed + ' ск.' + ' ' + time + ' тм.');
	        id = setInterval(progressStatus, time);
	    }

	    stop_progress.onclick = function() {
	        clearInterval(id);
	        id = null;
	    }

	    reset.onclick = function() {
	        width = 0;
	        elem.style.width = width;
	        elem.innerHTML = '';
	        clearInterval(id);
	        id = null;
	    }
	    //*action*//

	}
	progress();
	//*progress bar*//

	//owl//
	$(document).ready(function(){
		$('.slick-slider').slick({
		 	dots: true,
		 	arrows: false,
		 	autoplay: true,
		 	autoplaySpeed: 4000,
		});
	});
	//owl//

	//*particles//
	particlesJS.load('particles-js', '../particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});
	//particles*//

	//text-section//
	$('#btn').click(function(event) {
	    /* Act on the event */
	   $('.text').slideToggle(2000);
	   $(this).toggleClass('active');
	   $(this).toggleClass('btn-warning');

	   if( $(this).hasClass('active') ) {
	        $(this).html('открыть');
	   }else{
	        $(this).html('Скрыть текст');
	   }
	});
	//text-section//


	///

	///
	
});