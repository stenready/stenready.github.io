var miniImages = document.querySelector('.galery__thumbler');

miniImages.onclick = function(e) {
	var target = e.target;

	var elem = target.closest('img');
	if(elem) {
		var srcMy = target.getAttribute('src');
		var altMy = target.getAttribute('alt');
		removeClass();
		elem.parentElement.classList.add('active');
		showThumbnail(srcMy, altMy);
	}
}
function showThumbnail(srcMy, altMy) {
	var lagreImg = document.querySelector('.galery__img');
	lagreImg.src = srcMy;
	lagreImg.alt = altMy;
}

function removeClass() {
  	var elem = [...document.querySelectorAll('.galery__item.active')];
  	elem.forEach( function(element, index) {
  		element.classList.remove('active');
  	});
}