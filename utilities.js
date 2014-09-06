function xmlToJSON(xml){
	var obj = {};
	if(xml.nodeType == 1){//Node
		if(xml.attributes && xml.attributes.length > 0){
			obj["@attributes"] = {};
			var attribute;
			for(var i=0;i<xml.attributes.length;i++){
				attribute = xml.attributes.item(i);
				obj["@attributes"][attribute.nodeName] = attribute.value;
			}
		}
	} else if(xml.nodeType == 3){//Text
		obj = xml.nodeValue;
	} else if(xml.nodeType == 4){//CData
		obj = xml.nodeValue;
	}
	if(xml.hasChildNodes()){
		for(var i=0;i<xml.childNodes.length;i++){
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if(typeof(obj[nodeName]) == 'undefined'){
				obj[nodeName] = xmlToJSON(item);
			} else {
				if(typeof(obj[nodeName].push) == 'undefined'){
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJSON(item));
			}
		}
	}
	return obj;
};
