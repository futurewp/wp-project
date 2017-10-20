/*
* @Author: Administrator
* @Date:   2017-09-19 17:33:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-03 17:06:12
*/
window.onload=function(){
/////////////侧栏
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
//banner    
    let banner=document.getElementsByClassName('banner1')[0];
	let bar=document.getElementsByClassName('bar-list')[0];
	let list=bar.getElementsByTagName('li');
    let barrBox=document.getElementsByClassName('banner-list')[0];
    let barrli=barrBox.getElementsByTagName('li');
	let barr=barrBox.getElementsByClassName('banner-img');
    let imgw=parseInt(getComputedStyle(barrBox,null).width);
    let now=0;
    let next=0;
    let t=setInterval(move, 3000);
    //时间函数----自动轮播
    banner.onmouseover = function(){
    	clearInterval(t);
    }
    banner.onmouseout = function(){
    	t=setInterval(move, 3000);
    }
    function move(){
        next++;
        if(next==barrli.length){
            next=0;
        }
        list[now].style.background = '#a2a2a2';
        list[next].style.background = '#fff';
        barrli[next].style.left = imgw+'px';
        animate(barrli[now],{left:-imgw});
        animate(barrli[next],{left:0});
        now=next;
    }


    //鼠标点击
	for(let i=0;i<barrli.length;i++){
        list[i].onclick=function(){
            if(now==i){return;}
            list[now].style.background = '#a2a2a2';
            list[i].style.background = '#fff';
            barrli[i].style.left = imgw+'px';
            animate(barrli[now],{left:-imgw});
            animate(barrli[i],{left:0});
            now=next=i;
        }
    }

//按需加载  楼层跳转
    let byleft=document.querySelectorAll('.bkleft>li>a');
    let ch=innerHeight;
    let floor=document.querySelectorAll('.floor');
    let floorArr=[];
    let color = ['#64c333','#ff6700','#ea5f8d','#0aa6e8','#64c333','#f15453','#19c8a9','#0aa6e8','#ea5f8d']
    floor.forEach(element=>{
        floorArr.push(element.offsetTop)
    })
    let flag=true;
        console.log(floorArr);
    window.onscroll = function(){
        let scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
        let hefu=document.querySelector('.hefu');
        let byL=document.querySelector('.bkleft');
        if(scrolltop>=600){
            hefu.style.top='0px'
            byL.style.left='2px'
            hefu.style.opacity='1'
            byL.style.opacity='1'
        }
        if(scrolltop<900){
            hefu.style.top='-50px'
            byL.style.left='-34px'
            hefu.style.opacity='0'
            byL.style.opacity='0'
        }



        if(!flag){
            return;
        }
        // console.log(document.documentElement.scrollTop)
        // console.log(document.body.scrollTop)
        
        floorArr.forEach((value,index)=>{
            if(scrolltop+ch>=value+200){

                for(let i=0;i<byleft.length;i++){
                    byleft[i].style.background='none';
                }
                 byleft[index].style.background=color[index];

                //index
                let imgs=floor[index].getElementsByTagName('img');
                // console.log(imgs)
                for(let i=0;i<imgs.length;i++){
                    imgs[i].src = imgs[i].getAttribute('imgpath');
                }
            }
        })


    


    }
    let onck=0;
    byleft.forEach((element,index)=>{
        element.onclick=function(){
            for(let i=0;i<byleft.length;i++){
                element.style.background='none';
            }
               element.style.background=color[index];
            
             flag=false;
           // document.documentElement.scrollTop=floorArr[index];
            animate(document.documentElement,{scrollTop:floorArr[index]},function(){
                flag=true;
            })
            onck=index;
        }
        element.onmouseover=function(){
             this.style.background=color[index];
        }
        element.onmouseout=function(){
            if(index!==onck){
             this.style.background='none';
            }
        }
    })

//右边框
    let piao=document.querySelector('.piao');
    let piao1=document.querySelectorAll('.piao1');
    let ghc=document.querySelector('.youbiankuang-logo');
    let ghc1=document.querySelectorAll('.youbiankuang-3');
    console.log(piao1)
    ghc.onmouseover=function(){
       piao.style.display='block';
       ghc.style.background='#ff0036';
       // piao.style.left= '-80px';
       animate(piao,{left:-80});
    }
    ghc.onmouseout=function(){
       piao.style.display='none';
       ghc.style.background='none';
       // piao.style.left= '-120px';
       animate(piao,{left:-120});
    }
    ghc1.forEach((element,index)=>{
        element.onmouseover=function(){
           piao1[index].style.display='block';
           element.style.background='#ff0036';
           // piao1.style.left= '-80px';
           animate(piao1[index],{left:-80});
        }
        element.onmouseout=function(){
           piao1[index].style.display='none';
           element.style.background='none';
           // piao1.style.left= '-120px';
           animate(piao1[index],{left:-120});
        }
})



}