//pop-app//
class PopApp {

	constructor() {
		this.popApp =  document.createElement('div');
		this.overlay = document.createElement('div');
		////
		this.popApp.classList.add('pop-app');
		this.overlay.classList.add('overlay-popapp');
		////
		document.body.appendChild(this.popApp);
		document.body.appendChild(this.overlay);
		this.close();
 	}

 	open(elem, event, content) {
 		const element = document.querySelector(elem);
 		element.addEventListener(event, (e) => {
 			this.popApp.innerHTML = content;
 			this.popApp.classList.add('active');
 			this.overlay.classList.add('active');
 		});
 	}

 	close() {
 		this.overlay.onclick = () => {
 			this.overlay.classList.remove('active');
 			this.popApp.classList.remove('active');
 		}
 	}
}

const popApp = new PopApp();

popApp.open('.my-class', 'click', 'text text text'); //selector, event, content
//pop-app//