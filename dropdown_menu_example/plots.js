function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] 
    }];
    Plotly.newPlot("plot", data);
  };
  
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  
  init();






//use foreach to print out all the data elements for the first person in the metadata dataset
/* d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key,value])=>
        {console.log(key + ': ' + value);})
   // console.log(data);
}); */

/* d3.json("samples.json").then(function(data){
    console.log(data);
}); */

//get at sample data for third person in dataset

/* d3.json("samples.json").then(function(data){
    thirdSample = data.samples[2];
    Object.entries(thirdSample).forEach(([key,value])=>
        {console.log(key + ': ' + value);})
   // console.log(data);
}); */

//print out all sample values from samples dataset

/* d3.json("samples.json").then(function(data){
    sampleValues = data.samples.map(person => person.sample_values);
    console.log(sampleValues);
}) */


//print the wfreq for all from metadata
/* d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
}); */