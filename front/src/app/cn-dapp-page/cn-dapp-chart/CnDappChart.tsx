import ReactEcharts from 'echarts-for-react';
import * as React from 'react';

import './CnDappChart.less';


interface ICnDappChartProps {
  chartData: {
    x: number[];
    y: string[];
  };
}

interface ICnDappChartState { }

export default class CnDappChart extends React.PureComponent
  <ICnDappChartProps, ICnDappChartState> {
  public render() {
    const { chartData } = this.props;

    const option = {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: [
        {
          type: 'category',
          data: chartData.y,
          axisTick: {
            alignWithLabel: false,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          type: 'bar',
          barWidth: '80%',
          data: chartData.x,
        },
      ],
    };

    return (
      <div className="cn-dapp-chart" >
        <ReactEcharts option={option} />
      </div>
    );
  }
}
