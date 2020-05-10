/**
 * Created by why on 2017/11/21.
 */

setTimeout(waits,1000);
function waits() {
    var widths = document.documentElement.clientWidth || document.body.clientWidth;
    var heights = document.documentElement.clientHeight || document.body.clientHeight;
    // 底部宽度
    var bottoms_allin_div = document.getElementById("bottoms_allin_div");
    // 顶部宽度
    var tops_main_div = document.getElementById("tops_main_div");
    // 固定顶部宽度
    var fix_top_div = document.getElementById("fix_top_div");

    if(widths<=1300){
        bottoms_allin_div.style.width = 1300+"px";
        tops_main_div.style.width = 1300+"px";
        fix_top_div.style.width = 1300+"px";
    }else{
        bottoms_allin_div.style.width = 100+"%";
        tops_main_div.style.width = 100+"%";
        fix_top_div.style.width = 100+"%";
    }
}

window.onresize = function () {
    setTimeout(waits,1000);
}

