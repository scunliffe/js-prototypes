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
