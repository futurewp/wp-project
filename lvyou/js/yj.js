/*
* @Author: Administrator
* @Date:   2017-10-04 18:40:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-04 19:26:58
*/
window.onload=function(){
    let tu=document.querySelectorAll('.yj-tu');
    let btn=document.querySelectorAll('.yj-btn>li');
    let szbtn=document.querySelectorAll('.yj-btn>span');
    console.log(tu);

    for(let i=0;i<szbtn.length;i++){
    	szbtn[i].onclick=function(){
    	    if(i==0){
    	    	btn[0].style.color=`#ccc`
    	    	btn[szbtn.length-1].style.color=`#666666`
    	    }
    	    if(i==szbtn.length-1){
    	    	btn[szbtn.length-1].style.color=`#ccc`
    	    	btn[0].style.color=`#666666`
    	    }
    		for(let j=0;j<tu.length;j++){
    			tu[j].style.opacity=`0`;
    			szbtn[j].style.color=`#666666`
    		}
    		tu[i].style.opacity=`1`;
    		szbtn[i].style.color=`rgb(255, 58, 58)`
    	}
    }

    for(let i=0;i<szbtn.length;i++){
    	btn[i].onclick=function(){
    		if(i==0){
    			btn[0].style.color=`#ccc`
    			btn[szbtn.length-1].style.color=`#666666`
    		}
    		if(i==szbtn.length-1){
    			btn[szbtn.length-1].style.color=`#ccc`
    			btn[0].style.color=`#666666`
    		}
    		for(let j=0;j<tu.length;j++){
    			tu[j].style.opacity=`0`;
    			szbtn[j].style.color=`#666666`
    		}
    		tu[i].style.opacity=`1`;
    		szbtn[i].style.color=`rgb(255, 58, 58)`
    	}
    }










}
