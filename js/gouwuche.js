// window.onload = function(){
	
// 	var add=$(".add");
// 	for(var i=0;i<add.length;i++){
// 		add[i].onclick=function(){
// 			public(this,"+");
// 		}
// 	}

// 	var reduction = $(".reduction");
// 	for(var i=0;i<reduction.length;i++){
// 		reduction[i].onclick = function(){
// 			public(this,"-");
// 		}
// 	}
	

// 	var dele = $(".p1");
// 	for(var i=0;i<dele.length;i++){
// 		dele[i].onclick = function(){
// 			var delebox = this.parentNode.parentNode.parentNode;
// 			if(confirm("您确认删除吗？")){
// 				delebox.remove();
// 			}else{
// 				alert("感谢手下留情！");
// 			}
// 		}
// 	}
		
// 		//function public(btn,sign){
// 		function public(btn,sign){
// //.......................................数量的加减
			

// 			//获取商品的单件数
// 			var count= parseInt(btn.parentNode.children[1].innerHTML);
// 			//获取商品的总件数
// 			var number = parseInt($("#number").innerHTML);
// 			//判断是加法还是减法
// 			sign == "+"?count++:count--;
// 			sign == "+"?number++:number--;

// 			if(count<0){
// 				return;
// 			}
// 			//把数量赋值给总计数量
// 			$("#number").innerHTML = number;



// //.......................................总价钱的加减
		

// 		//获取单价
// 		var money = Number(btn.parentNode.nextElementSibling.children[0].innerHTML);
// 		//获取总价
// 		var zongmoney = Number($("#zongmoney").innerHTML);
// 		//判断按键或者减 因为浮点数太多toFixed
// 		$("#zongmoney").innerHTML=(sign=="+"?zongmoney+money:zongmoney-money).toFixed(2);



// }

window.onload=function(){
	
	//获取商品的单件数
	$("#val").value="1";
	var val= $("#val").value;
	$("#jian").previousSibling.innerHTML="2499";
	var danjia=$("#jian").previousSibling.innerHTML;
		
   	
	$("#shanchu").previousSibling.innerHTML=val*danjia;
	


   

	$("#shanchu").onclick=function(){
		var dele = this.parentNode.parentNode;
		if(confirm("您真的要狠心删除吗？")){
			dele.remove();
		}else{
			alert("感谢您对小米的支持！")
		}
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
