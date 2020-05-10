/**
 * Created by why on 2017/10/22.
 */
window.onload = function(){
    size();
    show();
}

window.onresize = function (){
    size();
}

function size() {
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var height = document.documentElement.clientHeight || document.body.clientHeight;
    var bottom = document.getElementById("bottom");
    var top = document.getElementById("divTop");
    var bottomDiv4 = document.getElementById("bottomDiv4");
    var divTop1 = document.getElementById("divTop1");
    var logRegTopDiv = document.getElementById("logRegTopDiv");
    
    divTop1.style.width = width-10+"px";
    bottom.style.width = width-10+"px";
    top.style.width = width-10+"px";
    bottomDiv4.style.width = width-100+"px";
    if (width < 1360){
        width = 1360;
        divTop1.style.width = width+"px";
        logRegTopDiv.style.width = width+"px";
    	top.style.width = width-10+"px";
    	bottom.style.width = width-10+"px";
    	bottomDiv4.style.width = width-100+"px";
    }
    if(width > 1400){
        width = 1460;
        divTop1.style.width = width+"px";
        logRegTopDiv.style.width = width+"px";
        bottom.style.width = width-10+"px";
    	top.style.width = width-10+"px";
    	bottomDiv4.style.width = width-100+"px";
    }
//  bottom.style.width = width-10+"px";
//  top.style.width = width-10+"px";
//  bottomDiv4.style.width = width-100+"px";
}

function show(){
	var leftImg = document.getElementById("divIndexTopShowsLeftImg");
	var rightImg = document.getElementById("divIndexTopShowsRightImg");
	var showsUl = document.getElementById("divIndexTopShowsUl");

	showsUl.onmouseover = function(){
		leftImg.style.visibility = "visible";
		rightImg.style.visibility =  "visible";
	}
	showsUl.onmouseout = function(){
		leftImg.style.visibility = "hidden";
		rightImg.style.visibility =  "hidden";
	}
}
