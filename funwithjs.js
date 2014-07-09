var evilGlobal;
var hello = function (name) {
	console.log("Hello " + name);
}
var loadData = function(filename) {
	$.get("data/"+filename,function(res) {
		evilGlobal = res;
		console.log("All Done");
	});
}