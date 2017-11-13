
/*createGraph2();
createGraph3();
*/


//load up the first graph
createGraph1();

//function to read in the text file
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//calls the average income function and ideal price function when optimized is
//clicked
function buttonClick() {
  calculateAverageIncome();
  findIdealPrice();
}

//calculates average income
function calculateAverageIncome() {
    /*get latitude and longitude*/
    var data;
    var user_long;
    var user_lat;

    //parse the data
    readTextFile("airbnb-public-sep-2017/airbnb-sep-2017/average.json", function(text){
        data = JSON.parse(text);

    });

    //get user input
    var user_long = parseFloat(document.getElementById("longitude").value);
    var user_lat = parseFloat(document.getElementById("latitude").value);

    //make sure that user input is within the range
    if ( (user_long > -122.36475849999999) ||
        (user_long < -122.5115) || (user_lat < 37.706927690000001) ||
         (user_lat > 37.83109279) ) {
          window.alert("Invalid Coordinates! Must be in San Francisco.");
          document.getElementById("average").innerHTML = "";

    }
    else {

        var i, sum = 0, num_sum = 0, average=0, latitude = [], longitude = [], prices = [];


        //converts the strings in the json to floats
        for (i = 0; i < 8706; i++) {
            latitude.push(parseFloat(data['latitude'][i]));
            longitude.push(parseFloat(data['longitude'][i]));
            prices.push(parseFloat(data['price'][i]));
        }

        //find all the coordinates that are .01 away and add up their prices
        for (i = 0; i < 8706; i++) {
          if ((latitude[i] >= (user_lat - .01)) && (latitude[i] <= (user_lat + .01))
              && (longitude[i] >= (user_long - .01)) && (longitude[i] <= (user_long + .01))) {
                sum =  sum + prices[i];
                num_sum++;
          }
        }

        //Some coordinates do not have enough listings by them to give an
        //accurate read
        if (sum == 0) {
          window.alert("Not enough data");
        }
        else {
          //computer the average
          average = (sum/num_sum)*7;

          document.getElementById("average").innerHTML = "You will earn an average of: $" + (Math.round(average * 100) / 100) + " per week.";

        }
    }
}

//finds the ideal price
function findIdealPrice() {

    var data;

    //read in the text file
    readTextFile("airbnb-public-sep-2017/airbnb-sep-2017/optimal.json", function(text){
        data = JSON.parse(text);

    });

    //get user longitude and latitude
    var user_long = parseFloat(document.getElementById("longitude").value);
    var user_lat = parseFloat(document.getElementById("latitude").value);

    //make sure it is in the range
    if ( (user_long > -122.36475849999999) ||
        (user_long < -122.5115) || (user_lat < 37.706927690000001) ||
         (user_lat > 37.83109279) ) {
          document.getElementById("content").innerHTML = "";

    }
    else {
          var i, sum = 0, num_sum = 0, average=0, latitude = [], longitude = [], prices = [],
              num_reviews= [], ratings = [];
          var score;
          var top_score = [0,0,0];
          var top_price = [0,0,0];


          //convert data to floats
          for (i = 0; i < 8706; i++) {
              latitude.push(parseFloat(data['latitude'][i]));
              longitude.push(parseFloat(data['longitude'][i]));
              prices.push(parseFloat(data['price'][i]));
              num_reviews.push(parseInt(data['num_reviews'][i]));
              //get rid of the NaN values in the data
              if (num_reviews[i] == 0) {
                ratings.push(0);
              }
              else {
                ratings.push(parseInt(data['review_score'][i]));
            }
          }
          //find the listings near the coordinates
          for (i = 0; i < 8706; i++) {
            if ((latitude[i] >= (user_lat - .01)) && (latitude[i] <= (user_lat + .01))
                && (longitude[i] >= (user_long - .01)) && (longitude[i] <= (user_long + .01))) {
                  if(num_reviews[i] != 0) {
                      //multiple the number of reviews times the rating score
                      score = num_reviews[i] * ratings[i];

                      //find the top scores
                      if (score > top_score[0] && score < top_score[1] && score< top_score[2]) {
                          top_score[0] = score;
                          top_price[0] = prices[i];
                      }
                      else if(score > top_score[0] && score > top_score[1] && score < top_score[2]) {
                          top_score[1] = score;
                          top_price[1] = prices[i];
                      }
                      else if(score > top_score[0] && score > top_score[1] && score > top_score[2]) {
                        top_score[2] = score;
                          top_price[2] = prices[i];
                      }

                  }
            }
    }

}
  //average the top 3 scores's prices
  var optimal = (top_price[0] + top_price[1] + top_price[2]) / 3;
  document.getElementById("content").innerHTML = "The optimal price per night based on location is: $" + (Math.round(optimal * 100) / 100);

}

function createGraph1() {
  FusionCharts.ready(function(){
    var chart1 = new FusionCharts({
      "type": "column2d",
      "renderAt": "chartContainer",
      "width": "1400",
      "height": "500",
      "dataFormat": "json",
      "dataSource": {
        "chart": {
            "caption": "Popularity of Neighborhood Listings",
            "xAxisName": "Neighborhoods",
            "yAxisName": "Number of Listings",
            "chartLeftMargin": "80",
            "xAxisNameBorderPadding": "100",
            "xAxisNameFontSize": "15",
            "yAxisNameFontSize": "15",
            "baseFontSize" : "13",
            "labelFontBold" : "1",
            "theme": "fint",
            "labelDisplay": "rotate",
            "slantLabels": "1"
         },
        "data":
        [{"label":"Bayview","value":118},{"label":"Bernal Heights","value":451},{"label":"Castro\/Upper Market","value":480},{"label":"Chinatown","value":152},{"label":"Crocker Amazon","value":28},{"label":"Diamond Heights","value":22},{"label":"Downtown\/Civic Center","value":564},{"label":"Excelsior","value":153},{"label":"Financial District","value":140},{"label":"Glen Park","value":82},{"label":"Golden Gate Park","value":8},{"label":"Haight Ashbury","value":414},{"label":"Inner Richmond","value":287},{"label":"Inner Sunset","value":170},{"label":"Lakeshore","value":52},{"label":"Marina","value":306},{"label":"Mission","value":1036},{"label":"Nob Hill","value":322},{"label":"Noe Valley","value":390},{"label":"North Beach","value":180},{"label":"Ocean View","value":111},{"label":"Outer Mission","value":164},{"label":"Outer Richmond","value":195},{"label":"Outer Sunset","value":254},{"label":"Pacific Heights","value":243},{"label":"Parkside","value":121},{"label":"Potrero Hill","value":286},{"label":"Presidio","value":6},{"label":"Presidio Heights","value":39},{"label":"Russian Hill","value":224},{"label":"Seacliff","value":24},{"label":"South of Market","value":618},{"label":"Treasure Island\/YBI","value":25},{"label":"Twin Peaks","value":101},{"label":"Visitacion Valley","value":38},{"label":"West of Twin Peaks","value":123},{"label":"Western Addition","value":779}]
}
  });

  chart1.render();
  })
}

function createGraph2() {
  FusionCharts.ready(function () {
    var pieChart = new FusionCharts({
        type: 'pie2d',
        renderAt: 'chartContainer',
        "width": "1400",
        "height": "500",
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Number of Amenities Offered",
                "subCaption": "Percentage of Listings with x Amenities",
                "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                "chartLeftMargin": "80",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "use3DLighting": "0",
                "showShadow": "0",
                "enableSmartLabels": "0",
                "startingAngle": "0",
                "showPercentValues": "1",
                "showPercentInTooltip": "0",
                "xAxisNameFontSize": "15",
                "yAxisNameFontSize": "15",
                "decimals": "1",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "toolTipColor": "#ffffff",
                "toolTipBorderThickness": "0",
                "toolTipBgColor": "#000000",
                "toolTipBgAlpha": "80",
                "toolTipBorderRadius": "2",
                "toolTipPadding": "5",
                "showHoverEffect":"1",
                "showLegend": "1",
                "legendBgColor": "#ffffff",
                "legendBorderAlpha": '0',
                "legendShadow": '0',
                "legendItemFontSize": '10',
                "legendItemFontColor": '#666666'
            },
            "data": [
                    {
                      "label":"1 to 7",
                      "value": "525"
                     },
                      {"label":"8 to 14",
                        "value":"2803"},
                      {"label":"15 to 21",
                        "value": "4211"},
                      {"label":"22 to 28",
                        "value":"1115"},
                      {"label":"29 to 35",
                        "value":"51"}]
        }
    }).render();

});
}

function createGraph3() {
  FusionCharts.ready(function(){
    var chart3 = new FusionCharts({
    type: 'bar2d',
    renderAt: 'chartContainer',
    "width": "1400",
    "height": "500",
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Number of Amenities vs Number of Reviews",
            "yAxisName": "Number of Reviews",
            "xAxisName": "Number of Amenities",
            "chartLeftMargin": "80",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "showBorder": "0",
            "xAxisNameFontSize": "15",
            "yAxisNameFontSize": "15",
            "showCanvasBorder": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placeValuesInside": "1",
            "valueFontColor": "#ffffff",
            "showAxisLines": "1",
            "axisLineAlpha": "25",
            "divLineAlpha": "10",
            "alignCaptionWithCanvas": "0",
            "showAlternateVGridColor": "0",
            "captionFontSize": "14",
            "subcaptionFontSize": "14",
            "subcaptionFontBold": "0",
            "toolTipColor": "#ffffff",
            "toolTipBorderThickness": "0",
            "toolTipBgColor": "#000000",
            "toolTipBgAlpha": "80",
            "toolTipBorderRadius": "2",
            "toolTipPadding": "5",
            "valuePadding": "10"
        },
        "data": [{"label":"1","value":2038.0, "color": "#1aaf5d"},{"label":"2","value":468.0, "color": "#1aaf5d"},{"label":"3","value":557.0, "color": "#1aaf5d"},{"label":"4","value":1438.0, "color": "#1aaf5d"},{"label":"5","value":1226.0, "color": "#1aaf5d"},{"label":"6","value":2047.0, "color": "#1aaf5d"},{"label":"7","value":3176.0, "color": "#1aaf5d"},{"label":"8","value":4556.0, "color": "#1aaf5d"},{"label":"9","value":6894.0, "color": "#1aaf5d"},{"label":"10","value":8594.0, "color": "#1aaf5d"},{"label":"11","value":9504.0, "color": "#1aaf5d"},{"label":"12","value":12131.0, "color": "#1aaf5d"},{"label":"13","value":13918.0, "color": "#1aaf5d"},{"label":"14","value":14131.0, "color": "#1aaf5d"},{"label":"15","value":15435.0, "color": "#1aaf5d"},{"label":"16","value":16330.0, "color": "#1aaf5d"},{"label":"17","value":17360.0, "color": "#1aaf5d"},{"label":"18","value":14526.0, "color": "#1aaf5d"},{"label":"19","value":14943.0, "color": "#1aaf5d"},{"label":"20","value":13671.0, "color": "#1aaf5d"},{"label":"21","value":12764.0, "color": "#1aaf5d"},{"label":"22","value":11093.0, "color": "#1aaf5d"},{"label":"23","value":6573.0, "color": "#1aaf5d"},{"label":"24","value":5595.0, "color": "#1aaf5d"},{"label":"25","value":3189.0, "color": "#1aaf5d"},{"label":"26","value":1757.0, "color": "#1aaf5d"},{"label":"27","value":1031.0, "color": "#1aaf5d"},{"label":"28","value":729.0, "color": "#1aaf5d"},{"label":"29","value":255.0, "color": "#1aaf5d"},{"label":"30","value":258.0, "color": "#1aaf5d"},{"label":"31","value":129.0, "color": "#1aaf5d"},{"label":"32","value":6.0, "color": "#1aaf5d"},{"label":"33","value":0.0, "color": "#1aaf5d"},{"label":"34","value":6.0, "color": "#1aaf5d"},{"label":"35","value":27.0, "color": "#1aaf5d"},{"label":"42","value":14.0, "color": "#1aaf5d"}]

              }
          });

          chart3.render();
          })

}


FusionCharts['debugger'].outputTo(function (message) {
    console.log(message);
});
FusionCharts['debugger'].enable(true);
