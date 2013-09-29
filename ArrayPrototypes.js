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
	idx++;
	if(idx == this.length){
		return this[0];
	} else {
		return this[idx];
	}
};

Array.prototype.prev = function(idx){
	idx--;
	if(idx == -1){
		return this[this.length-1];
	} else {
		return this[idx];
	}
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


//Utilities
function randomNumber(min, max){
	var rnd = Math.floor((Math.random()*((max+1)-min))+min);
	return rnd;
}
