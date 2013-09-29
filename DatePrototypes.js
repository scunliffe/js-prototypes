//Properties
Date.dayNames = 'Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday'.split('|');
Date.monthNames = 'January|February|March|April|May|June|July|August|September|October|November|December'.split('|');



//Methods
Date.prototype.clearTime = function(){
	return this.setHours(0).setMinutes(0).setSeconds(0).setMilliseconds(0);
};

Date.prototype.getDayName = function(){ 
	return Date.dayNames[this.getDay()];
};

Date.prototype.getMonthName = function(){
	return Date.monthNames[this.getMonth()];
};


Date.prototype.isAfter = function(otherDate){
	if(otherDate == null){
	  return false; 
	}
	return (this.getTime() > otherDate.getTime());
};

Date.prototype.isBefore = function(otherDate){
	if(otherDate == null){
		return false;
	}
	return (this.getTime() < otherDate.getTime());
};

Date.prototype.now = function(){
	return new Date();
};


Date.prototype.today = function(){
	return new Date().clearTime();
};