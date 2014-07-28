$("#message, #workboxmore, #workboxless, #sleepboxmore, #sleepboxless, #shopboxmore, #shopboxless, #tvboxmore, #tvboxless, #videoboxmore, #videoboxless, #sportsboxmore, #sportsboxless, #result").hide();

var dataavg = {sleep: 8.74, work: 7.58, shop: 0.75, tv: 3.24, sports: 0.36, video: 0.48};

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

//form validation using jquery validation plugin
	 $("#timeuseform").validate({
		rules: {
					sleephour: {
						required: true,
						range: [0,24]
					},
					sleepmin: {
						range: [0,59]
					},
					workhour: {
						required: true,
						range: [0,24]
					},
					workmin: {
						range: [0,59]
					},
					shophour: {
						required: true,
						range: [0,24]
					},
					shopmin: {
						range: [0,59]
					},
					tvhour: {
						required: true,
						range: [0,24]
					},
					tvmin: {
						range: [0,59]
					},
					videohour: {
						required: true,
						range: [0,24]
					},
					videomin: {
						range: [0,59]
					},
					sportshour: {
						required: true,
						range: [0,24]
					},
					sportsmin: {
						range: [0,59]
					},
				},
//messages to be displayed if input cannot be validated
		messages: {
                    sleephour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24"
                    },
                    sleepmin: {
                        range: "Must be a number between 0 and 59"
                    },
                    workhour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24"
                    },
                    workmin: {
                        range: "Must be a number between 0 and 59"
                    },
                    shophour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24"
                    },
                    shopmin: {
                        range: "Must be a number between 0 and 59"
                    },
                    tvhour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24"
                    },
                    tvmin: {
                        range: "Must be a number between 0 and 59"
                    },
                    videohour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24"
                    },
                    videomin: {
                        range: "Must be a number between 0 and 59"
                    },
                    sportshour: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24"
                    },
                    sportsmin: {
                        range: "Must be a number between 0 and 59"
                    },
                },

//display error messages style if input cannot be validated
       errorPlacement: function(error, element) {
 //       error.insertAfter(element);
        offset = element.offset();
            error.insertAfter(element)
            error.addClass('errormessage');  // add a class to the wrapper
   			error.css('position', 'absolute');
            error.css('left', offset.left);
            error.css('top', offset.top + element.outerHeight() + 5);
    },
    wrapper: 'div',        	

submitHandler: function(form) {

//setting the input variables
		var inputsleep = ($('#inputsleephour').val()/10*10 + $('#inputsleepmin').val()/60),
			inputwork = $('#inputworkhour').val()/10*10 + $('#inputworkmin').val()/60,
			inputshop = $('#inputshophour').val()/10*10 + $('#inputshopmin').val()/60,
			inputtv = $('#inputtvhour').val()/10*10 + $('#inputtvmin').val()/60,
			inputvideo = $('#inputvideohour').val()/10*10 + $('#inputvideomin').val()/60,
			inputsports = $('#inputsportshour').val()/10*10 + $('#inputsportsmin').val()/60,
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

		var avgworkhour = Math.floor(avgwork),
			avgworkmin = Math.round((avgwork-Math.floor(avgwork))*60),
			avgtvhour = Math.floor(avgtv),
			avgtvmin = Math.round((avgtv-Math.floor(avgtv))*60),
			avgshopmin = Math.round(avgshop*60),
			avgvideomin = Math.round(avgvideo*60),
			avgsportsmin = Math.round(avgsports*60);

//code for question 1 on sleep

		var sleepfull = (inputsleep - avgsleep) / avgsleep *100,
			sleep = Math.round(sleepfull),
			sleepabs = Math.abs(sleep);
		if(sleep>0){
			$("#sleepboxmore").show();
			$("#sleepnomore").text(sleepabs+"% more");
			$("#sleepnomore").addClass("more");
		}
		else{
			$("#sleepboxless").show();
			$("#sleepnoless").text(sleepabs+"% less");
			$("#sleepnoless").addClass("less");
		}
		console.log("question 1 answer: " + sleepabs);
		console.log("question 1 hour and min input: " + inputsleep);
		console.log("question 1 hour input: " + $('#inputsleephour').val());
		console.log("question 1 min input: " + $('#inputsleepmin').val()/60);
		console.log("avgwork: " + avgworkhour + "." + avgworkmin);
		console.log("avgshop: " + avgshopmin);
		console.log("avgtv: " + avgtvhour + "." + avgtvmin);
		console.log("avgvideo: " + avgvideomin);
		console.log("avgsports: " + avgsportsmin);
		

//code for question 2 on work
		var workfull = (inputwork - avgwork)/avgwork *100,
			work = Math.round(workfull),
			workabs = Math.abs(work);
			if(work>0){
				$("#workboxmore").show();
				$("#worknomore").text(workabs+"% more");
				$("#workavgnomore").text(avgworkhour + " hours and " + avgworkmin + " minutes");
				$("#workgendermore").text(inputgender);
				$("#workstatusmore").text(inputworkstatus);
				$("#worknomore").addClass("more");
			}
			else{
				$("#workboxless").show();
				$("#worknoless").text(workabs+"% less");
				$("#workavgnoless").text(avgworkhour + " hours and " + avgworkmin + " minutes");
				$("#workgenderless").text(inputgender);
				$("#workstatusless").text(inputworkstatus);
				$("#worknoless").addClass("less");
			}
			console.log("question 2 answer: " + workabs);

//code for question 3 on shopping
	var shopfull = (inputshop - avgshop)/avgshop *100,
		shop = Math.round(shopfull),
		shopabs = Math.abs(shop);
		if(shop>0){
			$("#shopboxmore").show();
			$("#shopnomore").text(shopabs+"% more");
			$("#shopavgnomore").text(" " + avgshopmin + " minutes");
			$("#shopgendermore").text(inputgender);
			$("#shopagemore").text(inputage);
			$("#shopnomore").addClass("more");
		}
		else{
			$("#shopboxless").show();
			$("#shopnoless").text(shopabs+"% less");
			$("#shopavgnoless").text(" " + avgshopmin + " minutes");
			$("#shopgenderless").text(inputgender);
			$("#shopageless").text(inputage);
			$("#shopnoless").addClass("less");
		}
		console.log("question 3 answer: " + shopabs);
		

//code for question 4 on tv

	var tvfull = (inputtv - avgtv)/ avgtv *100,
		tv = Math.round(tvfull),
		tvabs = Math.abs(tv);
	if(tv>0){
		$("#tvboxmore").show();
		$("#tvnomore").text(tvabs+"% more");
		$("#tvavgnomore").text(avgtvhour + " hours and " + avgtvmin + " minutes");
		$("#tvagemore").text(inputage);
		$("#tvnomore").addClass("more");
		}
	else{
		$("#tvboxless").show();
		$("#tvnoless").text(tvabs+"% less");
		$("#tvavgnoless").text(avgtvhour + " hours and " + avgtvmin + " minutes");
		$("#tvageless").text(inputage);
		$("#tvnoless").addClass("less");
		}
	console.log("question 4 answer: " + tvabs);

//code for question 5 on video games and computer

	var videofull = (inputvideo - avgvideo)/ avgvideo *100,
		video = Math.round(videofull),
		videoabs = Math.abs(video);
	if(video>0){
		$("#videoboxmore").show();
		$("#videonomore").text(videoabs+"% more");
		$("#videoavgnomore").text(" " + avgvideomin + " minutes");
		$("#videoagemore").text(inputage);
		$("#videonomore").addClass("more");
		}
	else{
		$("#videoboxless").show();
		$("#videonoless").text(videoabs+"% less");
		$("#videoavgnoless").text(" " + avgvideomin + " minutes");
		$("#videoageless").text(inputage);
		$("#videonoless").addClass("less");
		}
	console.log("question 5 answer: " + videoabs);

//code for question 6 on sports, exercise and recreation

	var sportsfull = (inputsports - avgsports)/ avgsports *100,
		sports = Math.round(sportsfull),
		sportsabs = Math.abs(sports);
	if(sports>0){
		$("#sportsboxmore").show();
		$("#sportsnomore").text(sportsabs+"% more");
		$("#sportsavgnomore").text(" " + avgsportsmin + " minutes");
		$("#sportsagemore").text(inputage);
		$("#sportsnomore").addClass("more");
		}
	else{
		$("#sportsboxless").show();
		$("#sportsnoless").text(sportsabs+"% less");
		$("#sportsavgnoless").text(" " + avgsportsmin + " minutes");
		$("#sportsageless").text(inputage);
		$("#sportsnoless").addClass("less");
		}
	console.log("question 6 answer: " + sportsabs);

//create a new array based on calculation of input (convert to percentage)

	var dataset = [
		{"name":"Sleep","value": sleep/100, "label": sleep, "tooltip": "Compared with average Americans" + " (8:44)"},
		{"name":"Work","value": work/100, "label": work, "tooltip": "Compared with " + inputgender + " Americans with " + inputworkstatus + " employment" + " (" +avgworkhour +":"+ avgworkmin + ")"},
		{"name":"Shop","value": shop/100, "label": shop, "tooltip": "Compared with " + inputgender + " Americans aged " + inputage + " (" + "0:" + avgshopmin + ")"},
		{"name":"Watch TV","value": tv/100, "label": tv, "tooltip": "Compared with Americans aged " + inputage + " (" + avgtvhour + ":" + avgtvmin + ")"},
		{"name":"Computer","value": video/100, "label": video, "tooltip": "Compared with Americans aged " + inputage + " (" + "0:" + avgvideomin + ")"},
		{"name":"Workout","value": sports/100, "label": sports, "tooltip": "Compared with Americans aged " + inputage + " (" + "0:" + avgsportsmin + ")"}
		];
	console.log (dataset[1].value);
	
//code for first d3 bar chart starts here	

var margin = {top: 30, right: 50, bottom: 10, left: 140},
    width = 540 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width])

var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], .2);

var formatAsPercentage = d3.format("10%");

var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(formatAsPercentage)
    .ticks(10)
    .orient("top");

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {return d.tooltip;});

var svg = d3.select("#barbox").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

  x.domain(d3.extent(dataset, function(d) { return d.value; })).nice();
  y.domain(dataset.map(function(d) { return d.name; }));

var xd = x.domain(d3.extent(dataset, function(d) { return d.value; })).nice(),
    yd = y.domain(dataset.map(function(d) { return d.name; }));


  svg.selectAll(".bar")
      .data(dataset)
      .enter().append("rect")
      .attr("class", function(d) { return d.value < 0 ? "bar negative" : "bar positive"; })
      .attr("x", function(d) { return x(Math.min(0, d.value)); })
      .attr("y", function(d) { return y(d.name); })
      .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })
      .attr("height", y.rangeBand())
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

  svg.append("g")
      .attr("class", "y axis")
      .append("line")
      .attr("x1", x(0))
      .attr("x2", x(0))
      .attr("y2", height);

  svg.append("g")
      .attr("class", "x axis")
      .call(xAxis);

svg.selectAll("text.name")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d){return d.name;})
  .attr("y", function(d) { return y(d.name)+ y.rangeBand()/2; })
  .attr("x", -50)
  .attr('stroke', 'none')
  .attr('fill', 'black')
  .attr("dy", ".35em")
  .attr('text-anchor', 'end')
  .attr({"fill":"black","font-family":"Arimo", "font-size":15});
  

  svg.selectAll("text.value")
     .data(dataset)
     .enter()
     .append("text")
     .text(function(d){return d.label + "%";})
     .attr("x", function(d) { 
        if (d.value <= 0) {
          return x(Math.min(0, d.value));
        }
        else {
          return x(Math.min(0, d.value)) + Math.abs(x(d.value)-x(0));
        }
        })
     .attr("y", function(d) { return y(d.name)+ y.rangeBand()/2; })
     .attr("text-anchor", function(d){
      if (d.value <= 0) {return "end"}
      else {return "left"}
     })
     .attr("dx", function(d){
      if (d.value <= 0) {return -2}
      else {return 2}
     })
     .attr("dy", ".36em")
     .attr({"fill":"black","font-family":"Arimo", "font-size":14});
  
function type(d) {
  d.value = +d.value;
  return d;}

//create a new array based on calculation of population average values

var sleepfull2 = (inputsleep - dataavg.sleep)/dataavg.sleep *100,
	sleep2 = Math.round(sleepfull2);
var workfull2 = (inputwork - dataavg.work)/dataavg.work *100,
	work2 = Math.round(workfull2);
var shopfull2 = (inputshop - dataavg.shop)/dataavg.shop *100,
	shop2 = Math.round(shopfull2);
var tvfull2 = (inputtv - dataavg.tv)/dataavg.tv *100,
	tv2 = Math.round(tvfull2);
var videofull2 = (inputvideo - dataavg.video)/dataavg.video *100,
	video2 = Math.round(videofull2);
var sportsfull2 = (inputsports - dataavg.sports)/dataavg.sports *100,
	sports2 = Math.round(sportsfull2);

var dataset2 = [
	{"name":"Sleep","value": sleep2/100, "label": sleep2, "tooltip": "Compared with general Americans (8:44)"},
	{"name":"Work","value": work2/100, "label": work2, "tooltip": "Compared with general Americans (7:35)"},
	{"name":"Shop","value": shop2/100, "label": shop2, "tooltip": "Compared with general Americans (0:45)"},
	{"name":"Watch TV","value": tv2/100, "label": tv2, "tooltip": "Compared with general Americans (3:14)"},
	{"name":"Computer","value": video2/100, "label": video2, "tooltip": "Compared with general Americans (0:29)"},
	{"name":"Workout","value": sports2/100, "label": sports2, "tooltip": "Compared with general Americans (0:22)"}];

//code for second d3 bar using dataset2:

var margin = {top: 30, right: 50, bottom: 10, left: 140},
    width = 540 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width])

var y = d3.scale.ordinal()
    .rangeRoundBands([0, height], .2);

var formatAsPercentage = d3.format("10%");

var xAxis = d3.svg.axis()
    .scale(x)
    .tickFormat(formatAsPercentage)
    .ticks(10)
    .orient("top");

var tip = d3.tip()
  	.attr('class', 'd3-tip')
  	.offset([-10, 0])
  	.html(function(d) {return d.tooltip;});

var svg = d3.select("#barbox2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

  x.domain(d3.extent(dataset2, function(d) { return d.value; })).nice();
  y.domain(dataset2.map(function(d) { return d.name; }));

var xd = x.domain(d3.extent(dataset2, function(d) { return d.value; })).nice(),
    yd = y.domain(dataset2.map(function(d) { return d.name; }));


  svg.selectAll(".bar")
      .data(dataset2)
      .enter().append("rect")
      .attr("class", function(d) { return d.value < 0 ? "bar negative" : "bar positive"; })
      .attr("x", function(d) { return x(Math.min(0, d.value)); })
      .attr("y", function(d) { return y(d.name); })
      .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })
      .attr("height", y.rangeBand())
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

  svg.append("g")
      .attr("class", "y axis")
      .append("line")
      .attr("x1", x(0))
      .attr("x2", x(0))
      .attr("y2", height);

  svg.append("g")
      .attr("class", "x axis")
      .call(xAxis);

svg.selectAll("text.name")
  .data(dataset2)
  .enter()
  .append("text")
  .text(function(d){return d.name;})
  .attr("y", function(d) { return y(d.name)+ y.rangeBand()/2; })
  .attr("x", -50)
  .attr('stroke', 'none')
  .attr('fill', 'black')
  .attr("dy", ".35em")
  .attr('text-anchor', 'end')
  .attr({"fill":"black","font-family":"Arimo", "font-size":15});
  

  svg.selectAll("text.value")
     .data(dataset2)
     .enter()
     .append("text")
     .text(function(d){return d.label + "%";})
     .attr("x", function(d) { 
        if (d.value <= 0) {
          return x(Math.min(0, d.value));
        }
        else {
          return x(Math.min(0, d.value)) + Math.abs(x(d.value)-x(0));
        }
        })
     .attr("y", function(d) { return y(d.name)+ y.rangeBand()/2; })
     .attr("text-anchor", function(d){
      if (d.value <= 0) {return "end"}
      else {return "left"}
     })
     .attr("dx", function(d){
      if (d.value <= 0) {return -2}
      else {return 2}
     })
     .attr("dy", ".36em")
     .attr({"fill":"black","font-family":"Arimo", "font-size":14});
  
function type(d) {
  d.value = +d.value;
  return d;}

$("#message, #result").show();
$("#button").hide();

//code for dynamic twitter message

var twittermsg;
if(sleep>0&&work>0){twittermsg="I sleep and work more than fellow Americans. What about you?";}
if(sleep>0&&work<0){twittermsg="I sleep more and work less than fellow Americans. What about you?";}
if(sleep<0&&work>0){twittermsg="I work more and sleep less than fellow Americans. What about you?";}
if(sleep<0&&work<0){twittermsg="I sleep and work less than fellow Americans. What about you?";}
else{"Do you sleep, work and play more than fellow Americans?";}

console.log(twittermsg);

$('a[data-text]').each(function(){
    $(this).attr('data-text', twittermsg);
    });
$.getScript('http://platform.twitter.com/widgets.js');

var fbresult;
if(sleep>0&&work>0){fbresult="'http://kuangkeng.github.io/keng-data-journalism/timeuseform/result1.html'";}
if(sleep>0&&work<0){fbresult="'http://kuangkeng.github.io/keng-data-journalism/timeuseform/result1.html'";}
if(sleep<0&&work>0){fbresult="'http://kuangkeng.github.io/keng-data-journalism/timeuseform/result2.html'";}
if(sleep<0&&work<0){fbresult="'http://kuangkeng.github.io/keng-data-journalism/timeuseform/result2.html'";}
   }


});

//Facebook SDK

$(".fb-share-button1").click(function(){

FB.ui(
 {
  method: 'share',
  href: fbresult
}, function(response){});  

    });

$(".fb-share-button2").click(function(){

FB.ui(
 {
  method: 'share',
  href: 'http://kuangkeng.github.io/keng-data-journalism/timeuseform/result2.html'
}, function(response){});  

    });



});
