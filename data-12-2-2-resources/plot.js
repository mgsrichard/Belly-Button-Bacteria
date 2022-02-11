console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) => a.greekSearchResults - b.g).reverse(); 

console.log(sortedCities)

var topFiveCities = sortedCities.slice(0,5)
console.log(topFiveCities)

var cityNames = topFiveCities.map(city => city.City);
console.log(cityNames);

var cityPopGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(cityPopGrowths);

var topSevenCities = sortedCities.slice(0,7)
var topSevenNames = topSevenCities.map(city=>city.City);
var topSevenPopGrowths = topSevenCities.map(city=>parseInt(city.Increase_from_2016))
var trace = {
    x: topSevenNames,
    y: topSevenPopGrowths,
    type: "bar"
};

var layout = {
    title: "Top 7 Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth Since 2016"}
}

Plotly.newPlot("bar-plot",[trace],layout);

