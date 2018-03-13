window.onload = function(){
    var a = document.getElementById('btn');
    var chang = document.getElementById('chang');
    var kuan = document.getElementById('kuan');
    var zhouchang = document.getElementById('zhouchang');
    var mianji = document.getElementById('mianji')
    a.onclick = function(){
    var c = chang.value;
    var d = kuan.value;
    zhouchang.value = c*2+d*2;
    mianji.value = c*d;
    }

    chang.onblur = function(){
        if(chang.value ==' '){
            a1.innerHTML = "长度不能为空！";
        }
    }
        kuan.onblur = function(){
        if(kuan.value == ' '){
            a2.innerHTML = '宽度不能为空！';
        }
        }
}
  