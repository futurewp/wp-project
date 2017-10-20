/*
* @Author: Administrator
* @Date:   2017-09-15 17:23:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 21:24:23
*/
let username=document.getElementById('username');
let password=document.getElementById('password');
let tj=document.getElementById('tj');
tj.onclick = function(){
	if(username.value=='wp' && password.value=='12345'){
		alert('success')
	}else{
		location.replace("error.html")
	}
}