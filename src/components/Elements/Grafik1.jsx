import React, { useLayoutEffect } from "react";

import styled from "styled-components";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

//chart type
import * as am5percent from "@amcharts/amcharts5/percent";

function Grafik1(props) {
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

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270
      })
    );

    series.states.create("hidden", {
      endAngle: -90
    });

    //dataset
    let data = [
      {
        category: "Adult",
        value: 37260254
      },
      {
        category: "Senior",
        value: 12710879
      },
      {
        category: "Juvenile",
        value: 10190792
      },
      {
        category: "Young Adult",
        value: 6846985
      },
      {
        category: "Staff",
        value: 774349
      },
      {
        category: "Special",
        value: 303145
      },
      {
        category: "Retired Staff",
        value: 159409
      },
      {
        category: "Teacher Card",
        value: 136360
      },{
        category: "Guest",
        value: 54158
      }
    ];
    console.log(data);

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll(data);

    series.appear(1000, 100);
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
export default Grafik1;
