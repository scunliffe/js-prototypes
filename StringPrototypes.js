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
