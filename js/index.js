/**
 * Created by why on 2017/11/20.
 */
window.onload = function () {
    var index_head_ol = document.getElementById("index_head_ol");
    var index_head_ul = document.getElementById("index_head_ul");
    var index_head_ul_li = index_head_ul.children;
    var index_head_ol_li = index_head_ol.children;
    var clientWidths = document.documentElement.clientWidth || document.body.clientWidth;
    var clientHeights = document.documentElement.clientHeight || document.body.clientHeight;
    var index_head_div = document.getElementById("index_head_div");
    var index_body_div = document.getElementById("index_body_div");
    // 窗口最小宽度
    minSize();
    function minSize(){
        if(clientWidths <= 1300){
            index_head_div.style.width = 1300+"px";
            index_body_div.style.width = 1300+"px";
        }
    }
    // 窗口大小改变时刷新页面
    window.onresize = function(){
        location.reload();
    }

    var headUltimer=null;
    var x=0;
    run();
    function run(){
        // for(var k = 0;k<index_head_ol_li.length;k++) {
        //     index_head_ol_li[k].style.backgroundColor = "#e2e2e2";
        // }
        clearInterval(headUltimer);
         headUltimer = setInterval(
            function () {
                if(x==0){
                    index_head_ul_li[8].style.display = "none";
                    index_head_ol_li[8].style.backgroundColor = "#e2e2e2";
                }
                if(x>0){
                    index_head_ul_li[x-1].style.display = "none";
                    index_head_ol_li[x-1].style.backgroundColor = "#e2e2e2";
                }
                index_head_ul_li[x].style.display = "block";
                index_head_ol_li[x].style.backgroundColor = "#ff1842";
                x++;
                if(x>8){
                    x=0;
                }
            },5000);
    }


    index_head_ol.onmouseover = function (e) {
        clearInterval(headUltimer);
        var target = e.target;
        var childrens = this.children;
        for(var i = 0;i<childrens.length;i++) {
            if (target == childrens[i]) { //对比目标元素和li集合元素
                changeHead(i);
                for(var j = 0;j<childrens.length;j++) {
                    childrens[j].style.backgroundColor = "#e2e2e2";
                }
                childrens[i].style.backgroundColor = "#ff1842";
                x = i;
                return;
            }
        }
    }
    index_head_ol.onmouseout = function () {
        run();
    }
    index_head_ul.onmouseover = function () {
        clearInterval(headUltimer);
    }
    index_head_ul.onmouseout = function () {
        run();
    }

    function changeHead(head_index){
        for(var s = 0; s < index_head_ul_li.length; s++){
            index_head_ul_li[s].style.display = "none";
            if(s==head_index){
                index_head_ul_li[s].style.display = "block";
            }
        }
    }

    indexBack = function(who) {
        if(x==0){
            index_head_ul_li[0].style.display = "none";
            index_head_ul_li[8].style.display = "block";
            index_head_ol_li[0].style.backgroundColor = "#e2e2e2";
            index_head_ol_li[8].style.backgroundColor = "#ff1842";
            x=8;
            return;
        }
        index_head_ul_li[x].style.display = "none";
        index_head_ul_li[x-1].style.display = "block";
        index_head_ol_li[x].style.backgroundColor = "#e2e2e2";
        index_head_ol_li[x-1].style.backgroundColor = "#ff1842";
        x--;
    }

    indexNext = function(who) {
        if(x==8){
            index_head_ul_li[8].style.display = "none";
            index_head_ul_li[0].style.display = "block";
            index_head_ol_li[8].style.backgroundColor = "#e2e2e2";
            index_head_ol_li[0].style.backgroundColor = "#ff1842";
            x=0;
            return;
        }
        index_head_ul_li[x].style.display = "none";
        index_head_ul_li[x+1].style.display = "block";
        index_head_ol_li[x].style.backgroundColor = "#e2e2e2";
        index_head_ol_li[x+1].style.backgroundColor = "#ff1842";
        x++;
    }
    

    var index_main_top_rightUl = document.getElementById("index_main_top_rightUl");

    fastNext = function () {
        index_main_top_rightUl.style.marginLeft = -1025+'px';
    }
    
    fastBack = function () {
        index_main_top_rightUl.style.marginLeft = 0+'px';
    }



    //头部li显示详细div

    var index_head_top_ul = document.getElementById("index_head_top_ul");
    var headli_childs = index_head_top_ul.children;

    for(var c= 0;c < headli_childs.length;c++){
        headli_childs[c].onmouseenter = function (e) {
            var headli_target = e.target;
            for(var x= 0 ;x < headli_childs.length;x++){
                if(headli_childs[x]==headli_target){
                    var headli = headli_childs[x].children[2];
                    headli.style.display = "block";
                    headli_childs[x].onmouseleave = function () {
                        headli.style.display = "none";
                    }
                }
            }
        }
    }

   /* index_head_top_ul.onmouseover = function (e) {
        var headli_target = e.target;
        for(var x= 0 ;x < headli_childs.length;x++){
            if(headli_childs[x]==headli_target){
                var headli = headli_childs[x].children[2];
                headli.style.display = "block";
                headli_childs[x].onmouseout = function () {
                    headli.style.display = "none";
                }
            }
        }
    }*/



    
}