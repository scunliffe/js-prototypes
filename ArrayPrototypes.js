Array.prototype.clone = function(){
	return this.slice(0);
};

Array.prototype.deepClone = function(){
	return JSON.parse(JSON.stringify(this));
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




//Utilities
function randomNumber(min, max){
	var rnd = Math.floor((Math.random()*((max+1)-min))+min);
	return rnd;
}
