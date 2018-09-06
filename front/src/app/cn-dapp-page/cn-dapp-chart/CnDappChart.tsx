import ReactEcharts from 'echarts-for-react';
import * as React from 'react';

import './CnDappChart.less';


export default class CnDappChart extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="cn-dapp-chart" >
        <ReactEcharts option={{
          xAxis: {
            data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
          },
          yAxis: {},
          series: [{
            name: 'Sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          }],
        }} />
      </div>
    );
  }
}
