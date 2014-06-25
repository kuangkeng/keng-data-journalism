var avgsleep = 8.74,
	avgworkmenfull = 8.34,
	avgworkmenpart = 5.42,
	avgworkwomenfull = 7.73,
	avgworkwomenpart = 5.29;

$(document).ready(function(){

$( "form" ).submit(function( event ) 
	{
		var sleepfull = 0,
			sleepfull = ($('#inputsleep').val() - avgsleep) / avgsleep *100,
			sleep = sleepfull.toFixed(2),
			sleepabs = Math.abs(sleep);
		if(sleep>0){
			$("#sleepbox").text("You sleep too much! You sleep " + sleepabs + "% more than average Americans who sleep 8.74 hours per day.");
		}
		else{
			$("#sleepbox").text("You sleep too little! You sleep " + sleepabs + "% less than average Americans who sleep 8.74 hours per day.");
		}

//code for question 2 on work
		var workfull = 0;

		if($('#inputgender').val()=="Male" && $('#inputworkstatus').val()=="Full-time")
		{
			workfull = ($('#inputwork').val() - avgworkmenfull) / avgworkmenfull *100;
			work = workfull.toFixed(2);
			workabs = Math.abs(work);
			if(work>0){
				$("#workbox").text("You work too much! You work " + workabs + "% more than average male full-time Americans who work 5.42 hours per day.");
			}
			else{
				$("#workbox").text("You work too little! You work " + workabs + "% less than average male full-time Americans who work 5.42 hours per day.");
			}
		}

		if($('#inputgender').val()=="Male" && $('#inputworkstatus').val()=="Part-time")
		{
			workfull = ($('#inputwork').val() - avgworkmenpart) / avgworkmenpart *100;
			work = workfull.toFixed(2);
			workabs = Math.abs(work);
			if(work>0){
				$("#workbox").text("You work too much! You work " + workabs + "% more than average male part-time Americans who work 5.42 hours per day.");
			}
			else{
				$("#workbox").text("You work too little! You work " + workabs + "% less than average male part-time Americans who work 5.42 hours per day.");
			}
		}	

		if($('#inputgender').val()=="Female" && $('#inputworkstatus').val()=="Full-time")
		{
			workfull = ($('#inputwork').val() - avgworkwomenfull) / avgworkwomenfull *100;
			work = workfull.toFixed(2);
			workabs = Math.abs(work);
			if(work>0){
				$("#workbox").text("You work too much! You work " + workabs + "% more than average female full-time Americans who work 7.73 hours per day.");
			}
			else{
				$("#workbox").text("You work too little! You work " + workabs + "% less than average female full-time Americans who work 7.73 hours per day.");
			}
		}	

		if($('#inputgender').val()=="Female" && $('#inputworkstatus').val()=="Part-time")
		{
			workfull = ($('#inputwork').val() - avgworkwomenpart) / avgworkwomenpart *100;
			work = workfull.toFixed(2);
			workabs = Math.abs(work);
			if(work>0){
				$("#workbox").text("You work too much! You work " + workabs + "% more than average female part-time Americans who work 5.29 hours per day.");
			}
			else{
				$("#workbox").text("You work too little! You work " + workabs + "% less than average female part-time Americans who work 5.29 hours per day.");
			}
		}	
		event.preventDefault();	
	});

});
