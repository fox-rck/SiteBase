function sendRequest(url,callback,method, data) {
	var req = createXMLHTTPObject();
	if (!req) return;
	var method = method;
	req.open(method,url,true);
	req.setRequestHeader('User-Agent','XMLHTTP/1.0');
	if (method === 'POST')
		//req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		req.setRequestHeader('Content-type','application/json');
	req.onreadystatechange = function () {
		if (req.readyState != 4) return;
		if (req.status != 200 && req.status != 304) {
//			alert('HTTP error ' + req.status);
			return;
		}
		callback(JSON.parse(req.response));
	}
	if (req.readyState == 4) return;
	req.send(data);
}

var XMLHttpFactories = [
	function () {return new XMLHttpRequest()},
	function () {return new ActiveXObject("Msxml2.XMLHTTP")},
	function () {return new ActiveXObject("Msxml3.XMLHTTP")},
	function () {return new ActiveXObject("Microsoft.XMLHTTP")}
];

function createXMLHTTPObject() {
	var xmlhttp = false;
	for (var i=0;i<XMLHttpFactories.length;i++) {
		try {
			xmlhttp = XMLHttpFactories[i]();
		}
		catch (e) {
			continue;
		}
		break;
	}
	return xmlhttp;
}
function request(url, data, method) {
	var bod = JSON.stringify(data);
	return new Promise(function(resolve, reject) {
		sendRequest(url,function(res) {
			console.log("send: " + url);
			var status = typeof res.code === 'undefined' ? 'success' : 'error';
		  	resolve({status: status, data: res});
		},method, bod);
	});
}
export {request}