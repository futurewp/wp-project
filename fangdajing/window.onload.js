/*
* @Author: Administrator
* @Date:   2017-09-25 15:51:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-25 16:12:35
*/
		function getClass1(classname){
			// if(document.getElementsByClassName){
			if(false){         //当电脑中没有不支持的浏览器时，这行用于测试
				return document.getElementsByClassName(classname);
			}else{
				var newarr=[];
				var all=document.getElementsByTagName('*');
				for(var i=0;i<all.length;i++){
					if(checkclass(all[i].className,classname)){
						newarr.push(all[i]);
					}
				}
				return newarr;
			}
		}
		function checkclass(className,classname){
			var arr = className.split(' ');
			for(var i=0;i<arr.length;i++){
				if(arr[i]==classname){
					return true;
				}
			}
			return false;
		}

function $(select,ranger){
	if(typeof select=='string'){
			ranger = ranger ? ranger:document;
			var first = select.charAt(0);
			if(first == '.'){
				// class
				return getClass1(select.substring(1));                   //数组
			}else if(first == '#'){
				//id
				return ranger.getElementById(select.substring(1))      //元素
			}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
				//tagName规则---字符串：以字符开头[a~z]
				return ranger.getElementsByTagName(select)
			}

	}else if(typeof select=='function'){
		window.addEventListener('load',select);
	}

}