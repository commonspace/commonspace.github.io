$(document).ready(init);

function loadEvents(){
	$.get({
		url:"https://api.meetup.com/syracusecoworks/events?photo-host=public&page=20&sig_id=36356752&sig=6f7239ab2d13723e43ca632a1449853172f01977&key=1fa5a50347b2c393b1565786a2ba1",
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