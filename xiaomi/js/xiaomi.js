/*
* @Author: Administrator
* @Date:   2017-09-18 22:49:48
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-18 23:11:03
*/
window.onload=function(){
	let aside=document.getElementsByClassName('word')[0];
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

	for(let i=0;i<5;i++){
		list[i].onclick=function(){
			for(let i=0;i<5;i++){
				barr[i].style.display='none';
                list[i].style.background='#b7b3d3';
			}
			barr[i].style.display='block';	
			list[i].style.background='#eaeaea';	
		}
	}



}