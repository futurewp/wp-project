class storage{
	constructor(){
		this.data=[
            {name:'张三',age:20,sex:'男',phone:'451342334',address:'山西运城'},
            {name:'张四',age:22,sex:'女',phone:'451342334',address:'山西大同'},
            {name:'王安',age:23,sex:'男',phone:'451342334',address:'山西晋中'},
            {name:'杜甫',age:18,sex:'男',phone:'451342334',address:'山西临汾'},
            {name:'李白',age:16,sex:'女',phone:'451342334',address:'山西长治'},
            {name:'杜宇',age:26,sex:'男',phone:'451342334',address:'山西侯马'},
            {name:'张浦',age:36,sex:'女',phone:'451342334',address:'山西翼城'}
		];
	}
	_init(){
		localStorage.setItem('parr',JSON.stringify(this.data));
	}
	getData(){
		let datas=localStorage.getItem('parr');
		if(!datas){
			this._init();
		}
		return this.data=JSON.parse(localStorage.getItem('parr'));

	}
	upData(index,type,value){
		this.data[index][type]=value;
		this.save();
	}
	del(index){
		this.data.splice(index,1);
		this.save();
	}
	save(){
		localStorage.setItem('parr',JSON.stringify(this.data));
	}
	addData(obj){
		this.data.push(obj);
		this.save();
	}
}