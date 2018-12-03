let i = true;
document.getElementsByClassName("icon")[0].onclick = function Disp(){
	if(i){
  document.getElementsByTagName("li")[0].style.float = 'none'; 
  document.getElementsByTagName("li")[1].style.float = 'none';
  document.getElementsByTagName("li")[2].style.float = 'none';
  document.getElementsByTagName("li")[3].style.float = 'none';
  document.getElementsByTagName("li")[0].style.display = 'block'; 
  document.getElementsByTagName("li")[1].style.display = 'block'; 
  document.getElementsByTagName("li")[2].style.display = 'block'; 
  document.getElementsByTagName("li")[3].style.display = 'block'; 
  document.getElementsByTagName("ul")[0].style.height = '160px';
  i = false; 
}else{
	 document.getElementsByTagName("li")[0].style.float = 'left'; 
  document.getElementsByTagName("li")[1].style.float = 'left';
  document.getElementsByTagName("li")[2].style.float = 'left';
  document.getElementsByTagName("li")[3].style.float = 'left';
  document.getElementsByTagName("li")[0].style.display = 'none';
  document.getElementsByTagName("li")[1].style.display = 'none';
  document.getElementsByTagName("li")[2].style.display = 'none'; 
  document.getElementsByTagName("li")[3].style.display = 'none';
  document.getElementsByTagName("ul")[0].style.height = '40px';
  i = true; 
}
}