const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Fetch the JSON data and console log it\
d3.json(url).then(function(data) {
  console.log(data);
});


// Get the top 10 OTUs for the sample
var otu_ids = data.otu_ids.slice(0, 10).reverse();
var otu_labels = data.otu_labels.slice(0, 10).reverse();
var sample_values = data.sample_values.slice(0, 10).reverse();
  
// Create the trace for the bar chart
var trace1 = {
    x: sample_values,
    y: otu_ids.map(otu_id => `OTU ${otu_id}`),
    text: otu_labels,
    type: "bar",
    orientation: "h"
};
  
    // Create the data array for the plot
var traceData = [trace1];
  
    // Define the plot layout
var layout = {
      title: `Top 10 OTUs for Test Subject ${sample.id}`,
      xaxis: { title: "Sample Values" },
      yaxis: { title: "OTU IDs" }
};
  
    // Create the plot
Plotly.newPlot("bar", traceData, layout);

var dropdownMenu = d3.select("#selDataset");

// Add the sample IDs to the dropdown menu
data.names.forEach(function(name) {
  var option = dropdownMenu.append("option");
  option.text(name);
  option.property("value", name);
});

// Create the trace for the bubble chart
var trace2 = {
    x: sample.otu_ids,
    y: sample.sample_values,
    text: sample.otu_labels,
    mode: "markers",
    marker: {
        size: sample.sample_values,
        color: sample.otu_ids,
        colorscale: "Earth"
    }
};
  
// Create the data array for the plot
    var tracedata2 = [trace2];
  
// Define the plot layout
var layout = {
    title: `OTU Frequency for Test Subject ${sample.id}`,
    xaxis: { title: "OTU IDs" },
};

Plotly.newPlot("bubble", tracedata2, layout);


  

