import * as dateFormat from 'dateformat';
import * as React from 'react';

import { Blockchain } from '../../helpers/entities/types';
import { getNetworkName } from '../../helpers/eth';
import BlockchainIcon from '../common/blockchain-icon/BlockchainIcon';
import Text from '../ui-kit/text/Text';
import Title from '../ui-kit/title/Title';
import CnContractList from './cn-contract-list/CnContractList';
import CnDappChart from './cn-dapp-chart/CnDappChart';
import CnInfoWidget from './cn-info-widget/CnInfoWidget';

import './CnDappPage.less';


const rrr = {
  id: 2981,
  dappName: 'Decentralized News Network',
  description: 'A fact-checking news platform run by the community',
  fullDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sunt qui saepe tempore perspiciatis, iusto tempora quo perferendis ea quisquam, consequuntur quibusdam veritatis molestias aut quos harum animi quam officiis voluptas doloremque cum quod consectetur at. Veniam iste molestias, consequuntur velit unde reprehenderit, commodi laudantium, cumque optio debitis id! Quis dicta, voluptatum ex exercitationem sunt eaque qui harum itaque tenetur deleniti ipsam nobis, corporis consequatur alias ducimus. Exercitationem voluptates perferendis nam pariatur dolorum itaque dignissimos a, quasi sequi, earum accusamus mollitia. Architecto deleniti sapiente dolor cumque voluptatum minus asperiores nihil? Odio, quo vero cupiditate deserunt cum ipsa facilis fugiat impedit.',
  transCount: 15,
  blockchain: 'ethereum' as Blockchain,
  ethVolume: 889,
  hour24Number: 34,
  weekNumber: 567,
  network: 3,
  developer: 'Wood',
  submitted: new Date().toISOString(),
  updated: new Date().toISOString(),
  license: 'MIT',
  contracts: [
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
    '0x85dd39c91a64167ba20732b228251e67caed1462',
  ],
  chartData: {
    x: [10, 52, 200, 334, 390, 330, 220],
    y: [
      '2018-03-02',
      '2018-03-03',
      '2018-03-04',
      '2018-03-05',
      '2018-03-06',
      '2018-03-07',
      '2018-03-08',
    ],
  },
};

export default class CnDappPage extends React.PureComponent<{}, {}> {
  public render() {
    const formatedChartData = {
      x: rrr.chartData.x,
      y: rrr.chartData.y.map((y) => dateFormat(y, 'ddd d')) as string[],
    };

    return (
      <div className="cn-dapp-page screen">
        <div className="header flex">
          <div className="header-container">
            <div className="img" />
            <div className="info">
              <Title>{rrr.dappName}</Title>
              <Text>{rrr.description}</Text>
            </div>
          </div>
        </div>

        <div className="content flex">
          <div className="content-container flex-h">
            <section className="main">
              <p className="full-description">{rrr.fullDescription}</p>

              <div className="divider" />

              <div className="widget-container">
                <CnInfoWidget className="widget" title="Rank">
                  <Text style={{ fontSize: 35, lineHeight: '35px' }}>{rrr.id}</Text>
                </CnInfoWidget>
                <CnInfoWidget className="widget" title="Platform">
                  <Text style={{ fontSize: 35, lineHeight: '35px' }}>Web</Text>
                </CnInfoWidget>
                <CnInfoWidget className="widget" title="Blockchain">
                  <BlockchainIcon className="widget-blchn" blockchain={rrr.blockchain} />
                </CnInfoWidget>
              </div>

              <CnDappChart chartData={formatedChartData} />
            </section>

            <aside className="aside">
              <div className="aside-info flex">
                <CnInfoWidget className="widget" title="Network">
                  <Text style={{ fontSize: 15, fontFamily: 'Cera Pro 300' }}>
                    {getNetworkName(rrr.network.toString())}
                  </Text>
                </CnInfoWidget>
                <CnInfoWidget className="widget" title="Developer">
                  <Text style={{ fontSize: 15, fontFamily: 'Cera Pro 300' }}>
                    {rrr.developer}
                  </Text>
                </CnInfoWidget>
                <CnInfoWidget className="widget" title="Submitted">
                  <Text style={{ fontSize: 15, fontFamily: 'Cera Pro 300' }}>
                    {dateFormat(rrr.submitted, 'mmm d, yyyy')}
                  </Text>
                </CnInfoWidget>
                <CnInfoWidget className="widget" title="Updated">
                  <Text style={{ fontSize: 15, fontFamily: 'Cera Pro 300' }}>
                    {dateFormat(rrr.updated, 'mmm d, yyyy')}
                  </Text>
                </CnInfoWidget>
                <CnInfoWidget className="widget" title="License">
                  <Text style={{ fontSize: 15, fontFamily: 'Cera Pro 300' }}>
                    {rrr.license}
                  </Text>
                </CnInfoWidget>
              </div>

              <CnContractList contractList={rrr.contracts} />
            </aside>
          </div>
        </div>
      </div>
    );
  }
}
