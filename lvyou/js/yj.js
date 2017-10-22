/*
* @Author: Administrator
* @Date:   2017-10-04 18:40:05
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-22 20:07:22
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
    			tu[j].style.display=`none`;
    			szbtn[j].style.color=`#666666`
    		}
    		tu[i].style.display=`block`;
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
    			tu[j].style.display=`none`;
    			szbtn[j].style.color=`#666666`
    		}
    		tu[i].style.display=`block`;
    		szbtn[i].style.color=`rgb(255, 58, 58)`
    	}
    }

            let tuli=$('.yj-tu>li');
            console.log(tuli[1])
            for(let i=0;i<tuli.length;i++){
            // tuli.each(function(i){
                tuli[i].onmouseover=function(){
                    $(this).find('.biankuang_1').stop(true).animate({
                        height:'324px'
                    },300)
                    $(this).find('.biankuang_2').stop(true).delay(300).animate({
                        width:'245px'
                    },300)
                    $(this).find('.biankuang_3').stop(true).animate({
                        height:'324px'
                    },300)
                    $(this).find('.biankuang_4').stop(true).delay(300).animate({
                        width:'245px'
                    },300)
                }
                tuli[i].onmouseout=function(){
                    $(this).find('.biankuang_1').stop(true).delay(100).animate({
                        height:'0px'
                    },100)
                    $(this).find('.biankuang_2').stop(true).animate({
                        width:'0px'
                    },100)
                    $(this).find('.biankuang_3').stop(true).delay(100).animate({
                        height:'0px'
                    },100)
                    $(this).find('.biankuang_4').stop(true).animate({
                        width:'0px'
                    },100)
                }
            // })
            }










}
