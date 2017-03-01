$(document).ready(init);

function loadEvents(){
	$.ajax({
		method: "GET",
		dataType: "json",
		url:"https://api.meetup.com/2/events?key=1fa5a50347b2c393b1565786a2ba1&group_urlname=syracusecoworks&sign=true",
		success:function(data){
			debugger;
		},
		error:function(error){
			debugger
		}
	});
}

function setDate() {
	var dt = new Date();
	var dts = "" + dt;
	var dtp = dts.split(" ");
	dts = dtp[0] + ", " + dtp[1] + " " + dtp[2];
	$("#header #dt").html(dts);
	loadEvents();
}
function init(){
	setInterval(setDate, 60000);
	setDate();
}