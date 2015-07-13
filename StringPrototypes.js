String.prototype.cleanWhitespace = function(){
	return this.trim().replace(/(\s\s+)/g, " ");
};

String.prototype.deleteEmptyLines = function(){
	return this.split('\n').filter(function(n){return n != '';}).join('\n');
};

String.prototype.replaceAll = function(search, replacement){
	var str = this;
	return str.split(search).join(replacement);
};

String.prototype.replaceKeywords = function(replacements){
	var str = this;
	for(var key in replacements){
		str = str.replaceAll(key, replacements[key]);
	}
	return str;
};

String.prototype.reverse = function(){
	return this.split('').reverse().join('');
};

String.prototype.sortLines = function(){
	return this.split(/\n/).sort().join('\n');
};

String.prototype.toCapitalCase = function(){
	if(this.length < 2){
		return this.toUpperCase();
	}
	return this.substr(0,1).toUpperCase() + this.substr(1);
};

String.prototype.toSentenceCase = function(){
	var words = this.split(' ');
	var word;
	for(var i=0,wLen=words.length;i<wLen;i++){
		word = words[i];
		if(word.length < 2){
			word = word.toUpperCase();
		} else {
			word = word.substr(0,1).toUpperCase() + word.substr(1);
		}
		words[i] = word;
	}
	return words.join(' ');
};

String.prototype.toXMLDOM = function(){
	var xml;
	if(window.DOMParser){
		xml = (new DOMParser).parseFromString(this, 'text/xml');
	} else if(window.ActiveXObject){
		xml = [new ActiveXObject('Microsoft.XMLDOM'), this];
		xml[0].async = false;
		xml[0].loadXML(xml[1]);
		xml = xml[0];
	}
	return xml;
};

String.prototype.trim = function(){
	return this.replace(/^\s*/, "").replace(/\s*$/, "");
};
