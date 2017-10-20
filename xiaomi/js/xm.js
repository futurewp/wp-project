/*
* @Author: Administrator
* @Date:   2017-09-19 19:21:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-03 17:13:57
*/
window.onload=function(){
    let gouwuche=document.getElementsByClassName('head-right2')[0];
    let gouwu=gouwuche.getElementsByTagName('div');

            gouwuche.onmouseover=function(){
                gouwu[2].style.height='98px';
            }        
            gouwuche.onmouseout=function(){
                gouwu[2].style.height=`0`;
            }


	// let aside=document.getElementsByClassName('word')[0];
	let lis=document.querySelectorAll('.word>li');
	let item=document.getElementsByClassName('item');

	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			item[i].style.display='block';
		}

		lis[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}
////导航
    let navDown=document.querySelectorAll('.nav-down');
    let navLi=document.querySelectorAll('.nav-center>li');
    navLi.forEach((element,index)=>{
        element.onmouseover=function(){
            navDown[index].style.height='230px';
        }
        element.onmouseout=function(){
            navDown[index].style.height='0px';    
        }
    }) 
 
//banner
    let banner=document.getElementsByClassName('banner')[0];
	let bar=document.getElementsByClassName('bar-list')[0];
	let list=bar.getElementsByTagName('li');
    let barrBox=document.getElementsByClassName('banner-list')[0];
    let barrli=barrBox.getElementsByTagName('li');
	let barr=barrBox.getElementsByClassName('banner-img');
    // console.log(barr);
	let lefts=document.getElementsByClassName('banner-left')[0];
	let rights=document.getElementsByClassName('banner-right')[0];
    let imgw=parseInt(getComputedStyle(barrBox,null).width);
    // console.log(imgw);
    let now=0;
    let next=0;
    let flag=true;
    // 左右箭头
    rights.onclick = function(){
        if (!flag) {
            return;
        }
          move();
          flag=false;
    }
    lefts.onclick = function(){
        if (!flag) {
            return;
        }
          moveL();
          flag=false;
    	 
    }
    // 时间函数----自动轮播
    let t=setInterval(move,3000);
    
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
        list[now].style.background = '#555171';
        list[next].style.background = '#abc9fa';
        barrli[next].style.left = imgw+'px';
        animate(barrli[now],{left:-imgw});
        animate(barrli[next],{left:0},function(){
            flag=true;
        });
        now=next;
    }
    function moveL(){
        next--;
        if(next<0){
            next=barrli.length-1;
        }
        list[now].style.background = '#555171';
        list[next].style.background = '#abc9fa';
        barrli[next].style.left = -imgw+'px';
        animate(barrli[now],{left:imgw});
        animate(barrli[next],{left:0},function(){
            flag=true;
        });
        now=next;
    }

    for(let i=0;i<barrli.length;i++){
        list[i].onclick=function(){
            if(now==i){return;}
            list[now].style.background = '#555171';
            list[i].style.background = '#abc9fa';
            barrli[i].style.left = imgw+'px';
            animate(barrli[now],{left:-imgw});
            animate(barrli[i],{left:0});
            now=next=i;
        }
    }


//明星产品
    // let starBox=document.getElementsByClassName('sb-bottom')[0];
    // let star=document.getElementsByClassName('star-box-bottom')[0];
    // let starli=star.getElementsByTagName('li')[0];
    // let sLefts=document.getElementsByClassName('star-box-top-jiantou1')[0];
    // let sRights=document.getElementsByClassName('star-box-top-jiantou2')[0];
    // let sw=(starli.offsetWidth+parseInt(getComputedStyle(starli,null).marginRight))*5
    // let i=0;
    // console.log(sw);

    // sLefts.onclick=function(){
    //     if(i==0){
    //         i++;
    //     }
    //     star.style.transform=`translateX(-${i*sw}px)`;
    //     sLefts.style.color=`#e0e0e0`;
    //     sRights.style.color=`#666666`;
    //     sRights.onmouseover=function(){
    //         // sLefts.style.color=`#e0e0e0`;
    //         sRights.style.color=`#ff6700`;
    //     }
    //     // sRights.onmouseout=function(){
    //     //     // sLefts.style.color=`#e0e0e0`;
    //     //     sRights.style.color=`#666666`;
    //     // }
    // }
    // sRights.onclick=function(){
    //     if(i==1){
    //         i--;
    //     }
    //     star.style.transform=`translateX(-${i*sw}px)`;
    //     sLefts.style.color=`#666666`;
    //     sRights.style.color=`#e0e0e0`;

    //     sLefts.onmouseover=function(){
    //         sLefts.style.color=`#ff6700`;
    //         // sRights.style.color=`#e0e0e0`;
    //     }
    //     // sLefts.onmouseout=function(){
    //     //     sLefts.style.color=`#666666`;
    //     //     // sRights.style.color=`#e0e0e0`;
    //     // }
    // }
    // setInterval(function(){
    //     // animate(star,{left:0})
    //     star.style.transform='translateX(0px)';
    //     sLefts.style.color=`#666666`;
    //     sRights.style.color=`#e0e0e0`;
    // },3000);
    // setInterval(function(){
    //     // animate(star,{left:-sw})
    //     star.style.transform='translateX(-1240px)';
    //     sLefts.style.color=`#e0e0e0`;
    //     sRights.style.color=`#666666`;
    // },3000); 
  let stBox=document.getElementsByClassName('star-box')[0];
  let star=stBox.querySelector('.star-box-bottom');
  let zuohua=stBox.querySelector('.star-box-top-jiantou1');
  let youhua=stBox.querySelector('.star-box-top-jiantou2');
  let num=0;
  let start=setInterval(function(){
    if(num==2){
      num=0;
    }
  star.style.marginLeft=-num*1226+'px';
  star.style.transition='all 1s';
  num++;
  },3000);
  youhua.onclick=function(){
    if(num===1){
      return;
    }
    clearInterval(start);
    zuohua.style.color=`#666666`;
    youhua.style.color=`#e0e0e0`;
    star.style.marginLeft=-num*1226+'px';
    num++;
  }
  zuohua.onclick=function(){
    if(num===0){
         return;
    }
    clearInterval(start);
    zuohua.style.color=`#e0e0e0`;
    youhua.style.color=`#666666`;
    star.style.marginLeft=-num*1226+'px';
    num--;
  }

 /////////////搭配 配件 周边 
let huantupian = document.querySelectorAll('.huantupian');
huantupian.forEach(function (value) {
    huantu(value);
})
function huantu(val){
  let dpbx=val.querySelectorAll('.dpBox>.dpbx');
  let dpli=val.querySelectorAll('.dapei-box-top-right>a>li');
  dpli.forEach((element,index)=>{   
        element.onmouseover=function(){
          for(let i=0;i<dpli.length;i++){
             dpbx[i].style.display=`none`; 
             if(dpli[i]!==element){
                 dpli[i].style.color=`#424242`;
                 dpli[i].style.borderBottom=`none`;    
             }else{
                 dpli[i].style.color=`#ff6700`;
                 dpli[i].style.borderBottom=`2px solid #ff6700`;  
             }
          } 
        dpbx[index].style.display=`block`; 
      } 
  })  
}

// 为你推荐

    let wntj=document.getElementsByClassName('tuijian-box')[0];
    let wntjBox=wntj.getElementsByClassName('sb-bottom')[0];
    let tj=wntjBox.getElementsByClassName('tuijian-box-bottom')[0];
    let tjli=tj.getElementsByTagName('li')[0];
    let tLefts=wntj.getElementsByClassName('star-box-top-jiantou1')[0];
    let tRights=wntj.getElementsByClassName('star-box-top-jiantou2')[0];
    let tw=(tjli.offsetWidth+parseInt(getComputedStyle(tjli,null).marginRight))*5
    let j=0;
    console.log(tw);
    tLefts.onclick=function(){
        if(j<3){
            j++;
            tj.style.transform=`translateX(-${j*tw}px)`;
        }
        if(j==3){
            tLefts.style.color=`#e0e0e0`;
            tRights.style.color=`#666666`;
        }
    }
    tRights.onclick=function(){
        if(j>0){
            j--
            tj.style.transform=`translateX(-${j*tw}px)`;
        }
        if(j==0){
            tLefts.style.color=`#666666`;
            tRights.style.color=`#e0e0e0`;
        }
    }

        // tLefts.onmouseover=function(){
        //      tLefts.style.color=`#ff6700`;
        //   if(j==3){
        //      tRights.style.color=`#e0e0e0`;
        //   }
        // }
        // tLefts.onmouseout=function(){
        //      tLefts.style.color=`#666666`;
        //   if(j==3){
        //      tRights.style.color=`#e0e0e0`;
        //   }
        // }
        // tRights.onmouseover=function(){
        //      tRights.style.color=`#ff6700`;
        //   if(j==0){
        //       tLefts.style.color=`#e0e0e0`;
        //   }
        // }
        // tRights.onmouseout=function(){
        //      tLefts.style.color=`#666666`;
        //   if(j==3){
        //      tRights.style.color=`#e0e0e0`;
        //   }
        // }

/////////////////////////内容
let huanneiurong = document.querySelectorAll('.neirong-box-bottom>li');
huanneiurong.forEach(function (value) {
   huannei(value);
})
function huannei(HNR){
    let tushu=HNR.querySelector('.neirong-tushu')
    let tushuli=tushu.querySelectorAll('.neirong-tushu>li')
    let tushuCircle=HNR.querySelectorAll('.neirong-circle>li>.dot')
    let tslefts=HNR.querySelector('.nbbjt1');
    let tsrights=HNR.querySelector('.nbbjt2');
    let tsw=parseInt(getComputedStyle(tushu,null).width);
    let tsnow=0;
    let tsnext=0;
    let tsflag=true;
    // 左右箭头
    tsrights.onclick = function(){
        if (!flag) {
            return;
        }
          tsmove();
          tsflag=false;
    }
    tslefts.onclick = function(){
        if (!flag) {
            return;
        }
          tsmoveL();
          tsflag=false;
         
    } 
    tslefts.onmouseover = function(){
        this.style.background='#666'
    }
    tslefts.onmouseout = function(){
        this.style.background=''
    }
    tsrights.onmouseover = function(){
        this.style.background='#333'
    }
    tsrights.onmouseout = function(){
        this.style.background=''
    }
    
    function tsmove(){
        tsnext++;
        if(tsnext==tushuli.length){
            tsnext=0;
            // return;
        }
        tushuCircle[tsnow].style.background = '#ccc';
        tushuCircle[tsnow].style.border = 'none';
        tushuCircle[tsnext].style.background = '#f5f5f5f5';
        tushuCircle[tsnext].style.border = '2px solid #ff6700';
        tushuli[tsnext].style.left = tsw+'px';
        animate(tushuli[tsnow],{left:-tsw});
        animate(tushuli[tsnext],{left:0},function(){
            tsflag=true;
        });
        tsnow=tsnext;
    }
    function tsmoveL(){
        tsnext--;
        if(tsnext<0){
            tsnext=tushuli.length-1;
            // return;
        }
        tushuCircle[tsnow].style.background = '#ccc';
        tushuCircle[tsnow].style.border = 'none';
        tushuCircle[tsnext].style.background = '#f5f5f5f5';
        tushuCircle[tsnext].style.border = '2px solid #ff6700';
        tushuli[tsnext].style.left = -tsw+'px';
        animate(tushuli[tsnow],{left:tsw});
        animate(tushuli[tsnext],{left:0},function(){
            tsflag=true;
        });
        tsnow=tsnext;
    }

    // for(let i=0;i<tushuli.length;i++){
    //     tushuCircle[i].onclick=function(){
    //         if(tsnow==i){return;}
    //         tushuCircle[tsnow].style.background = '#ccc';
    //         tushuCircle[tsnow].style.border = 'none';
    //         tushuCircle[i].style.background = '#f5f5f5f5';
    //         tushuCircle[i].style.border = '2px solid #ff6700';
    //         tushuli[i].style.left = tsw+'px';
    //         animate(tushuli[now],{left:-tsw});
    //         animate(tushuli[i],{left:0});
    //         tsnow=tsnext=i;
    //     }
    // }
}
/////////////////////////按需加载
    let ch=innerHeight;
    let floor=document.querySelectorAll('.floor');
    let floorArr=[];
    floor.forEach(element=>{
        floorArr.push(element.offsetTop)
    })
    // let flag=true;
    console.log(floorArr);
    window.onscroll = function(){
        let scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
        // if(!flag){
        //     return;
        // }
        // console.log(document.documentElement.scrollTop)
        // console.log(document.body.scrollTop)
        floorArr.forEach((value,index)=>{
            if(scrolltop+ch>=value){
                let imgs=floor[index].getElementsByTagName('img');
                for(let i=0;i<imgs.length;i++){
                    imgs[i].src = imgs[i].getAttribute('imgpath');
                }
            }
        })
    }





}