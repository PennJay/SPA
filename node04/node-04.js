window.onload=function(){
    var img = this.document.getElementById('img');
    img.onmouseover=function(){
        img.src="t1.jpg";
        pwd.type="text";
    }
    img.onmouseout=function(){
        img.src="t2.jpg"
        pwd.type="password";
    }
}