/*
* @Author: Administrator
* @Date:   2017-10-03 17:36:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-22 21:19:36
*/
window.onload=function(){
	let bannerBox=document.querySelector('.banner-list');
	let banner=document.querySelectorAll('.banner-list>li');
	let btn1=document.querySelector('.banner-btn1');
	let btn2=document.querySelector('.banner-btn2');
	let imgw=parseInt(getComputedStyle(bannerBox,null).width);
	let next=0;
	let now=0;
	let flag=true;
    btn2.onclick = function(){
        if (!flag) {
            return;
        }
          move();
          flag=false;
    }
    btn1.onclick = function(){
        if (!flag) {
            return;
        }
          moveL();
          flag=false;
    	 
    }	
    function move(){
        next++;
        if(next== banner.length){
            next=0;
        }
        banner[next].style.left = imgw+'px';
        animate(banner[now],{left:-imgw});
        animate(banner[next],{left:0},function(){
            flag=true;
        });
        now=next;
    }
    function moveL(){
        next++;
        if(next== banner.length){
            next=0;
        }
        banner[next].style.left = -imgw+'px';
        animate(banner[now],{left:imgw});
        animate(banner[next],{left:0},function(){
            flag=true;
        });
        now=next;
    }

    



        let lis=$('.tu2>li');
        let liImg=$('tu2Img>img')

        let mask=$('.zhezhao');
       
        let mimg=$('#zzimg');
        let zzp=$('.zz-nrw');
        let zzs=$('.zz-jiage2');
        let zzli=$('.zz-img>li>a');
        
        let smimg=$('.zz-img>li>a>img'); 
console.log(smimg)
        let close=$('div.close');
        let btnl=$('div.btnl');
        let btnr=$('div.btnr');            

        let i=0;

        smimg.each(function(index){
            let ss=$('img',lis.eq(index)).attr('src')
            smimg.eq(index).attr('src',ss)
            zzli.eq(index).css({border: '2px solid rgba(0, 0, 0, 0)'})
        })

        lis.on('click',function(){
            i=$(this).index()
            let src=$('img',this).attr('src');
            let ptext=$('.tua',this).html();
            let ptext1=$('.tu2-jiage2',this).html();
            let ptext2=$('.tu2-jiage3',this).html();

            mimg.attr('src',src);
            zzp.html(ptext);
            zzs.html(ptext1+ptext2);
            zzli.each(function(index){
                zzli.eq(index).css({border: '2px solid rgba(0, 0, 0, 0)'})
            })
            zzli.eq(i).css({border: '2px solid #f13a3a'})
            mask.addClass('active')
        })

        close.click(function(){
            mask.removeClass('active')
        })

        btnr.click(function(){
            i++;
            if(i>lis.length-1){
                i=0;
            }
            src=$('img',lis[i]).attr('src');
            ptext=$('.tua',lis[i]).html();
            ptext1=$('.tu2-jiage2',lis[i]).html();
            ptext2=$('.tu2-jiage3',lis[i]).html();

            mimg.attr('src',src);
            zzp.html(ptext).css({color:'#474747'});
            zzs.html(ptext1+ptext2);
            zzli.each(function(index){
                zzli.eq(index).css({border: '2px solid rgba(0, 0, 0, 0)'})
            }) 
            zzli.eq(i).css({border: '2px solid #f13a3a'})     
        })
        
        btnl.click(function(){
            i--;
            if(i<0){
                i=lis.length-1;
            }
            src=$('img',lis[i]).attr('src');
            ptext=$('.tua',lis[i]).html();
            ptext1=$('.tu2-jiage2',lis[i]).html();
            ptext2=$('.tu2-jiage3',lis[i]).html();

            mimg.attr('src',src);
            zzp.html(ptext).css({color:'#474747'});
            zzs.html(ptext1+ptext2);
            zzli.each(function(index){
                zzli.eq(index).css({border: '2px solid rgba(0, 0, 0, 0)'})
            }) 
            zzli.eq(i).css({border: '2px solid #f13a3a'})
        })
            
            zzli.each(function(i){
                // zzli.eq(i).css({border: '2px solid rgba(0, 0, 0, 0)'})
                zzli.eq(i).click(function(){ 
                    src=$('img',lis[i]).attr('src');
                    ptext=$('.tua',lis[i]).html();
                    ptext1=$('.tu2-jiage2',lis[i]).html();
                    ptext2=$('.tu2-jiage3',lis[i]).html();

                    mimg.attr('src',src);
                    zzp.html(ptext).css({color:'#474747'});
                    zzs.html(ptext1+ptext2);
                    zzli.each(function(a){
                       zzli.eq(a).css({border: '2px solid rgba(0, 0, 0, 0)'}) 
                   })
                    zzli.eq(i).css({border: '2px solid #f13a3a'})
                })
            }) 
            

        $(document).mousedown(false); 


            let pian=$('.pian>li'); 
            for(let i=0;i<lis.length;i++){
            // tuli.each(function(i){
                pian[i].onmouseover=function(){
                    $(this).find('.biankuang_1').stop(true).animate({
                        height:'200px'
                    },300)
                    $(this).find('.biankuang_2').stop(true).delay(300).animate({
                        width:'547px'
                    },300)
                    $(this).find('.biankuang_3').stop(true).animate({
                        height:'200px'
                    },300)
                    $(this).find('.biankuang_4').stop(true).delay(300).animate({
                        width:'547px'
                    },300)
                    $(this).find('.tu2-zz').stop(true).animate({width:'547px',opacity:1});
                }
                pian[i].onmouseout=function(){
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
                    $(this).find('.tu2-zz').stop(true).animate({width:'0',opacity:0});
                }
            // })
            }














}