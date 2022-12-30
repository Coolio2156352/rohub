import React, { useLayoutEffect } from "react";

import styled from "styled-components";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as d3 from "d3";

//chart type
import * as am5xy from "@amcharts/amcharts5/xy";

function Grafik2(props) {
  //const chart = useRef(null);
  const chartID = props.chartID;
  const data_modal = props.data_modal;

  console.log({ chartID, data_modal });

  useLayoutEffect(() => {
    //var root = am5.Root.new("chartdiv2");
    var root = am5.Root.new(chartID);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create XY chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",        
        layout: root.verticalLayout,
        maxTooltipDistance: 0
      })
    );

    
    // Define data
    var data = [{
      date: new Date(2007, 0, 10).getTime(),
      value: 23795,
    },{
      date: new Date(2008, 0, 9).getTime(),
      value: 40294
    },{
      date: new Date(2009, 0, 8).getTime(),
      value: 73091
    },{
      date: new Date(2010, 0, 7).getTime(),
      value: 146861
    },{
      date: new Date(2011, 0, 6).getTime(),
      value: 191236
    }, {
      date: new Date(2012, 0, 5).getTime(),
      value: 532500
    },{
      date: new Date(2013, 0, 4).getTime(),
      value: 3471592
    },{
      date: new Date(2014, 0, 3).getTime(),
      value: 6259262
    },{
      date: new Date(2015, 0, 2).getTime(),
      value: 9208948
    },{
      date: new Date(2016, 0, 1).getTime(),
      value: 48614453
    },   ];
      console.log(data);


    // Create Y-axis
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        extraTooltipPrecision: 1,
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "year", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 20
        }),
      })
    );

    // Create series
    function createSeries(name, field) {
      var series = chart.series.push( 
        am5xy.SmoothedXLineSeries.new(root, { 
          name: name,
          xAxis: xAxis, 
          yAxis: yAxis, 
          valueYField: field, 
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {})
        }) 
      );
      
      series.fills.template.setAll({
        visible: true,
        fillOpacity: 0.2,
      });
      
      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Circle.new(root, {
            radius: 6,
            stroke: root.interfaceColors.get("background"),
            strokeWidth: 6,
            fill: series.get("fill")
          })
        });
      });
      
      series.strokes.template.setAll({
        strokeWidth:6,shadowColor: am5.color(0x000000),
        shadowBlur: 10,
        shadowOffsetX: 2,
        shadowOffsetY: 2
        
        });
      series.set("fill", am5.color("#7620ff"));
      series.get("tooltip").label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}")
      series.data.setAll(data);  

      series.appear(1000, 100);
    }

    createSeries("Series #1", "value");

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "zoomXY",
      xAxis: xAxis
    }));

    xAxis.set("tooltip", am5.Tooltip.new(root, {
      themeTags: ["axis"]
    }));

    yAxis.set("tooltip", am5.Tooltip.new(root, {
      themeTags: ["axis"]
    }));
      }, [chartID]);

  return (
    <div id={data_modal} style={{tabindex}} class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-7xl md:h-auto">
        <div class="relative bg-white rounded-lg shadow">
            <div class="flex items-center justify-between p-5 border-b rounded-t">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle={data_modal}>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path style={{svg_attr}}  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-6 space-y-6">              
            <div className="flex-container">
              <div id={chartID}></div>
              </div>
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                <button data-modal-toggle={data_modal} type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Tutup</button>
            </div>
        </div>
    </div>
    </div>
  );
}
const svg_attr = styled.svg`
clip-rule: evenodd;
fill-rule: evenodd;
`;


const tabindex = styled.div`
tabindex:-1;

`;
export default Grafik2;
