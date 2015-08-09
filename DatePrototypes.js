//We can't actually prototype on the Date object (it's sealed)

var DateUtils = function(){};
//Properties
DateUtils.DAY_NAMES = 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday'.split('|');
DateUtils.MONTH_NAMES = 'January|February|March|April|May|June|July|August|September|October|November|December'.split('|');
DateUtils.DAYS_PER_MONTH = '31|29|31|30|31|30|31|31|30|31|30|31'.split('|');
DateUtils.MS_PER_DAY = (1000 * 60 * 60 * 24);//ms * sec * min * hours


//Methods
DateUtils.clearTime = function(origDate){
	origDate.setHours(0);
	origDate.setMinutes(0);
	origDate.setSeconds(0);
	origDate.setMilliseconds(0);
	return origDate;
};

DateUtils.copy = function(origDate){
	var newDate = new Date(origDate.getTime());//create a de-referenced copy
	return newDate;
};

DateUtils.addHours = function(origDate, numHours){
	var ms = origDate.setHours(origDate.getHours() + numHours);
	return origDate;
};
DateUtils.addDays = function(origDate, numDays){
	var ms = origDate.setDate(origDate.getDate() + numDays);
	return origDate;
};
DateUtils.addWeeks = function(origDate, numWeeks){
 	return DateUtils.addDays(origDate, numWeeks * 7);
};
//TODO: add addMonths/addYears... determine logic... does Feb 14 + 1 month equal Mar 14? or (+3[0|1]) = Mar 16/17?

//TODO: get date +/- business days?

DateUtils.getDayName = function(origDate){ 
	return DateUtils.DAY_NAMES[origDate.getDay()];
};
DateUtils.getDayNameAbbr = function(origDate){
	return DateUtils.getDayName(origDate).slice(0, 3);
};
DateUtils.getDayOfYear = function(origDate){
	var janFirst = new Date(origDate.getFullYear(), 0, 1);
	return Math.ceil((origDate.getTime() - janFirst.getTime()) / DateUtils.MS_PER_DAY);
};
DateUtils.getDaysBetween = function(origDate, otherDate){
	var thisDateTime = origDate.copy();
	var otherDateTime = otherDate.copy();
	var thisDateOnly = DateUtils.clearTime(thisDateTime);
	var otherDateOnly = DateUtils.clearTime(otherDateTime);
	var diff = otherDateOnly.getTime() - thisDateOnly.getTime();
	return (diff / DateUtils.MS_PER_DAY);
};
DateUtils.getMonthName = function(origDate){
	return DateUtils.MONTH_NAMES[origDate.getMonth()];
};
DateUtils.getMonthNameAbbr = function(origDate){
	return DateUtils.getMonthName(origDate).slice(0, 3);
};
//Weeks run as full weeks (Sun-Sat) from on/after Jan 1st
DateUtils.getWeekOfYear = function(origDate){
	var janFirst = new Date(origDate.getFullYear(), 0, 1);
	var janFirstDayOfWeek = janFirst.getDay();//0=Su,1=Mo,2=Tu,3=We,4=Th,5=Fr,6=Sa
	var startOffset = (janFirstDayOfWeek == 0) ? 0 : (7 - janFirstDayOfWeek);
	return Math.ceil((DateUtils.getDayOfYear(origDate) - startOffset) / 7);
};
DateUtils.isAfter = function(origDate, otherDate){
	return (origDate.getDateDiff(otherDate) > 0);
};

DateUtils.isBefore = function(origDate, otherDate){
	return (DateUtils.getDateDiff(origDate, otherDate) < 0);
};
DateUtils.isWeekDay = function(origDate){
	return ((origDate.getDay() != 0) && (origDate.getDay() != 6));
};
DateUtils.getDateDiff = function(startDate, endDate){
	return endDate.getTime() - startDate.getTime();
};
DateUtils.getDaysBetween = function(startDate, endDate){
	var diffMS = DateUtils.getDateDiff(startDate, endDate);
	return (diffMS / DateUtils.MS_PER_DAY);//returns a float e.g. 3.74 (use floor/ceil/round to get desired integer value)
};
DateUtils.getDaysInMonth = function(monthIndex, year){//monthIndex is zero indexed (August = 7)
	if(monthIndex == 1){
		var isLeap = (new Date(year, 1, 29).getMonth() === 1);
		if(isLeap){
			return 29;
		} else {
			return 28;
		}
	} else {
		return DateUtils.DAYS_PER_MONTH[monthIndex];
	}
};

//changed naming due to conflict with ES5's now implementation
DateUtils.getNow = function(){
	return new Date();
};
//This is similar to what ES5 returns for Date.now()
DateUtils.stamp = function(){
	return new Date().getTime();
};
DateUtils.today = function(){
	return DateUtils.clearTime(new Date());
};
DateUtils.tomorrow = function(){
	return DateUtils.addDays(DateUtils.today(), 1);
};

//For IE8 and below only TODO: This needs to be tested in old IE (we may not be able to prototype on Date)
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

DateUtils.yesterday = function(){
	return DateUtils.addDays(DateUtils.today(), -1);
};
