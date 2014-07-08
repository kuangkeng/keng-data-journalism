//$("#textbox").html("Hello <b>world</b>!");

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

function init (){

//form validation using jquery validation plugin
	 $("#timeuseform").validate({
		rules: {
					sleep: {
						required: true,
						number: true
					},
					work: {
						required: true,
						number: true
					},
					shop: {
						required: true,
						number: true
					},
					tv: {
						required: true,
						number: true
					},
					video: {
						required: true,
						number: true
					},
					sports: {
						required: true,
						number: true
					}
				},
//messages to be displayed if input cannot be validated
		messages: {
                    sleep: {
                        required: "Please answer this question",
                        number: "Your answer must be a number with maximum 1 decimal point"
                    },
                    work: {
                        required: "Please answer this question",
                        number: "Your answer must be a number with maximum 1 decimal point"
                    },
                    shop: {
                        required: "Please answer this question",
                        number: "Your answer must be a number with maximum 1 decimal point"
                    },
                    tv: {
                        required: "Please answer this question",
                        number: "Your answer must be a number with maximum 1 decimal point"
                    },
                    video: {
                        required: "Please answer this question",
                        number: "Your answer must be a number with maximum 1 decimal point"
                    },
                    sports: {
                        required: "Please answer this question",
                        number: "Your answer must be a number with maximum 1 decimal point"
                    }
                },
//display error messages style if input cannot be validated
        errorPlacement: function(label, element) {
        label.insertAfter(element);
    },
    wrapper: 'span',        	

submitHandler: function(form) 
	
	{


//setting the input variables
		var inputsleep = $('#inputsleep').val(),
			inputwork = $('#inputwork').val(),
			inputshop = $('#inputshop').val(),
			inputtv = $('#inputtv').val(),
			inputvideo = $('#inputvideo').val(),
			inputsports = $('#inputsports').val(),
			inputage = $('#inputage').val(),
			inputgender = $('#inputgender').val(),
			inputworkstatus = $('#inputworkstatus').val();

//setting the age groups variables

		if(inputage=="15 to 19"){var age=0;}
		if(inputage=="20 to 24"){var age=1;}
		if(inputage=="25 to 34"){var age=2;}
		if(inputage=="35 to 44"){var age=3;}
		if(inputage=="45 to 54"){var age=4;}
		if(inputage=="55 to 64"){var age=5;}
		if(inputage=="65 to 74"){var age=6;}
		if(inputage=="75 and above"){var age=7;}

//setting the gender groups variables
		if(inputgender=="male"){var gender=0;}
		if(inputgender=="female"){var gender=1;}
		if(inputgender=="male"){var shopgender="male";}
		if(inputgender=="female"){var shopgender="female";}

//setting the workstatus groups variables
		if(inputworkstatus=="full-time"){var workstatus="fulltime";}
		if(inputworkstatus=="part-time"){var workstatus="parttime";}

//setting the average variables which are based on users' input
		var avgwork = datawork[gender][workstatus],
			avgshop = datashop[age][shopgender],
			avgtv = dataleisure[age].tv,
			avgvideo = dataleisure[age].video,
			avgsports = dataleisure[age].sports;


//code for question 1 on sleep

		var sleepfull = (inputsleep - avgsleep) / avgsleep *100,
			sleep = Math.round(sleepfull),
			sleepabs = Math.abs(sleep);
		if(sleep>0){
			$("#sleepbox").text("You sleep too much! You sleep " + sleepabs + "% more than average Americans who sleep 8.74 hours per day.");
			$("#sleepbox").addClass("more");
		}
		else{
			$("#sleepbox").text("You sleep too little! You sleep " + sleepabs + "% less than average Americans who sleep 8.74 hours per day.");
			$("#sleepbox").addClass("less");
		}
		console.log("question 1 answer: " + sleepabs);

//code for question 2 on work
		var workfull = (inputwork - avgwork)/avgwork *100,
			work = Math.round(workfull),
			workabs = Math.abs(work);
			if(work>0){
				$("#workbox").text("You work too much! You work " + workabs + "% more than average " + inputgender + " " + inputworkstatus + " Americans who work " + avgwork + " hours per day.");
				$("#workbox").addClass("more");
			}
			else{
				$("#workbox").text("You work too little! You work " + workabs + "% less than average " + inputgender + " " + inputworkstatus + " Americans who work " + avgwork + " hours per day.");
				$("#workbox").addClass("less");
			}
			console.log("question 2 answer: " + workabs);

//code for question 3 on shopping
	var shopfull = (inputshop - avgshop)/avgshop *100,
		shop = Math.round(shopfull),
		shopabs = Math.abs(shop);
		if(shop>0){
			$("#shopbox").text("You shop too much! You shop " + shopabs + "% more than average " + inputgender + " " + inputage + " Americans who shop " + avgshop + " hours per day.");
			$("#shopbox").addClass("more");
		}
		else{
			$("#shopbox").text("You shop too little! You shop " + shopabs + "% less than average " + inputgender + " " + inputage + " Americans who shop " + avgshop + " hours per day.");
			$("#shopbox").addClass("less");
		}
		console.log("question 3 answer: " + shopabs);
		

//code for question 4 on tv

	var tvfull = (inputtv - avgtv)/ avgtv *100,
		tv = Math.round(tvfull),
		tvabs = Math.abs(tv);
	if(tv>0){
		$("#tvbox").text("You watch too much TV! You watch " + tvabs + "% more than average " + inputage + " Americans who watch " + avgtv + " hours per weekend day.");
		$("#tvbox").addClass("more");
		}
	else{
		$("#tvbox").text("You watch too little TV! You watch " + tvabs + "% less than average " + inputage + " Americans who watch " + avgtv + " hours per weekend day.");
		$("#tvbox").addClass("less");
		}
	console.log("question 4 answer: " + tvabs);

//code for question 5 on video games and computer

	var videofull = (inputvideo - avgvideo)/ avgvideo *100,
		video = Math.round(videofull),
		videoabs = Math.abs(video);
	if(video>0){
		$("#videobox").text("You use too much computer for leisure! You use computer for leisure " + videoabs + "% more than average " + inputage + " Americans who use " + avgvideo + " hours of computer for leisure per weekend day.");
		$("#videobox").addClass("more");
		}
	else{
		$("#videobox").text("You use too little computer for leisure! You use computer for leisure " + videoabs + "% less than average " + inputage + " Americans who use " + avgvideo + " hours of computer for leisure per weekend day.");
		$("#videobox").addClass("less");
		}
	console.log("question 5 answer: " + videoabs);

//code for question 6 on sports, exercise and recreation

	var sportsfull = (inputsports - avgsports)/ avgsports *100,
		sports = Math.round(sportsfull),
		sportsabs = Math.abs(sports);
	if(sports>0){
		$("#sportsbox").text("You exercise too much! You exercise " + sportsabs + "% more than average " + inputage + " Americans who exercise " + avgsports + " hours per weekend day.");
		$("#sportsbox").addClass("more");
		}
	else{
		$("#sportsbox").text("You exercise too little! You exercise " + sportsabs + "% less than average " + inputage + " Americans who exercise " + avgsports + " hours per weekend day.");
		$("#sportsbox").addClass("less");
		}
	console.log("question 6 answer: " + sportsabs);

//create a new array based on calculation of input (convert to percentage)

	var dataset = [
		{"name":"Sleep","value": sleep/100},
		{"name":"Work","value": work/100},
		{"name":"Shop","value": shop/100},
		{"name":"Watch TV","value": tv/100},
		{"name":"Computer","value": video/100},
		{"name":"Workout","value": sports/100}
		];
	console.log (dataset[1].value);


	}

});

};


//code for google bar chart starts here
google.load("visualization", "1", {packages:["corechart"], callback: init});
google.setOnLoadCallback(drawChart);

      function drawChart() {
        var data1 = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          vAxis: {title: 'Year',  titleTextStyle: {color: 'red'}}
        };

        var chart = new google.visualization.BarChart(document.getElementById('barbox'));
        chart.draw(data1, options);
        };
