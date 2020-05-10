/**
 * Created by why on 2017/11/28.
 */

var made_in_china_imgli1 = document.getElementById("made_in_china_imgli1");
var made_in_china_imgli2 = document.getElementById("made_in_china_imgli2");
var made_in_china_imgli3 = document.getElementById("made_in_china_imgli3");
var china_left_ul = document.getElementById('china_left_ul');
var chinaAd_position = document.getElementById('chinaAd_position');

var lis = [made_in_china_imgli1,made_in_china_imgli2,made_in_china_imgli3];


china_left_ul.onmouseover = function () {
    clearInterval(madeInChinaAD);
}
china_left_ul.onmouseout = function () {
    madeinchinaAD();
}

var i =0;
var madeInChinaAD = null;
madeinchinaAD();
function madeinchinaAD() {
    clearInterval(madeInChinaAD);
    madeInChinaAD =  setInterval(function () {
        if(i>2){
            i=0;
            style1(lis[i]);
            style2(lis[1]);
            style3(lis[2]);
            chinaAd_position.innerHTML = i+1;
            i++;
            return;
        }
        style1(lis[i]);
        chinaAd_position.innerHTML = i+1;
        if(i==1){
            style3(lis[0]);
            style2(lis[2]);
        }else if(i==2){
            style2(lis[0]);
            style3(lis[1]);
        }
        i++;
    },3000);
}

 function style1(which) {
     which.style.width = 200+"px";
     which.style.height = 225+"px";
     which.style.left = 0;
     which.style.zIndex = 100;
     which.style.top = 0;
     which.style.opacity = 1;
 }
function style2(which) {
    which.style.width = 180+"px";
    which.style.height = 225+"px";
    which.style.left = 10+"px";
    which.style.zIndex = 90;
    which.style.top = -10+"px";
    which.style.opacity = 0.7;
}
function style3(which) {
    which.style.width = 160+"px";
    which.style.height = 225+"px";
    which.style.left = 20+"px";
    which.style.zIndex = 80;
    which.style.top = -18+"px";
    which.style.opacity = 0.3;
}

function startMove(obj,type,target){
     clearInterval(obj.move);
    obj.move = setInterval(function () {
        var iCurrent = 0;
        if(type == 'opacity'){
            iCurrent = parseInt(parseFloat(getStyle(obj,type))*100);
        }else{
            iCurrent = parseInt(getStyle(obj,type));
        }
        var adSpeed = (target-iCurrent)/8;
        adSpeed = adSpeed>0?Math.floor(adSpeed):Math.ceil(adSpeed);
        if(iCurrent==target){
            clearInterval(obj.moveAd);
        }else{
            if(type == 'opacity'){
                obj.style.filter = 'alpha(opacity:'+(iCurrent+adSpeed)+')';
                obj.style.opacity = (iCurrent+adSpeed)/100;
            }
            else{
                obj.style[type] = iCurrent+adSpeed+'px';
            }
        }
    },150);
}


function getStyle(obj,type){
    if(obj.currentStyle){
        return obj.currentStyle[type];
    }else{
        return getComputedStyle(obj,false)[type];
    }
}