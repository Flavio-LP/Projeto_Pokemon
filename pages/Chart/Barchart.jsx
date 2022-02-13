import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


export default function ChartSample(props) {

  const Pokemons=props.children
    console.log(Pokemons.name)
      

  const [dataSample, setDataSample] = useState({
    series: [{
        data: []
      }, {
        data: []
      }],
      options: {
        chart: {
          type: 'bar',
          height: 200
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'bottom',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [],
        },
      },
    
  });

   return (
    <div>
      <Chart
        options={dataSample.options}
        series={dataSample.series}
        type="bar"
        width="500"
      />
    </div>
  );
}