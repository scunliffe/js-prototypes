Math.prototype.PI_OVER_ONE_EIGHTY = (Math.PI / 180);
Math.prototype.ONE_EIGHTY_OVER_PI = (180 / Math.PI);

Math.prototype.ONE_THOUSAND = 1000;
Math.prototype.ONE_MILLION  = 1000000;
Math.prototype.ONE_BILLION  = 1000000000;
Math.prototype.ONE_TRILLION = 1000000000000;

Math.prototype.clamp = function(num, min, max){
	if(num < min){
		return min;
	} else if(num > max){
		return max;
	}
	return num;
};

Math.prototype.createRange = function(start, stop){
	var ret = [];
	for(var i=start,i<stop+1;i++){
		ret.push(i);
	}
	return ret;
};

Math.prototype.getGreatestCommonDivisor = function(a, b){
	return b ? Math.getGreatestCommonDivisor(b, a % b) : a;
};

//Render pretty numbers:
//4721 = 4.7K
//3638473 = 3.6M
Math.prototype.getPrettyNumber = function(num){
	var num = num || 0;
	if(num < Math.ONE_THOUSAND){
		return '' + num;
	}
	var suffix = '';
	var denominator;
	if(num < Math.ONE_MILLION){
		denominator = Math.ONE_THOUSAND;
		suffix = 'K';
	} else {
		if(num < Math.ONE_BILLION){
			denominator = Math.ONE_MILLION;
			suffix = 'M';
		} else {
			if(num < Math.ONE_TRILLION){
				denominator = Math.ONE_BILLION;
				suffix = 'B';
			} else {
				denominator = Math.ONE_TRILLION;
				suffix = 'T';
			}
		}
	}
	return Math.round((num / denominator), 1) + suffix;
};

if(typeof(Math.prototype.hypot) == 'undefined'){
	Math.prototype.hypot = function(){
		var val, ret = 0, args = arguments, i = args.length;
		while(i--){
			ret += (val = +args[i]) * val;
		}
		return Math.sqrt(ret);
	};
}

Math.prototype.inRange = function(num, min, max){
	if(num < min || num > max){
		return false;
	} 
	return true;
};

Math.prototype.toDeg = function(rad){
	return rad * this.ONE_EIGHTY_OVER_PI;
};

Math.prototype.toRad = function(deg){
	return deg * this.PI_OVER_ONE_EIGHTY;
};
