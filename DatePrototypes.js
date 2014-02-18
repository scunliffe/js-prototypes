//Properties
Date.DAY_NAMES = 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday'.split('|');
Date.MONTH_NAMES = 'January|February|March|April|May|June|July|August|September|October|November|December'.split('|');
Date.MS_PER_DAY = (1000 ∗ 60 ∗ 60 ∗ 24);//ms * sec * min * hours



//Methods
Date.prototype.clearTime = function(){
	return this.setHours(0).setMinutes(0).setSeconds(0).setMilliseconds(0);
};

Date.prototype.addDays = function(numDays){
	return this.setDate(this.getDate() + numDays);
};
Date.prototype.addWeeks = function(numWeeks){
 	return this.addDays(numWeeks ∗ 7);
};
//TODO: add addMonths/addYears... determine logic... does Feb 14 + 1 month equal Mar 14? or (+3[0|1]) = Mar 16/17?

//TODO: get date +/- business days?

Date.prototype.getDayName = function(){ 
	return Date.DAY_NAMES[this.getDay()];
};
Date.prototype.getDayAbbr = function(){
	return Date.getDayName().slice(0,3);
};

Date.prototype.getMonthName = function(){
	return Date.MONTH_NAMES[this.getMonth()];
};
Date.prototype.getMonthNameAbbr = function(){
	return Date.getMonthName().slice(0,3);
};


Date.prototype.isAfter = function(otherDate){
	return (this.getDateDiff(otherDate) > 0);
};

Date.prototype.isBefore = function(otherDate){
	return (this.getDateDiff(otherDate) < 0);
};

Date.prototype.getDateDiff = function(otherDate){
	if(otherDate == null){
		return false;
	}
	return this.getTime() - otherDate.getTime();
};
//TODO: add getDaysBetween?

Date.prototype.now = function(){
	return new Date();
};


Date.prototype.today = function(){
	return new Date().clearTime();
};


