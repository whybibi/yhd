
// var leftImg = null;
// var rightImg = null;
// var showsUl = null;
//
// window.onload = function(){
// 	leftImg = document.getElementById('divIndexTopShowsLeftImg');
// 	rightImg = document.getElementById("divIndexTopShowsRightImg");
// 	showsUl = document.getElementById("divIndexTopShowsUl");
// }

document.getElementById("divIndexTopShowsUl").onmouseover = function(){
    document.getElementById('divIndexTopShowsLeftImg').style.visible = true;
    document.getElementById("divIndexTopShowsRightImg").style.visible = true;
}

