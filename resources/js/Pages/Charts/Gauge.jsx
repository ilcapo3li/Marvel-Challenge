import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import _ from 'lodash';


const Page = () => {
  const gaugeData = [
    {
        value: 20,
        name: 'Perfect',
        title: {
        offsetCenter: ['0%', '-30%']
        },
        detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '-20%']
        }
    },
    {
        value: 40,
        name: 'Good',
        title: {
        offsetCenter: ['0%', '0%']
        },
        detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '10%']
        }
    },
    {
        value: 60,
        name: 'Commonly',
        title: {
        offsetCenter: ['0%', '30%']
        },
        detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '40%']
        }
    }
  ];
  const DEFAULT_OPTION = {
    title : {
        text: 'Project Completion',
        left: 'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    series : [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
            show: false
        },
        progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
            borderWidth: 1,
            borderColor: '#464646'
            }
        },
        axisLine: {
            lineStyle: {
            width: 40
            }
        },
        splitLine: {
            show: false,
            distance: 0,
            length: 10
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            distance: 50
        },
        data: gaugeData,
        title: {
            fontSize: 14
        },
        detail: {
            width: 50,
            height: 14,
            fontSize: 14,
            color: 'inherit',
            borderColor: 'inherit',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%'
        }
      }
    ]
  };

  const [option, setOption] = useState(DEFAULT_OPTION);

  function makeRandomData() {
    const newOption = _.cloneDeep(option); // immutable
    gaugeData[0].value = +(Math.random() * 100).toFixed(2);
    gaugeData[1].value = +(Math.random() * 100).toFixed(2);
    gaugeData[2].value = +(Math.random() * 100).toFixed(2);
    newOption.series[0].data = gaugeData;
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
