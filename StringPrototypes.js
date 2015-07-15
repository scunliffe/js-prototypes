String.prototype.cleanWhitespace = function(){
	return this.trim().replace(/(\s\s+)/g, " ");
};

String.prototype.deleteEmptyLines = function(){
	return this.split('\n').filter(function(n){return n != '';}).join('\n');
};

String.prototype.escapeHtml = function(){
	return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
};

if(typeof(String.prototype.repeat) == 'undefined'){
	String.prototype.repeat = function(count){
		return Array(count >= 0 ? parseInt(count, 10) + 1 : -1).join(this);
	};
}

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
