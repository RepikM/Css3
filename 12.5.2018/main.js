function kek(){
	if(document.getElementsByClassName('modalChild')[0].style.display ===""||document.getElementsByClassName('modalChild')[0].style.display ==="none"){
	document.getElementsByClassName('modalChild')[0].style.display ="block";
	document.getElementsByClassName('modalChild')[0].style.top ="15%";
	document.getElementsByClassName('modalParent')[0].style.height = '100vh';
	document.getElementsByClassName('modalParent')[0].style.position = 'fixed';
	document.getElementsByClassName('modalParent')[0].style.width = '100%';
	document.getElementsByClassName('modalParent')[0].style.top = '0';
	document.getElementsByClassName('modalParent')[0].style.background = 'rgba(0,0,0,0.6)';
}else{	
document.getElementsByClassName('modalChild')[0].style.display ="none";
document.getElementsByClassName('modalParent')[0].style.background = 'rgba(0,0,0,0.0)';
document.getElementsByClassName('modalParent')[0].style.position = 'relative';
document.getElementsByClassName('modalParent')[0].style.height = '100vh';
}
}

function lol(){
document.getElementsByClassName('modalChild')[0].style.display ="none";
document.getElementsByClassName('modalParent')[0].style.background = 'rgba(0,0,0,0.0)';
document.getElementsByClassName('modalParent')[0].style.position = 'relative';
document.getElementsByClassName('modalParent')[0].style.height = '100vh';
}

window.onclick = function(event){
	console.log(event.target);
	if(event.target == 	document.getElementsByClassName('modalParent')[0]){
		document.getElementsByClassName('modalChild')[0].style.display ="none";
document.getElementsByClassName('modalParent')[0].style.background = 'rgba(0,0,0,0.0)';
document.getElementsByClassName('modalParent')[0].style.position = 'relative';
document.getElementsByClassName('modalParent')[0].style.height = '100vh';
	}
}