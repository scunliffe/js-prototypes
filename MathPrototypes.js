//We can't actually prototype on the Math object (it's sealed)

var MathUtils = {};
MathUtils.PI_OVER_ONE_EIGHTY = (Math.PI / 180);
MathUtils.ONE_EIGHTY_OVER_PI = (180 / Math.PI);

MathUtils.ONE_THOUSAND = 1000;
MathUtils.ONE_MILLION  = 1000000;
MathUtils.ONE_BILLION  = 1000000000;
MathUtils.ONE_TRILLION = 1000000000000;

MathUtils.clamp = function(num, min, max){
	if(num < min){
		return min;
	} else if(num > max){
		return max;
	}
	return num;
};

MathUtils.createRange = function(start, stop){
	var ret = [];
	for(var i=start;i<stop+1;i++){
		ret.push(i);
	}
	return ret;
};

MathUtils.getDistance = function(p1, p2){
	return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
};

MathUtils.getGreatestCommonDivisor = function(a, b){
	return b ? Math.getGreatestCommonDivisor(b, a % b) : a;
};

//Render pretty numbers:
//4721 = 4.7K
//3638473 = 3.6M
MathUtils.getPrettyNumber = function(num){
	var num = num || 0;
	if(num < MathUtils.ONE_THOUSAND){
		return '' + num;
	}
	var suffix = '';
	var denominator;
	if(num < MathUtils.ONE_MILLION){
		denominator = MathUtils.ONE_THOUSAND;
		suffix = 'K';
	} else {
		if(num < MathUtils.ONE_BILLION){
			denominator = MathUtils.ONE_MILLION;
			suffix = 'M';
		} else {
			if(num < MathUtils.ONE_TRILLION){
				denominator = MathUtils.ONE_BILLION;
				suffix = 'B';
			} else {
				denominator = MathUtils.ONE_TRILLION;
				suffix = 'T';
			}
		}
	}
	return Math.round((num / denominator), 1) + suffix;
};

MathUtils.getSlopeForLine = function(p1, p2){
	var rise = (p2.y - p1.y);
	var run = (p2.x - p1.x);
	return (rise / run);
};

MathUtils.hypot = function(){
	var val, ret = 0, args = arguments, i = args.length;
	while(i--){
		ret += (val = +args[i]) * val;
	}
	return Math.sqrt(ret);
};

MathUtils.inRange = function(num, min, max){
	if(num < min || num > max){
		return false;
	} 
	return true;
};

MathUtils.toDeg = function(rad){
	return rad * MathUtils.ONE_EIGHTY_OVER_PI;
};

MathUtils.toRad = function(deg){
	return deg * MathUtils.PI_OVER_ONE_EIGHTY;
};
