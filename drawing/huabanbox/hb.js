/*
* @Author: Administrator
* @Date:   2017-10-10 10:55:09
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-12 14:13:01
*/
///////////属性：
///              线宽、线两端的端点样式、填充、描边、样式、边数
///////////方法：
///              画线 虚线 矩形 多边形 多角形 圆 铅笔 文字 
///              橡皮
///              撤销
///              裁剪、裁切
///              新建
///              保存
class palette{
	constructor(canvas,ctx,zh){
		this.canvas = canvas;
		this.ctx=ctx;
        this.zh=zh;
        this.size=20;
		this.cw=this.canvas.width;
		this.ch=this.canvas.height;
		//历史记录
		this.arr=[];
        this.temp=null;
		// 样式
		this.lineWidth=1;
		this.lineCap='butt';
		//描边 填充
		this.style='stroke';
        this.text='fillText'
		// 颜色
		this.fillStyle='#000';
		this.strokeStyle='#000';
	}
	init(){
        this.ctx.lineWidth=this.lineWidth;
        this.ctx.lineCap=this.lineCap;
        this.ctx.fillStyle=this.fillStyle;
        this.ctx.strokeStyle=this.strokeStyle;
	}
	draw(type,num){
        let that=this;
        this.zh.onmousedown = function(e){
            e.preventDefault();
        	let cx=e.offsetX, cy=e.offsetY;
        	that.zh.onmousemove= function(el){
                el.preventDefault();
        		that.init();
                let ox=el.offsetX,oy=el.offsetY;
                that.ctx.clearRect(0, 0, that.cw, that.ch);
   	    	    if(that.arr.length){
   	    	    	that.ctx.putImageData(that.arr[that.arr.length-1], 0,0)
   	    	    }

         	    that[type](cx,cy,ox,oy,num);

        	}
			that.zh.onmouseup=function(){
			   that.arr.push(that.ctx.getImageData(0, 0, that.cw, that.ch))
		       that.zh.onmouseup=null;
		       that.zh.onmousemove=null;
		   	}	
        }
	}
	line(cx,cy,ox,oy){
        this.ctx.beginPath();
   	    this.ctx.moveTo(cx, cy);
   	    this.ctx.lineTo(ox, oy);
   	    this.ctx.setLineDash([0,0]);
        this.ctx.stroke();
	}
	dash(cx,cy,ox,oy){
        this.ctx.beginPath();
   	    this.ctx.moveTo(cx, cy);
   	    this.ctx.lineTo(ox, oy);
   	    this.ctx.setLineDash([5,3]);
        this.ctx.stroke();
	}
	rect(cx,cy,ox,oy){
        for(let i=0;i<4;i++){
        	this.ctx.beginPath();
	        this.ctx.moveTo(cx,cy);
	        let w=Math.abs(cx-ox),
	            h=Math.abs(cy-oy)
    		let startX = ox >=cx ? cx : ox;
	        let startY = oy >=cy ? cy : oy;
	        this.ctx.rect(startX,startY,w , h);
	        this.ctx[this.style](); 
        }
	}
	circle(cx,cy,ox,oy){  
        let r=Math.hypot(ox-cx,oy-cy);
        this.ctx.beginPath();
	    this.ctx.arc(cx, cy, r, 0,Math.PI*2); 
        this.ctx.closePath(); 
	    this.ctx[this.style](); 
	}
	poly(cx,cy,ox,oy,n){
        let rad=Math.PI*2/n;
        let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
        this.ctx.beginPath();
        this.ctx.moveTo(cx+r, cy) 
        for(let i=0;i<n;i++){  
	    	let x=cx+r*Math.cos(rad*i);
	    	let y=cy+r*Math.sin(rad*i); 
	    	this.ctx.lineTo(x, y);
        }
        this.ctx.closePath();
        this.ctx[this.style](); 
	}
	polyj(cx,cy,ox,oy,n){
        let rad=Math.PI/n;
        let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
        this.ctx.beginPath();
        this.ctx.moveTo(cx+r, cy); 
        for(let i=0;i<2*n;i++){  
        	let r1= i%2==0 ? r : r/2;
	    	let x=cx+r1*Math.cos(rad*i);
	    	let y=cy+r1*Math.sin(rad*i); 
	    	this.ctx.lineTo(x, y);
        }
        this.ctx.closePath();
        this.ctx[this.style]();
	}
	pencil(){
        this.zh.onmousedown = function(e){
            e.preventDefault();
        	let cx=e.offsetX, cy=e.offsetY;
        	    this.ctx.beginPath();
   	    	    this.ctx.moveTo(cx, cy);
        	this.zh.onmousemove= function(el){
                el.preventDefault();
        		this.init();
                let ox=el.offsetX,oy=el.offsetY;
                this.ctx.clearRect(0, 0, this.cw, this.ch);
   	    	    if(this.arr.length){
   	    	    	this.ctx.putImageData(this.arr[this.arr.length-1], 0,0)
   	    	    }

   	    	    this.ctx.lineTo(ox, oy);
                this.ctx[this.style]();
        	}.bind(this)
		    this.zh.onmouseup=function(){
		       this.arr.push(this.ctx.getImageData(0, 0, this.cw, this.ch))
	           this.zh.onmouseup=null;
	           this.zh.onmousemove=null;
	   	    }.bind(this)
        }.bind(this)
	}

	earser(xpc,widths,heights){
		this.zh.onmousedown = function(e){
			e.preventDefault();
			let ccw=this.canvas.offsetWidth,
	            cch=this.canvas.offsetHeight;
	        xpc.style.display='block';
            xpc.style.width=widths+'px';
            xpc.style.height=heights+'px';
	        xpc.style.left=`${e.offsetX-widths/2}px`;
		    xpc.style.top=`${e.offsetY-heights/2}px`;
	        
	        this.zh.onmousemove=function(e){
                 e.preventDefault();
                 this.init();
		         let x=e.offsetX-widths/2,y=e.offsetY-heights/2;
		         if(x>=ccw-widths){
		             x=ccw-widths;
		         }
		         if(x<=0){
		         	x=0;
		         }
		         if(y>=cch-heights){
		            y=cch-heights;
		         }
		         if(y<=0){
		         	y=0;
		         }
		         xpc.style.left=`${x}px`;
		         xpc.style.top=`${y}px`;
		         this.ctx.clearRect(x,y,widths,heights);
	        }.bind(this)
		   
		    this.zh.onmouseup=function(){
		         xpc.style.display='none';
		         this.arr.push(this.ctx.getImageData(0, 0,this.cw, this.ch))
                 this.zh.onmousemove=null;
	             this.zh.onmouseup=null;
		    }.bind(this)
	   
	    }.bind(this)
	}

    font(){
    	let that=this;
    	let lefts;
    	let tops;
    	this.zh.onmousedown = function(e){
            that.init();
    		that.zh.onmousedown = null;
    		let cx=e.offsetX, cy=e.offsetY;
    		let divs=document.createElement('div');
    		divs.contentEditable=true;    ////////让div 成为可编辑的表格
    		divs.style.cssText = `
               width:100px;
               height:30px;
               border:1px dashed #ccc;
               position:absolute;
               left:${cx}px;
               top:${cy}px;
               cursor:move;
    		`
    		this.appendChild(divs)
           
    		divs.onmousedown = function(el){
                that.init();
    			let ox=el.clientX;
    			let oy=el.clientY; ///////当鼠标按下时相对于浏览器的距离
    			let cx=divs.offsetLeft; ///////当鼠标按下时相对于  canvas画布  的距离（定位）
    			let cy=divs.offsetTop;	
    			that.zh.onmousemove=function(e){
                    e.preventDefault();
    				let x=e.clientX;
    				let y=e.clientY;
    				lefts=cx+x-ox;  ///////当鼠标停止移动时相对于  canvas画布  的距离（定位）
    				tops=cy+y-oy;
    				if(lefts<=0){
    					lefts=0;
    				}
    				if(lefts>that.cw-100){
    					lefts=that.cw-100
    				}
    				if(tops<=0){
    					tops=0;
    				}
    				if(tops>that.ch-30){
    					tops=that.ch-30
    				}
    				divs.style.left=lefts+'px';
    				divs.style.top=tops+'px';
    			}
	    		divs.onmouseup=function(){
	    			that.zh.onmousemove=null;
	    			this.onmouseup=null;
	    		}
    		}
    		
    		divs.onblur=function(){
    			let value=this.innerText;
    			that.zh.removeChild(divs);
    			divs=null;
    			that.ctx.font = 'bold '+that.size+'px sans-serif';
                that.init()
                // let textWidth = that.ctx.measureText(value).width;
                // if(textWidth>that.cw) {
                //     let scaled = that.cw/textWidth;
                //     that.ctx.scale(scaled,scaled);
                // }
                that.ctx.textAlign='center';
    			that.ctx.textBaseLine='middle';  
                that.ctx[that.text](value,lefts,tops);
    			// that.ctx.fillText(value,lefts,tops);
                that.arr.push(that.ctx.getImageData(0, 0, that.cw, that.ch))
    		}
    	}
    }

    clip(obj){
    	let that=this;
    	let startX,startY,w,h;
    	this.zh.onmousedown = function(e){
            e.preventDefault();
    		let cx=e.offsetX, cy=e.offsetY;
    		obj.style.display='block';
            obj.style.width=0;
            obj.style.height=0;
    		that.zh.onmousemove=function(el){  
                 el.preventDefault();          
    			 let ox=el.offsetX, oy=el.offsetY;
    			 // 确定最开始的点在哪
    			 startX = ox>=cx ? cx : ox;
	             startY = oy>=cy ? cy : oy;
	    		 obj.style.left=`${startX}px`;
	    		 obj.style.top=`${startY}px`;
                 w=Math.abs(cx-ox);
                 h=Math.abs(cy-oy);
                 obj.style.width=w+'px';
                 obj.style.height=h+'px';
    		}
            that.zh.onmouseup=function(){that.drag(startX,startY,obj);
		         that.temp=that.ctx.getImageData(startX, startY,w, h);
		         that.ctx.clearRect(startX, startY,w, h);
		         that.arr.push(that.ctx.getImageData(0, 0,that.cw, that.ch));
		         that.ctx.putImageData(that.temp,startX,startY);
                 that.zh.onmousemove=null;
	             that.zh.onmouseup=null;
	             

            }
    	}

    }
    drag(x,y,obj){
        let that=this;
        let lefts,tops
        let ow=obj.offsetWidth,oh=obj.offsetHeight;
        that.zh.onmousedown = function(e){
        	console.log(1)
    		let cx=e.offsetX,cy=e.offsetY;
    		e.preventDefault();
    		that.zh.onmousemove=function(el){   
                 el.preventDefault();         
    			 let ox=el.offsetX,oy=el.offsetY;
        			  lefts=x+ox-cx,
        			  tops=y+oy-cy;
                 if(lefts<=0){
                     lefts=0;
                 }
                 if(lefts>that.cw-ow){
                     lefts=that.cw-ow
                 }
                 if(tops<=0){
                     tops=0;
                 }
                 if(tops>that.ch-oh){
                     tops=that.ch-oh
                 }
	    		 obj.style.left=`${lefts}px`;
	    		 obj.style.top=`${tops}px`;
	    		 that.ctx.clearRect(0,0,that.cw,that.ch);
	    		 if(that.arr.length){
	    		 	that.ctx.putImageData(that.arr[that.arr.length-1],0,0)
	    		 }
                 that.ctx.putImageData(that.temp,lefts,tops);
    	    }
    	    
            that.zh.onmouseup=function(){
            	 obj.style.display='none'; 
            	 that.temp=null;
            	 that.arr.push(that.ctx.getImageData(0, 0,that.cw,that.ch));
                 that.zh.onmousemove=null;
	             that.zh.onmouseup=null;
	            
            }
    	}
    }



   clearAll(){
      this.ctx.clearRect(0,0,this.cw,this.ch);
      
   }
   reverse(){
      let imadedata=this.ctx.getImageData(0, 0, this.cw,this.ch);
      for(let i=0;i<imadedata.data.length;i+=4){
         imadedata.data[i]=255-imadedata.data[i];         
         imadedata.data[i+1]=255-imadedata.data[i+1];
         imadedata.data[i+2]=255-imadedata.data[i+2];
        // imadedata.data[i]=imadedata.data[i+1]=imadedata.data[i+2]=(imadedata.data[i]+imadedata.data[i+1]+imadedata.data[i+2])/3 
      }
      this.ctx.putImageData(imadedata,0,0)
      this.arr.push(this.ctx.getImageData(0, 0,this.cw,this.ch));
   }
   back(){
       if(!this.arr.length){return;}
        this.arr.pop();
        this.ctx.clearRect(0, 0, this.cw,this.ch)
        if(this.arr.length==0){
           return;
        }
        this.ctx.putImageData(this.arr[this.arr.length-1], 0,0);
   }






















}