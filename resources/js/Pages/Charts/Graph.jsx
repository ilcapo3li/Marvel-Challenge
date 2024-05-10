import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import GraphData from '../../DummyData/GraphData.json'

const Page = () => {
  const option = {
    title : {
      x:'center'
    },
    legend : {
        data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
    },
    tooltip : {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series : [
      {
        type: 'graph',
        layout: 'force',
        animation: false,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        draggable: true,
      data: GraphData.nodes.map(function (node, idx) {
        node.id = idx;
        return node;
      }),
      categories: GraphData.categories,
        force: {
          edgeLength: 5,
          repulsion: 20,
          gravity: 0.2
        },
        edges: GraphData.links
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
