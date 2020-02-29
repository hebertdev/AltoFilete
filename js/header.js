let header = document.querySelector('#header');

window.addEventListener('scroll' , function(){
	

	if(window.scrollY > 60){
		header.style.background = 'rgb(144,0,0)'
	}else{
		header.style.background = 'transparent'
	}
})


let btnMenu = document.getElementById('btnMenu');
let containerMenu = document.getElementById('containerMenu');

btnMenu.addEventListener('click' , function(){
	containerMenu.classList.toggle('entraCerrar')
})