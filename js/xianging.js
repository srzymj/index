function $(str){//#box .cls  p
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
}

window.onload = function(){
	var oSmall = $("#tukuang");
	var oMask = $("#mask");
	var oBig = $("#ziliao");
	//鼠标进入，与离开
	oSmall.onmouseover = function(){
		oBig.style.display = "block";
		oMask.style.display = "block";
	}
	oSmall.onmouseout = function(){
		oBig.style.display = "none";
		oMask.style.display = "none";
	}
	
	

	oSmall.onmousemove= function(e){
		//判断零点位置
		var left = e.clientX - oSmall.offsetLeft - oMask.offsetWidth/2;
		var top  = e.clientY - oSmall.offsetTop - oMask.offsetHeight/2;

		if(left<0){
			left=0;
		}	
		var maxLeft   =  oSmall.offsetWidth - oMask.offsetWidth;
		if(left>maxLeft){
			left=maxLeft;
		}
		
		if(top<0){
			top=0;
		}
		var maxTop = oSmall.offsetHeight - oMask.offsetHeight;
		if(top>maxTop){
			top=maxTop;
		}
		//判断最大移动距离
		//赋值
		oMask.style.left=left + "px";
		oMask.style.top = top + "px";

		//定义大盒子的图片尺寸
		var x =left*oBig.offsetWidth/oMask.offsetWidth;
		var y = top*oBig.offsetHeight/oMask.offsetHeight;

		oBig.style.backgroundPositionX = -x + "px";
		oBig.style.backgroundPositionY = -y + "px";

		//<img id="imgflag" src="images/1.gif" onclick="changeImage()">
//function changeImage(){
//document.getElementById("imgflag").src="2.gif";
//}		
		var arr=["image/liebiao_xiaomimix.jpg","image/liebiao_xiaomint2.jpg",
				"image/liebiao_hongmin4.jpg"]
			
		var allimg=$("#xiaotu").children;
		var count=	allimg.split(",")
		for(var i=0;i<allimg.length;i++){
			allimg[i].onclick = function(){
			document.getElementById("bigimg").style.src=arr[i];
			}
		}
		console.log(arr[i]);
		console.log(allimg[i]);
		console.log(i);
		console.log(count);
	}
}
	