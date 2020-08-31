//Properties
Number.prototype.PI_OVER_ONE_EIGHTY = (Math.PI / 180);
Number.prototype.ONE_EIGHTY_OVER_PI = (180 / Math.PI);


//Methods
Number.prototype.formatPretty = function(decimalPlaces, d, thousandsDelimiter){
	var n = this, decimalPlaces = isNaN(decimalPlaces = Math.abs(decimalPlaces)) ? 2 : decimalPlaces, d = d == undefined ? "." : d, thousandsDelimiter = thousandsDelimiter == undefined ? "," : thousandsDelimiter, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(decimalPlaces)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + thousandsDelimiter : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousandsDelimiter) + (decimalPlaces ? d + Math.abs(n - i).toFixed(decimalPlaces).slice(2) : "");
};

Number.prototype.pad = function(padToLength, character){
	var num = this;
	var padChar = 0;
 	if(character){
		padChar = character;
	}
	var padding = new Array(1 + padToLength).join(padChar);
	return (padding + num).slice(-padding.length);
};

Number.prototype.toDegrees = function(){
	return this * this.ONE_EIGHTY_OVER_PI;
};

Number.prototype.toRadians = function(){
	return this * this.PI_OVER_ONE_EIGHTY;
};
