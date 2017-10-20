/*
* @Author: Administrator
* @Date:   2017-09-18 17:10:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 13:21:54
*/
window.onload=function(){
	let aside=document.getElementsByClassName('banner-left')[0];
	let lis=aside.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');

	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			item[i].style.display='block';
		}

		lis[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}
	
	let bar=document.getElementsByClassName('bar-list')[0];
	let list=bar.getElementsByTagName('li');
	let barr=document.getElementsByClassName('banner-img');
	console.log(barr);

	// for(let i=0;i<list.length;i++){
	// 	list[i].onmouseover=function(){
	// 		//所有的消失（遍历），对应的显示
	// 		for(let i=0;i<list.length;i++){
	// 			barr[i].style.display='none';
 //                // list[i].style.background='#fff';
	// 		}
	// 		barr[i].style.display='block';	
	// 		// list[i].style.background='#eaeaea';	
	// 	}
	// }

// 方法二：使上一张消失，要移入的图片显示
    // let now=0;
	// for(let i=0;i<list.length;i++){
	// 	list[i].onmouseover=function(){
	// 			barr[now].style.opacity='0';
	// 		    barr[i].style.opacity='1';	
	// 		    now=i;
	// 	}
	// }
 
// 方法三：使上一张消失，要移入的图片显示----this  var
    let now=0;
	for(var i=0;i<list.length;i++){
   	    list[i].index =i;
		list[i].onmouseover=function(){
				barr[now].style.opacity='0';
			    barr[this.index].style.opacity='1';	
			    now=this.index;
		}
	}

// 方法四：使上一张消失，要移入的图片显示----闭包函数
   // let now=0;
   // for(var i=0;i<list.length;i++){
   // 	list[i].index =i;
   // 	list[i].onmouseover=(function(i){
   // 		return function(){
			// 	barr[now].style.display='none';
			//     barr[i].style.display='block';
			//     now=i;
   // 		}
   // 	})(i)
   // }






}
