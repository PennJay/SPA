window.onload=function(){
    var timer = 0,i=0;
    var progress = document.getElementById('progress');
    var begin = document.getElementById('begin');
    var pause = document.getElementById('pause');
    var re = document.getElementById('re');
    begin.onclick=function(){
        timer = window.setInterval(function(){
            progress.value = i;
            i++;
         
        },200)};
   pause.onclick= function(){
       clearTimeout(timer);
   }
    re.onclick=function(){
        i=0;
        progress.value = i;
    };
    
}