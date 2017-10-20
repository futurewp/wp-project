window.addEventListener('load', function(){
    let tips=document.querySelector('.tips')
    let dl=document.querySelector('dl');
    let info = [
       {name:'王鹏',tell:'15735801091',pinyin:'wangpeng'},
       {name:'王浩',tell:'15735801092',pinyin:'wanghao'},
       {name:'李欣琪',tell:'15735801093',pinyin:'lixinqi'},
       {name:'杜晓红',tell:'15735801094',pinyin:'duxiaohong'},
       {name:'吴瑞霞',tell:'15735801095',pinyin:'wuruixia'},
       {name:'高敏',tell:'15735801096',pinyin:'gaomin'},
       {name:'陈旭',tell:'15735801097',pinyin:'chenxu'},
       {name:'李淑娴',tell:'15735801098',pinyin:'lishuxian'},
       {name:'赵爱珍',tell:'15735801099',pinyin:'zhaoaizhen'},
       {name:'吕增生',tell:'15735801089',pinyin:'lvcengsheng'},
       {name:'张宏达',tell:'15735801088',pinyin:'zhanghongda'}
    ];
    render(info);
      let search=document.querySelector('input');
      search.onkeyup=function(){
        let value=this.value.trim();
        let data=info.filter(function(element){
          // console.log(element.pinyin.includes(value))
              return element.pinyin.includes(value) || element.name.includes(value) || element.tell.includes(value);
              asfd()
          })
        
        render(data);
      }
      // let 
    // function asfd(element){
    //    element.style.fontSize=0.18rem;
    // }

    function render(data){
      let aside=document.querySelector('aside');
    	dl.innerHTML='';
      aside.innerHTML=''
    	//按照首字母分类
    	let aobj={};
    	data.forEach(function(element){
    	    let first=element.pinyin.charAt(0).toUpperCase();
    	    if(!aobj[first]){
    	    	aobj[first]=[];
    	    }
    	    aobj[first].push(element);
    	})
        //放入页面，并按一定顺序排列
    	let char=Object.keys(aobj).sort();
      tips.innertext=char[0];
    	char.forEach(element=>{
        aside.innerHTML+=`<li>${element}</li>`;
    		dl.innerHTML+=`<dt>${element}</dt>`;
    		aobj[element].forEach(value=>{
                dl.innerHTML+=`<dd><a href="${value.tel}">${value.name}</a></dd>`;
    		})
    	})
      aside.style.marginTop=`${dl.offsetHeight-aside.offsetHeight/2}`
    }


    let dts=document.querySelectorAll('dt');
    let arr=[];
    dts.forEach(element=>arr.push(element.offsetTop));
    console.log(arr)
    let heights=document.querySelector('header').offsetHeight+tips.offsetHeight;
    console.log(heights)
    window.onscroll=function(){
      let st=document.documentElement.scrollTop || document.body.scrollTop;
      console.log(st)
      arr.forEach((element,index)=>{
          if(st+heights>=element){
            tips.innerText=dts[index].innerText;
          }
      })
    }



})

