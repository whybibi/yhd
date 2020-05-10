/**
 * Created by why on 2020/5/9.
 */
var fix_top_div = document.getElementById("fix_top_div");
window.onscroll = function(){
    var scrolltops = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrolltops > 500){
        fix_top_div.style.display = "block";
    }
    if(scrolltops < 500){
        fix_top_div.style.display = "none";
    }
}