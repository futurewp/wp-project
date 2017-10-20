/*
* @Author: Administrator
* @Date:   2017-09-21 10:17:54
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-21 13:49:45
* 
*/
		function float(obj) {
			this.obj = obj;
			this.maxX = window.innerWidth-this.obj.offsetWidth;
			this.maxY = window.innerHeight-this.obj.offsetHeight;
			this.speed = 10;
			this.speed1 = 10;
		}
		// console.log(float);
			float.prototype.moveH = function(){
				let that=this;
				this.t1=setInterval(function(){
					let tops=that.obj.offsetTop+that.speed1;
					if(tops>=that.maxY){
	                    tops=that.maxY;
	                    that.speed1=-that.speed1;
					}
					if(tops<=0){
	                    tops=0
	                    that.speed1=-that.speed1;
					}
					that.obj.style.top = tops+'px';					
			    },30);
			}
			float.prototype.movew = function(){
				let that=this;
				this.t=setInterval(function(){
					let lefts=that.obj.offsetLeft +that.speed;
					if(lefts>=that.maxX){
	                    lefts=that.maxX;
	                    that.speed=-that.speed;
					}
					if(lefts<=0){
	                    lefts=0
	                    that.speed=-that.speed;
					}
					that.obj.style.left = lefts+'px';					
				
			    },30);
			}

    	    float.prototype.stop = function(){
    	    	clearInterval(this.t);
    	    	clearInterval(this.t1);
    	    }
    	    float.prototype.resize = function(){
				this.maxX = window.innerWidth-this.obj.offsetWidth;
				this.maxY = window.innerHeight-this.obj.offsetHeight;
    	    }