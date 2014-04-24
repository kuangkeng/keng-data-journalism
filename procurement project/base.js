console.log("hello, keng!");

d3.tsv("data.tsv", function(err, companyData	) {

	if (err) throw "problem loading data";

	console.log("data", companyData);

	rows = d3.select(".project-table").append("table").selectAll(".row")
			.data(companyData)
			.enter()
			.append("tr")
			.attr("class", "table-row");

	rows.append("td")
			.attr("class", "cell company-name")
			.text(function(d) { return d.company; });

	rows.append("td")
			.attr("class", "cell company-name")
			.text(function(d) { return d.value; });

	rows.append("td")
			.attr("class", "cell company-name")
			.text(function(d) { return d.value_percent; });

	rows.append("td")
			.attr("class", "cell company-name")
			.text(function(d) { return d.contract; });
	
	d3.select(".g-blamo").on("click", function(d) {
		console.log("blamo");
	})	


});

