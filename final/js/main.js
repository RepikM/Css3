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
  // document.getElementsByTagName("li")[0].style.display = 'none';
  // document.getElementsByTagName("li")[1].style.display = 'none';
  // document.getElementsByTagName("li")[2].style.display = 'none'; 
  // document.getElementsByTagName("li")[3].style.display = 'none';
  document.getElementsByTagName("ul")[0].style.height = '40px';
  i = true; 
}
}


let counter = 1;
let intervalFlag = true;
let setTheImages = (function(){
      document.getElementsByClassName('images')[0].style.left = '0px';
      document.getElementsByClassName('images')[0].style.zIndex = '1000';
      document.getElementsByClassName('images')[1].style.left = String((640)) + "px";
      document.getElementsByClassName('images')[1].style.zIndex = '1000';
      document.getElementsByClassName('images')[2].style.left = String(-(640)) + "px";
      document.getElementsByClassName('images')[2].style.zIndex = '1000';
}());

let loopImages  = () =>{
  if(counter ===1){
    setTimeout(function(){
          document.getElementsByClassName('images')[1].style.left = '0px';
          document.getElementsByClassName('images')[1].style.zIndex = '1000';

          //hockey
          document.getElementsByClassName('images')[2].style.zIndex = '-1000';
          setTimeout(function(){
            document.getElementsByClassName('images')[2].style.left = String((640)) + "px";
          }, 500);
          document.getElementsByClassName('images')[0].style.left = String(-(640)) + "px";
          document.getElementsByClassName('images')[0].style.zIndex = '1000';
    }, 2000)

    counter +=1; 

  }else if(counter ===2){
    setTimeout(function(){
          document.getElementsByClassName('images')[2].style.zIndex = '1000';
          document.getElementsByClassName('images')[2].style.left = '0px';
          document.getElementsByClassName('images')[1].style.left = String(-(640)) + "px";
          document.getElementsByClassName('images')[1].style.zIndex = '1000';
          document.getElementsByClassName('images')[0].style.zIndex = '-1000';
          setTimeout(function(){
            document.getElementsByClassName('images')[0].style.left = String((640)) + "px";
          }, 500);
    }, 2000);
    counter +=1;
  }else if(counter ===3){
    setTimeout(function(){
          document.getElementsByClassName('images')[0].style.zIndex = '1000';
          document.getElementsByClassName('images')[0].style.left = '0px';
          document.getElementsByClassName('images')[2].style.left = String(-(640)) + "px";
          document.getElementsByClassName('images')[2].style.zIndex = '1000';
          document.getElementsByClassName('images')[1].style.zIndex = '-1000';
          setTimeout(function(){
            document.getElementsByClassName('images')[1].style.left = String((640)) + "px";
          }, 500);
    }, 2000); 
    counter =1;
  }
}
let slideShow = setInterval(function(){
  loopImages();
}, 4000);
document.getElementsByClassName('banner')[0].onmouseover = function(){
  clearInterval(slideShow);
}
document.getElementsByClassName('banner')[0].onmouseout = function(){
  slideShow = setInterval(function(){
    loopImages();
  }, 4000);
}
