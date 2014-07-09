var evilGlobal;
var hello = function (name) {
	console.log("Hello " + name);
}
var loadData = function(filename) {
	$.get("data/"+filename, parseData);
}

var parseData = function (file) {
	var fileArr = [];
	fileArr = file.split('\n');
	console.log(fileArr);
}