var avgsleep = 8.74;

var datawork = [
{"gender":"male","fulltime":8.34,"parttime":5.42},
{"gender":"female","fulltime":7.73,"parttime":5.29}];

var dataleisure = [
{"age":"15-19","tv":2.76,"sports":0.76,"video":0.87},
{"age":"20-24","tv":2.49,"sports":0.38,"video":0.93},
{"age":"25-34","tv":2.72,"sports":0.34,"video":0.48},
{"age":"35-44","tv":2.95,"sports":0.38,"video":0.35},
{"age":"45-54","tv":3.14,"sports":0.28,"video":0.31},
{"age":"55-64","tv":3.57,"sports":0.37,"video":0.39},
{"age":"65-74","tv":4.51,"sports":0.27,"video":0.55},
{"age":"75over","tv":4.19,"sports":0.16,"video":0.34}];

var datashop = [
{"age":"15-19","male":0.44,"female":0.56},
{"age":"20-24","male":0.44,"female":0.83},
{"age":"25-34","male":0.64,"female":0.88},
{"age":"35-44","male":0.66,"female":0.87},
{"age":"45-54","male":0.64,"female":0.88},
{"age":"55-64","male":0.65,"female":0.9},
{"age":"65-74","male":0.71,"female":0.92},
{"age":"75over","male":0.82,"female":0.91}];

$(document).ready(function(){

$( "form" ).submit(function( event ) 
	{

//setting the age groups variable

		if($('#inputage').val()=="15 to 19"){var age=0;}
		if($('#inputage').val()=="20 to 24"){var age=1;}
		if($('#inputage').val()=="25 to 34"){var age=2;}
		if($('#inputage').val()=="35 to 44"){var age=3;}
		if($('#inputage').val()=="45 to 54"){var age=4;}
		if($('#inputage').val()=="55 to 64"){var age=5;}
		if($('#inputage').val()=="65 to 74"){var age=6;}
		if($('#inputage').val()=="75 and above"){var age=7;}

//setting the gender groups variable
		if($('#inputgender').val()=="male"){var gender=0;}
		if($('#inputgender').val()=="female"){var gender=1;}

//setting the workstatus groups variable

//code for question 1 on sleep

		var sleepfull = 0,
			sleepfull = ($('#inputsleep').val() - avgsleep) / avgsleep *100,
			sleep = sleepfull.toFixed(2),
			sleepabs = Math.abs(sleep);
		if(sleep>0){
			$("#sleepbox").text("You sleep too much! You sleep " + sleepabs + "% more than average Americans who sleep 8.74 hours per day.");
			$("#sleepbox").addClass("more");
		}
		else{
			$("#sleepbox").text("You sleep too little! You sleep " + sleepabs + "% less than average Americans who sleep 8.74 hours per day.");
			$("#sleepbox").addClass("less");
		}
		console.log(sleepabs);

//code for question 2 on work
		var workfull = 0;

		if($('#inputworkstatus').val()=="full-time")
		{
			workfull = ($('#inputwork').val() - datawork[gender].fulltime)/datawork[gender].fulltime *100;
			work = workfull.toFixed(2);
			workabs = Math.abs(work);
			if(work>0){
				$("#workbox").text("You work too much! You work " + workabs + "% more than average " + $('#inputgender').val() + " " + $('#inputworkstatus').val() + " Americans who work " + datawork[gender].fulltime + " hours per day.");
				$("#workbox").addClass("more");
			}
			else{
				$("#workbox").text("You work too little! You work " + workabs + "% less than average " + $('#inputgender').val() + " " + $('#inputworkstatus').val() + " Americans who work " + datawork[gender].fulltime + " hours per day.");
				$("#workbox").addClass("less");
			}
			console.log(workabs);
		}

		if($('#inputworkstatus').val()=="part-time")
		{
			workfull = ($('#inputwork').val() - datawork[gender].parttime)/datawork[gender].parttime *100;
			work = workfull.toFixed(2);
			workabs = Math.abs(work);
			if(work>0){
				$("#workbox").text("You work too much! You work " + workabs + "% more than average " + $('#inputgender').val() + " " + $('#inputworkstatus').val() + " Americans who work " + datawork[gender].parttime + " ours per day.");
				$("#workbox").addClass("more");
			}
			else{
				$("#workbox").text("You work too much! You work " + workabs + "% more than average " + $('#inputgender').val() + " " + $('#inputworkstatus').val() + " Americans who work " + datawork[gender].parttime + " hours per day.");
				$("#workbox").addClass("less");
			}
			console.log(workabs);
		}

//code for question 3 on shopping
	var shopfull = 0;

		if($('#inputgender').val()=="male")
		{
			shopfull = ($('#inputshop').val() - datashop[age].male)/datashop[age].male *100;
			shop = shopfull.toFixed(2);
			shopabs = Math.abs(shop);
			if(shop>0){
				$("#shopbox").text("You shop too much! You shop " + shopabs + "% more than average " + $('#inputgender').val() + " " + $('#inputage').val() + " Americans who shop " + datashop[age].male + " hours per day.");
				$("#shopbox").addClass("more");
			}
			else{
				$("#shopbox").text("You shop too little! You shop " + shopabs + "% less than average " + $('#inputgender').val() + " " + $('#inputage').val() + " Americans who shop " + datashop[age].male + " hours per day.");
				$("#shopbox").addClass("less");
			}
			console.log(shopabs);
		}

		if($('#inputgender').val()=="female")
		{
			shopfull = ($('#inputshop').val() - datashop[age].female)/datashop[age].female *100;
			shop = shopfull.toFixed(2);
			shopabs = Math.abs(shop);
			if(shop>0){
				$("#shopbox").text("You shop too much! You shop " + shopabs + "% more than average " + $('#inputgender').val() + " " + $('#inputage').val() + " Americans who work " + datashop[age].female + " hours per day.");
				$("#shopbox").addClass("more");
			}
			else{
				$("#shopbox").text("You shop too little! You shop " + shopabs + "% less than average " + $('#inputgender').val() + " " + $('#inputage').val() + " Americans who work " + datashop[age].female + " hours per day.");
				$("#shopbox").addClass("less");
			}
			console.log(shopabs);
		}	

//code for question 4 on tv

	var tvfull = 0,
		tvfull = ($('#inputtv').val() - dataleisure[age].tv)/ dataleisure[age].tv *100,
		tv = tvfull.toFixed(2),
		tvabs = Math.abs(tv);
	if(tv>0){
		$("#tvbox").text("You watch too much TV! You watch " + tvabs + "% more than average " + $('#inputage').val() + " Americans who watch " + dataleisure[age].tv + " hours per weekend day.");
		$("#tvbox").addClass("more");
		}
	else{
		$("#tvbox").text("You watch too little TV! You watch " + tvabs + "% less than average " + $('#inputage').val() + " Americans who watch " + dataleisure[age].tv + " hours per weekend day.");
		$("#tvbox").addClass("less");
		}
	console.log(tvabs);

//code for question 5 on video games and computer

	var videofull = 0,
		videofull = ($('#inputvideo').val() - dataleisure[age].video)/ dataleisure[age].video *100,
		video = videofull.toFixed(2),
		videoabs = Math.abs(video);
	if(video>0){
		$("#videobox").text("You use too much computer for leisure! You use computer for leisure " + videoabs + "% more than average " + $('#inputage').val() + " Americans who use " + dataleisure[age].video + " hours of computer for leisure per weekend day.");
		$("#videobox").addClass("more");
		}
	else{
		$("#videobox").text("You use too little computer for leisure! You use computer for leisure " + videoabs + "% less than average " + $('#inputage').val() + " Americans who use " + dataleisure[age].video + " hours of computer for leisure per weekend day.");
		$("#videobox").addClass("less");
		}
	console.log(videoabs);

//code for question 6 on sports, exercise and recreation per weekend day

	var sportsfull = 0,
		sportsfull = ($('#inputsports').val() - dataleisure[age].sports)/ dataleisure[age].sports *100,
		sports = sportsfull.toFixed(2),
		sportsabs = Math.abs(sports);
	if(sports>0){
		$("#sportsbox").text("You exercise too much! You exercise " + sportsabs + "% more than average " + $('#inputage').val() + " Americans who exercise " + dataleisure[age].sports + " hours per weekend day.");
		$("#sportsbox").addClass("more");
		}
	else{
		$("#sportsbox").text("You exercise too much! You exercise " + sportsabs + "% less than average " + $('#inputage').val() + " Americans who exercise " + dataleisure[age].sports + " hours per weekend day.");
		$("#sportsbox").addClass("less");
		}
	console.log(sportsabs);


		event.preventDefault();

	});

});
