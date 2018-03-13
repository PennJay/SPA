var n = 5;
window.onload=function(){
    var btn = document.getElementById('btn');
    btn.onclick=function(){           
      setInterval(function(){
          if(n>=0){
         btn.disabled = true;
         btn.innerHTML ='同意'+n+'秒';
         n--;
        }else{
        btn.disabled=false;
        btn.innerHTML = '同意';
        clearInterval();
        }
       
       },1000);
   
    }
       
}
    
