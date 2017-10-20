/*
* @Author: Administrator
* @Date:   2017-09-15 18:12:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 18:14:16
*/
	let five=document.getElementById('five');

	let bbb=setInterval(function(){
		if(five.innerText<=0){
           clearInterval(bbb);
           location.replace('login.html')
		}
		five.innerText-=1
	}, 1000)