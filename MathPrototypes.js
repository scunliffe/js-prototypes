Math.prototype.PI_OVER_ONE_EIGHTY = (Math.PI / 180);
Math.prototype.ONE_EIGHTY_OVER_PI = (180 / Math.PI);

Math.prototype.toDeg = function(rad){
	return rad * this.ONE_EIGHTY_OVER_PI;
};

Math.prototype.toRad = function(deg){
	return deg * this.PI_OVER_ONE_EIGHTY;
};
