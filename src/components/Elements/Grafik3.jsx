import React, { useLayoutEffect } from "react";

import styled from "styled-components";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
      renderTo: 'container2',
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    xAxis: {
      categories: ['Main Library', 'Chinathown', 'Richmond', 'Ortega', 'Sunset', 'Mission', 'West Portal', 'Excelsior', 'Parkside', 'Portola'],
      title: {
          text: 'Rentang Umur'
      }
    },
    yAxis: {
      min: 0,
      title: {
          text: 'Total Checkout',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
    tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: 'Jumlah buku: {point.y}'
    },
    title: {
      text: 'Banyak Jumlah buku yang dipinjam berdasarkan lokasi'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      data: [13644899, 5745218, 4894128, 4015150, 3392047, 3280190, 2939750, 2676300, 2102529, 2038223],
      colorByPoint: true
    }]
};

function Grafik3(props) {
  //const chart = useRef(null);
  const chartID = props.chartID;
  const data_modal = props.data_modal;

  console.log({ chartID, data_modal });

  useLayoutEffect(() => {
    //var root = am5.Root.new("chartdiv2");
    var root = am5.Root.new(chartID);


    
      
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
              <div id={chartID}>
                <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
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
export default Grafik3;
