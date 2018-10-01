class SmartCalculator {
  constructor(initialValue) {
	this.kk={type:'head',next:null};
	this.list={val:initialValue,type:'nul',next:this.kk};
	this.temp={};
	this.kk.next=this.list;
  }

  add(number) {
	this.temp={val:number,type:'add',next:this.list};
	this.list=this.temp;
	this.kk.next=this.list;
	return this;
  }
  
  subtract(number) {
	this.temp={val:number,type:'subs',next:this.list}
	this.list=this.temp;
	this.kk.next=this.list;
	return this;
	}

  multiply(number) {
	this.temp={val:number,type:'mult',next:this.list}
	this.list=this.temp;
	this.kk.next=this.list;
	return this;
  }

  devide(number) {
	this.temp={val:number,type:'dev',next:this.list}
	this.list=this.temp;
	this.kk.next=this.list;
	return this;
  }

  pow(number) {
	this.temp={val:number,type:'pow',next:this.list}
	this.list=this.temp;
	this.kk.next=this.list;
	return this;
  }
  calc(){
	  this.list=this.kk;
	do {
	if (this.list.next.type=='pow'){
	var k=this.list.next.next.val;
		for(var i=this.list.next.val;i>=2;i--){
			k=k*this.list.next.next.val;
		}
		this.list.next.next.val=k;
		this.list.next=this.list.next.next;
	}
	else {
		this.list=this.list.next;
	}
	} while (this.list.next.type!='head');
	do {
	if (this.list.next.type=='mult'){
		this.list.next.next.val=this.list.next.val*this.list.next.next.val;;
		this.list.next=this.list.next.next;
	}
	else {
		this.list=this.list.next;
} 
	} while (this.list.next.type!='head');
do {
	if (this.list.next.type=='dev'){
		this.list.next.next.val=this.list.next.next.val/this.list.next.val;;
		this.list.next=this.list.next.next;
	}
	else {
		this.list=this.list.next;
} 
	} while (this.list.next.type!='head');

do {
	if (this.list.next.type=='subs'){
		if (this.list.next.next.type=='subs'){
			this.list.next.next.val=this.list.next.next.val+this.list.next.val;
		} else {
		this.list.next.next.val=this.list.next.next.val-this.list.next.val;
		}
		this.list.next=this.list.next.next;
	}
	else {
		this.list=this.list.next;
} 
	} while (this.list.next.type!='head');
	do {
	if (this.list.next.type=='add'){
			this.list.next.next.val=this.list.next.val+this.list.next.next.val;
		this.list.next=this.list.next.next;
	}
	else {
		this.list=this.list.next;
} 
	} while (this.list.next.type!='head');


  }
  toString(){
	  this.calc();
	  return this.list.val;
  }
}

module.exports = SmartCalculator;
