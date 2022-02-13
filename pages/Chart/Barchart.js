import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Home,{pokemons,pokemon} from '../index'

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ChartSample() {
  console.log({pokemons});

  const [dataSample, setDataSample] = useState({
    series: [{
        data: []
      }, {
        data: []
      }],
      options: {
        chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
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
          categories: ['Pikachu'],
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