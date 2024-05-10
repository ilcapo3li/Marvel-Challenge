import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import _ from 'lodash';


const Page = () => {

  const DEFAULT_OPTION = {
    title : {
        text: 'Weather Statistics',
        left: 'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: 10,
      left: 'center',
      data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE']
    },
    series : [
      {
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        selectedMode: 'single',
        data: [
                {
                    value: Math.random(),
                    name: 'CityA'
                },
                {
                    value: Math.random(),
                    name: 'CityB'
                },
                {
                    value: Math.random(),
                    name: 'CityC'
                },
                {
                    value: Math.random(),
                    name: 'CityD'
                },
                {
                    value: Math.random(),
                    name: 'CityE'
                },
        ],
      }
    ]
  };

  const [option, setOption] = useState(DEFAULT_OPTION);

  function makeRandomData() {
    const newOption = _.cloneDeep(option); // immutable
    newOption.series[0].data =  [
        {
            value: Math.random(),
            name: 'CityA'
        },
        {
            value: Math.random(),
            name: 'CityB'
        },
        {
            value: Math.random(),
            name: 'CityC'
        },
        {
            value: Math.random(),
            name: 'CityD'
        },
        {
            value: Math.random(),
            name: 'CityE'
        }
    ];
    setOption(newOption);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      makeRandomData();
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <>
      <ReactECharts
        option={option}
        style={{ height: 500 }}
      />
    </>
  );
};

export default Page;
