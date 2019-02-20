

let myTimer = null;
let currIndex = 0;
var arr=["http://www.baidu.com","http://www.taobao.com","http://www.jd.cn","http://www.1000phone.com","http://www.163.com"];


//自动播放
  function autoPlay(){
  	if(myTimer!= null){
  		return;
  	}
  	myTimer = setInterval(function(){
  		//数据处理
  		let outIndex = currIndex;
  		currIndex = currIndex + 1;

  		if(currIndex>=5){
  			currIndex=0;
  		}
  		//外观呈现
  		showImg(outIndex,currIndex);
  	},1000);
  }

function stopPlay(){
	window.clearInterval(myTimer);
	myTimer= null;
}

function goImg(index){
	//数据处理
	let outIndex = currIndex;
	currIndex = index;

	if(currIndex>=5 || currIndex<0){
		currIndex=0;
	}
	//二，外观呈现
	showImg(outIndex,currIndex);
}
function showImg(outOrd,inOrd){
	if(outOrd==inOrd){
		return;
	}
	//1,改图片
	//一个淡入，一个淡出
	let imgDoms = $("#box").children;
	moveYun02(imgDoms[outOrd],"opacity",0,2000);
	moveYun02(imgDoms[inOrd],"opacity",1,2000);
	fadeInOut(imgDoms[outOrd],200,imgDoms[inOrd]);

//2,改豆豆
let liDoms = $("#doudouBox").children;
for(var i=0;i<liDoms.length;i++){
	liDoms[i].style.backgroundColor = "#ccc";
}

	liDoms[inOrd].style.backgroundColor = "red";
}


window.onload = function(){
	//自动播放
	autoPlay();
	//鼠标进入停止播放
	$("#box").onmouseover = function(){
		stopPlay();
	}
	$("#box").onmouseout = function(){
		autoPlay();
	}
	let liDoms = $("#doudouBox").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].setAttribute("index",i);
		//绑定事件
		liDoms[i].onclick = function(event){
			let evt = event || window.event;
			goImg(this.getAttribute("index"));
			evt.stopPropagation();
		}
	}
	//5,链接
	$("#box").onclick = function(){
		location.href = arr[currIndex];
	}
}

function fadeInOut(domObjOut,timeLong,domObjIn){

	var startValue=1;
	var endValue = 0;

	var direction = -1;

	//已知：时长，距离（Math.abs(startValue-endValue)）
	var timeSpace =  10;
	var step =Math.abs(startValue-endValue)/(timeLong/timeSpace) ;//(步长= 距离/总步数;  总步数 = 时长/时间间隔)

	
	var value = startValue;

	var myTimer = setInterval(function(){
		//一、数据处理
		//1、改变数据
		value = value+direction*step;
		
		//2、边界
		//if(value>=endValue){
		if(direction>0?value>=endValue:value<=endValue){
			value = endValue;
			window.clearInterval(myTimer);
		}

		//二、改变外观
		domObjOut.style.opacity = value;
		domObjIn.style.opacity = (1-value);
		
	},timeSpace);

}
function moveYun(domObj,styleAttr,startValue,endValue,direction,step,timeSpace){
	var value = startValue;

	var myTimer = setInterval(function(){
		//一、数据处理
		//1、改变数据
		value = value+direction*step;
		
		//2、边界
		//if(value>=endValue){
		if(direction>0?value>=endValue:value<=endValue){
			value = endValue;
			window.clearInterval(myTimer);
		}

		//二、改变外观
		if(styleAttr=="opacity"){
			domObj.style[styleAttr] = value;
		}else{
			domObj.style[styleAttr] = value+"px";
		}
	},timeSpace);	
}
function moveYun02(domObj,styleAttr,endValue,timeLong){

	var startValue=parseInt(getStyle(domObj,styleAttr));

	var direction = startValue>endValue?-1:1;

	//已知：时长，距离（Math.abs(startValue-endValue)）
	var timeSpace =  10;
	var step =Math.abs(startValue-endValue)/(timeLong/timeSpace) ;//(步长= 距离/总步数;  总步数 = 时长/时间间隔)

	moveYun(domObj,styleAttr,startValue,endValue,direction,step,timeSpace);
	
}
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	
function getStyle(domObj,attr){
	if(domObj.currentStyle){
		return domObj.currentStyle[attr];//对象的属性是变量时，不能用点，得用方括号
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}