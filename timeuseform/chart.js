$(document).ready(function(){

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
                },
//display error messages style if input cannot be validated
        errorPlacement: function(label, element) {
        label.insertAfter(element);
    },
    wrapper: 'span',        	

submitHandler: function(form) {

//setting the input variables
		var inputsleep = $('#inputsleep').val(),
			inputwork = $('#inputwork').val();

//code for question 1 on sleep

		if(inputsleep>8){
			$("#sleepbox").text("You sleep too much!");
			$("#sleepbox").addClass("more");
		}
		else{
			$("#sleepbox").text("You sleep too little!");
			$("#sleepbox").addClass("less");
		}

//code for question 2 on work
			if(inputwork>6){
				$("#workbox").text("You work too much!");
				$("#workbox").addClass("more");
			}
			else{
				$("#workbox").text("You work too little!");
				$("#workbox").addClass("less");
			}
	
//code for google bar chart starts here
google.load("visualization", "1", {packages:["corechart"]});
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

        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data1, options);
        }
		
	}	
    
});

});


