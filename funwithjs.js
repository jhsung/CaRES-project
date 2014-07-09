var evilGlobal;
var hello = function (name) {
	console.log("Hello " + name);
}
var loadData = function(filename) {
	$.get("data/"+filename, parseData);
}

var parseData = function (file) {
	var fileArr, i;
	fileArr = file.split('\n'); // Look up regular expressions (regex) for javascipt
	for (i = 0; i < fileArr.length; i += 1) {
		fileArr[i] = fileArr[i].split('\t');
	}
	console.log(fileArr);
}