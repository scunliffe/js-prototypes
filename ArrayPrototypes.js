Array.prototype.absMax = function(){
	return Math.max.apply({}, Math.abs(this));
};

Array.prototype.absMin = function(){
	return Math.min.apply({}, Math.abs(this));
};

Array.prototype.avg = function(){
	return this.sum() / this.length;
};

Array.prototype.clone = function(){
	return this.slice(0);
};

Array.prototype.clean = function(delVal){
	for(var i=0;i<this.length;i++){
		if(this[i] == delVal){
			this.splice(i, 1);
			i--;
		}
	}
	return this;
};

Array.prototype.contains = function(val){
	return (this.indexOf(val) != -1);
};

Array.prototype.deepClone = function(){
	return JSON.parse(JSON.stringify(this));
};

if(typeof(Array.prototype.indexOf) == 'undefined'){
	Array.prototype.indexOf = function(val, startAt){
		var idx = 0;
		if(startAt != null && (startAt >= 0 && startAt < this.length)){
			idx = startAt;
		}
		for(var i=idx;i<this.length;i++){
			if(this[i] == val){
				return i;
			}
		}
		return -1;
	};
}

Array.prototype.max = function(){
	return Math.max.apply({}, this);
};

Array.prototype.min = function(){
	return Math.min.apply({}, this);
};

Array.prototype.next = function(idx){
	if(idx == (this.length -1)){
		return this[0];
	}
	return this[idx++];
};

Array.prototype.prev = function(idx){
	if(idx == 0){
		return this[this.length-1];
	}
	return this[idx--];
};

Array.prototype.remove = function(from, to){
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};

/*
  This is just for "jumbling up" contents of an array.
  Do not use this when a pure, fair randomization is needed.
*/
Array.prototype.randomize = function(){
	var len = this.length;
	var a,b,j;
	for(var i=0;i<len;i++){
		j = randomNumber(0, (len-1));
		a = this[i];
		b = this[j];
		this[i] = b;
		this[j] = a;
	}
};

//Knuth/Fisher-Yates style shuffle
Array.prototype.shuffle = function(){
	var marker = this.length;
	var temp;
	var idx;
	while(marker){
		idx = randomNumber(0, (marker-- - 1));
		temp = this[marker];
		this[marker] = this[idx];
		this[idx] = temp;
	}
};

Array.prototype.sortNumerically = function(){
	return this.sort(function(a, b){return a - b;});
};

Array.prototype.sum = function(){
	var sum = 0;
	for(var i=0;i<this.length;i++){
		sum += this[i];
	}
	return sum;
};

Array.prototype.swap = function(idx1, idx2){
	var a = this[idx1];
	var b = this[idx2];
	this[idx1] = b;
	this[idx2] = a;
};

Array.prototype.union = function(otherArray){ 
	return this.concat(otherArray).unique();
};

Array.prototype.unique = function(){
	var arr = this.concat();
	for(var i=0;i<arr.length;++i){
		for(var j=i+1;j<arr.length;++j){
			if(arr[i] === arr[j]){
				arr.splice(j--, 1);
			}
		}
	}
	return arr;
};
//alternative unique method
/*
if(typeof(Array.prototype.unique) == 'undefined'){
	Array.prototype.unique = function(){
		var obj = {};
		var ret = [];
		var item;
		for(var i=0,aLen=this.length;i<aLen;i++){
			item = this[i];
			if(!obj[item]){
				ret.push(item);
				obj[item] = 1;
			}
		}
		obj = null;
		return ret;
	};
}
*/


//Utilities
function randomNumber(min, max){
	var rnd = Math.floor((Math.random()*((max+1)-min))+min);
	return rnd;
}
