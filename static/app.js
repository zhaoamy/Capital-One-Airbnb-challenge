



/*createGraph2();
createGraph3();
*/
 
function createGraph1() {
  FusionCharts.ready(function(){
    var chart1 = new FusionCharts({
      "type": "column2d",
      "renderAt": "chartContainer",
      "width": "1000",
      "height": "600",
      "dataFormat": "json",
      "dataSource": {
        "chart": {
            "caption": "Popularity of Neighborhood Listings",
            "xAxisName": "Neighborhoods",
            "yAxisName": "Number of Listings",
            "theme": "fint"
         },
        "data":[{"label":"Bayview","value":118},{"label":"Bernal Heights","value":451},{"label":"Castro\/Upper Market","value":480},{"label":"Chinatown","value":152},{"label":"Crocker Amazon","value":28},{"label":"Diamond Heights","value":22},{"label":"Downtown\/Civic Center","value":564},{"label":"Excelsior","value":153},{"label":"Financial District","value":140},{"label":"Glen Park","value":82},{"label":"Golden Gate Park","value":8},{"label":"Haight Ashbury","value":414},{"label":"Inner Richmond","value":287},{"label":"Inner Sunset","value":170},{"label":"Lakeshore","value":52},{"label":"Marina","value":306},{"label":"Mission","value":1036},{"label":"Nob Hill","value":322},{"label":"Noe Valley","value":390},{"label":"North Beach","value":180},{"label":"Ocean View","value":111},{"label":"Outer Mission","value":164},{"label":"Outer Richmond","value":195},{"label":"Outer Sunset","value":254},{"label":"Pacific Heights","value":243},{"label":"Parkside","value":121},{"label":"Potrero Hill","value":286},{"label":"Presidio","value":6},{"label":"Presidio Heights","value":39},{"label":"Russian Hill","value":224},{"label":"Seacliff","value":24},{"label":"South of Market","value":618},{"label":"Treasure Island\/YBI","value":25},{"label":"Twin Peaks","value":101},{"label":"Visitacion Valley","value":38},{"label":"West of Twin Peaks","value":123},{"label":"Western Addition","value":779}]

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
        width: '1416',
        height: '600',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Number of Amenities Offered",
                "subCaption": "Last year",
                "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                "bgColor": "#ffffff",
                "chartLeftMargin": "900",
                "chartTopMargin": "100",
                "showBorder": "0",
                "use3DLighting": "0",
                "showShadow": "0",
                "enableSmartLabels": "0",
                "startingAngle": "0",
                "showPercentValues": "1",
                "showPercentInTooltip": "0",
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
    width: '1000',
    height: '1000',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Number of Amenities vs Number of Reviews",
            "subCaption": "Last month",
            "yAxisName": "Number of Reviews",
            "xAxisName": "Number of Amenities",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "showBorder": "0",
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
            "toolTipPadding": "5"
        },
        "data": [{"label":"1","value":2038.0},{"label":"2","value":468.0},{"label":"3","value":557.0},{"label":"4","value":1438.0},{"label":"5","value":1226.0},{"label":"6","value":2047.0},{"label":"7","value":3176.0},{"label":"8","value":4556.0},{"label":"9","value":6894.0},{"label":"10","value":8594.0},{"label":"11","value":9504.0},{"label":"12","value":12131.0},{"label":"13","value":13918.0},{"label":"14","value":14131.0},{"label":"15","value":15435.0},{"label":"16","value":16330.0},{"label":"17","value":17360.0},{"label":"18","value":14526.0},{"label":"19","value":14943.0},{"label":"20","value":13671.0},{"label":"21","value":12764.0},{"label":"22","value":11093.0},{"label":"23","value":6573.0},{"label":"24","value":5595.0},{"label":"25","value":3189.0},{"label":"26","value":1757.0},{"label":"27","value":1031.0},{"label":"28","value":729.0},{"label":"29","value":255.0},{"label":"30","value":258.0},{"label":"31","value":129.0},{"label":"32","value":6.0},{"label":"33","value":0.0},{"label":"34","value":6.0},{"label":"35","value":27.0},{"label":"42","value":14.0}]

              }
          });

          chart3.render();
          })

}


FusionCharts['debugger'].outputTo(function (message) {
    console.log(message);
});
FusionCharts['debugger'].enable(true);
