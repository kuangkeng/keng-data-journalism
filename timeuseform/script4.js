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
					sleep: {
						required: true,
						range: [0,24]
					},
					work: {
						required: true,
						range: [0,24]
					},
					shop: {
						required: true,
						range: [0,24]
					},
					tv: {
						required: true,
						range: [0,24]
					},
					video: {
						required: true,
						range: [0,24]
					},
					sports: {
						required: true,
						range: [0,24]
					}
				},
//messages to be displayed if input cannot be validated
		messages: {
                    sleep: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24 with maximum 2 decimal places"
                    },
                    work: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24 with maximum 2 decimal places"
                    },
                    shop: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24 with maximum 2 decimal places"
                    },
                    tv: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24 with maximum 2 decimal places"
                    },
                    video: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24 with maximum 2 decimal places"
                    },
                    sports: {
                        required: "Please answer this question",
                        range: "Must be a number between 0 and 24 with maximum 2 decimal places"
                    }
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
			$("#sleepboxmore").show();
			$("#sleepnomore").text(sleepabs+"% more");
			$("#sleepavgnomore").text(avgsleep);
			$("#sleepnomore").addClass("more");
		}
		else{
			$("#sleepboxless").show();
			$("#sleepnoless").text(sleepabs+"% less");
			$("#sleepavgnoless").text(avgsleep);
			$("#sleepnoless").addClass("less");
		}
		console.log("question 1 answer: " + sleepabs);

//code for question 2 on work
		var workfull = (inputwork - avgwork)/avgwork *100,
			work = Math.round(workfull),
			workabs = Math.abs(work);
			if(work>0){
				$("#workboxmore").show();
				$("#worknomore").text(workabs+"% more");
				$("#workavgnomore").text(avgwork);
				$("#workgendermore").text(inputgender);
				$("#workstatusmore").text(inputworkstatus);
				$("#worknomore").addClass("more");
			}
			else{
				$("#workboxless").show();
				$("#worknoless").text(workabs+"% less");
				$("#workavgnoless").text(avgwork);
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
			$("#shopavgnomore").text(avgshop);
			$("#shopgendermore").text(inputgender);
			$("#shopagemore").text(inputage);
			$("#shopnomore").addClass("more");
		}
		else{
			$("#shopboxless").show();
			$("#shopnoless").text(shopabs+"% less");
			$("#shopavgnoless").text(avgshop);
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
		$("#tvavgnomore").text(avgtv);
		$("#tvagemore").text(inputage);
		$("#tvnomore").addClass("more");
		}
	else{
		$("#tvboxless").show();
		$("#tvnoless").text(tvabs+"% less");
		$("#tvavgnoless").text(avgtv);
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
		$("#videoavgnomore").text(avgvideo);
		$("#videoagemore").text(inputage);
		$("#videonomore").addClass("more");
		}
	else{
		$("#videoboxless").show();
		$("#videonoless").text(videoabs+"% less");
		$("#videoavgnoless").text(avgvideo);
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
		$("#sportsavgnomore").text(avgsports);
		$("#sportsagemore").text(inputage);
		$("#sportsnomore").addClass("more");
		}
	else{
		$("#sportsboxless").show();
		$("#sportsnoless").text(sportsabs+"% less");
		$("#sportsavgnoless").text(avgsports);
		$("#sportsageless").text(inputage);
		$("#sportsnoless").addClass("less");
		}
	console.log("question 6 answer: " + sportsabs);

//create a new array based on calculation of input (convert to percentage)

	var dataset = [
		{"name":"Sleep","value": sleep/100, "label": sleep, "tooltip": "Compared with average Americans" + " (" +avgsleep+" hours)"},
		{"name":"Work","value": work/100, "label": work, "tooltip": "Compared with " + inputgender + " Americans with " + inputworkstatus + " employment" + " (" +avgwork+" hours)"},
		{"name":"Shop","value": shop/100, "label": shop, "tooltip": "Compared with " + inputgender + " Americans aged " + inputage + " (" +avgshop+" hours)"},
		{"name":"Watch TV","value": tv/100, "label": tv, "tooltip": "Compared with Americans aged " + inputage + " (" +avgtv+" hours)"},
		{"name":"Computer","value": video/100, "label": video, "tooltip": "Compared with Americans aged " + inputage + " (" +avgvideo+" hours)"},
		{"name":"Workout","value": sports/100, "label": sports, "tooltip": "Compared with Americans aged " + inputage + " (" +avgsports+" hours)"}
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
	{"name":"Sleep","value": sleep2/100, "label": sleep2, "tooltip": "Compared with general Americans" + " (" +dataavg.sleep+" hours)"},
	{"name":"Work","value": work2/100, "label": work2, "tooltip": "Compared with general Americans" + " (" +dataavg.work+" hours)"},
	{"name":"Shop","value": shop2/100, "label": shop2, "tooltip": "Compared with general Americans" + " (" +dataavg.shop+" hours)"},
	{"name":"Watch TV","value": tv2/100, "label": tv2, "tooltip": "Compared with general Americans" + " (" +dataavg.tv+" hours)"},
	{"name":"Computer","value": video2/100, "label": video2, "tooltip": "Compared with general Americans" + " (" +dataavg.video+" hours)"},
	{"name":"Workout","value": sports2/100, "label": sports2, "tooltip": "Compared with general Americans" + " (" +dataavg.sports+" hours)"}];

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

   }


});


});
