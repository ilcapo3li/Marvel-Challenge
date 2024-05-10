import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import FlareData from '../../DummyData/FlareTree.json'

const Page = () => {
  const option = {
    title : {
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series : [
      {
      name: 'tree',
      type: 'tree',
      top : '18%',
      bottom: '10%',
      layout: 'radial',
        symbol: 'emptyCircle',
        symbolSize: 7,
        initialTreeDepth: 3,
        animationDurationUpdate: 750,
        emphasis: {
            focus: 'descendant'
        },
      data:[FlareData],
      itemStyle: {
        emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
      }
    ]
  };

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
