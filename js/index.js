

window.onload=function(){
	$(".navcd").onmousedown=function(){
		let div=document.createElement("div")
		div.addClass("top_caidan")
	
	}
}



















function $(str){//#box .cls  p
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}







































