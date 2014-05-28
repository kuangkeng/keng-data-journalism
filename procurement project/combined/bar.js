google.load("visualization", "1", {packages:["corechart"]});
        google.setOnLoadCallback(init);
        function init(){
              var rowData1 = [['', 'Percentage of total companies', { role: 'style' }],
                    ['Top 100 companies', 2.38, 'F7A8AC'],
                    ['Other companies', 97.62, '3F9AF2']];
    var rowData2 = [['', 'Percentage of total contract value', { role: 'style' }],
                    ['Top 100 companies', 38.17, 'F7A8AC'],
                    ['Other companies', 61.83, '3F9AF2']];

            // Create and populate the data tables.
            var data = [];
            data[0] = google.visualization.arrayToDataTable(rowData1);
            data[1] = google.visualization.arrayToDataTable(rowData2);

            var options = {
              width: 400,
              height: 300,
              fontSize: 14,
              vAxis: {title: "Percentage (%)"},
              seriesType: "bars",
              series: {5: {type: "line"}},
              legend: { position: "none" },
              animation:{
                duration: 2000,
                easing: 'out'
              },
            };

            var current = 0;
            // Create and draw the visualization.
            var chart = new google.visualization.ComboChart(document.getElementById('barchart'));
            var button = document.getElementById('b1');
            function drawChart() {
              // Disabling the button while the chart is drawing.
              button.disabled = true;
              google.visualization.events.addListener(chart, 'ready',
                  function() {
                    button.disabled = false;
                    button.value = 'Switch to ' + (current ? 'Tea' : 'Coffee');
                  });
              options['title'] = 'Percentage of total ' + (current ? 'contract value' : 'companies');

              chart.draw(data[current], options);
            }
            drawChart();

            button.onclick = function() {
              current = 1 - current;
              drawChart();
            }
        }