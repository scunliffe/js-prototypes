//Properties
Date.prototype.DAY_NAMES = 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday'.split('|');
Date.prototype.MONTH_NAMES = 'January|February|March|April|May|June|July|August|September|October|November|December'.split('|');
Date.prototype.DAYS_PER_MONTH = '31|29|31|30|31|30|31|31|30|31|30|31'.split('|');
Date.prototype.MS_PER_DAY = (1000 * 60 * 60 * 24);//ms * sec * min * hours



//Methods
Date.prototype.clearTime = function(){
	return this.setHours(0).setMinutes(0).setSeconds(0).setMilliseconds(0);
};

Date.prototype.copy = function(){
	return new Date(this.getTime());//create a de-referenced copy
};

Date.prototype.addHours = function(numHours){
	return this.setHours(this.getHours() + numHours);
};
Date.prototype.addDays = function(numDays){
	return this.setDate(this.getDate() + numDays);
};
Date.prototype.addWeeks = function(numWeeks){
 	return this.addDays(numWeeks * 7);
};
//TODO: add addMonths/addYears... determine logic... does Feb 14 + 1 month equal Mar 14? or (+3[0|1]) = Mar 16/17?

//TODO: get date +/- business days?

Date.prototype.getDayName = function(){ 
	return this.DAY_NAMES[this.getDay()];
};
Date.prototype.getDayNameAbbr = function(){
	return this.getDayName().slice(0, 3);
};
Date.prototype.getDayOfYear = function(){
	var janFirst = new Date(this.getFullYear(), 0, 1);
	return Math.ceil((this.getTime() - janFirst.getTime()) / this.MS_PER_DAY);
};

Date.prototype.getDaysBetween = function(otherDate){
	var thisDateTime = this.copy();
	var otherDateTime = otherDate.copy();
	var thisDate = thisDateTime.clearTime();
	var otherDate = otherDateTime.clearTime();
	var diff = otherDate.getTime() - thisDate.getTime();
	return (diff / this.MS_PER_DAY);
};

Date.prototype.getMonthName = function(){
	return this.MONTH_NAMES[this.getMonth()];
};
Date.prototype.getMonthNameAbbr = function(){
	return this.getMonthName().slice(0, 3);
};
//Weeks run as full weeks (Sun-Sat) from on/after Jan 1st TODO: I'm not sure if I like this
Date.prototype.getWeekOfYear = function(){
	var janFirst = new Date(this.getFullYear(), 0, 1);
	var janFirstDayOfWeek = janFirst.getDay();//0=Su,1=Mo,2=Tu,3=We,4=Th,5=Fr,6=Sa
	var startOffset = (janFirstDayOfWeek == 0) ? 0 : (7 - janFirstDayOfWeek);
	return Math.ceil((this.getDayOfYear() - startOffset) / 7);
};


Date.prototype.isAfter = function(otherDate){
	return (this.getDateDiff(otherDate) > 0);
};

Date.prototype.isBefore = function(otherDate){
	return (this.getDateDiff(otherDate) < 0);
};
Date.prototype.isWeekDay = function(){
	return ((this.getDay() != 0) && (this.getDay() != 6));
};

Date.prototype.getDateDiff = function(otherDate){
	if(otherDate == null){
		return false;
	}
	return this.getTime() - otherDate.getTime();
};
//TODO: add getDaysBetween?
Date.prototype.getDaysInMonth = function(monthIndex, year){
	if(monthIndex == 1){
		var isLeap = (new Date(year, 1, 29).getMonth() === 1);
		if(isLeap){
			return 29;
		} else {
			return 28;
		}
	} else {
		return this.DAYS_PER_MONTH[monthIndex];
	}
};

Date.prototype.now = function(){
	return new Date();
};

Date.prototype.stamp = function(){
	return new Date().getTime();
};

Date.prototype.today = function(){
	return new Date().clearTime();
};

//For IE8 and below only
if(!Date.prototype.toISOString){
	(function(){
		function pad(number){
			if(number < 10){
				return '0' + number;
			}
			return number;
		}
		Date.prototype.toISOString = function(){
			return this.getUTCFullYear() + '-' + pad(this.getUTCMonth() + 1) + '-' + pad(this.getUTCDate()) +
				'T' + pad(this.getUTCHours()) + ':' + pad(this.getUTCMinutes()) + ':' + pad(this.getUTCSeconds()) +
				'.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
				'Z';
		};
	}());
}
