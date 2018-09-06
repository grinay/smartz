import * as React from 'react';

import { formatBlockchainToString } from '../../helpers/blockchain';
import { Blockchain } from '../../helpers/entities/types';
import Text from '../ui-kit/text/Text';
import Title from '../ui-kit/title/Title';
import CnDappChart from './cn-dapp-chart/CnDappChart';
import CnInfoWidget from './cn-info-widget/CnInfoWidget';

import './CnDappPage.less';


const rrr = {
  id: 1,
  dappName: 'Decentralized News Network',
  description: 'A fact-checking news platform run by the community',
  fullDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sunt qui saepe tempore perspiciatis, iusto tempora quo perferendis ea quisquam, consequuntur quibusdam veritatis molestias aut quos harum animi quam officiis voluptas doloremque cum quod consectetur at. Veniam iste molestias, consequuntur velit unde reprehenderit, commodi laudantium, cumque optio debitis id! Quis dicta, voluptatum ex exercitationem sunt eaque qui harum itaque tenetur deleniti ipsam nobis, corporis consequatur alias ducimus. Exercitationem voluptates perferendis nam pariatur dolorum itaque dignissimos a, quasi sequi, earum accusamus mollitia. Architecto deleniti sapiente dolor cumque voluptatum minus asperiores nihil? Odio, quo vero cupiditate deserunt cum ipsa facilis fugiat impedit.',
  transCount: 15,
  blockchain: 'ethereum',
  ethVolume: 889,
  hour24Number: 34,
  weekNumber: 567,
};


export default class CnDappPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className="cn-dapp-page">
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
          <div className="content-container">
            <p className="full-description">{rrr.fullDescription}</p>

            <div className="divider" />

            <div className="widget-container">
              <CnInfoWidget className="widget" title="Rank">
                {rrr.id}
              </CnInfoWidget>
              <CnInfoWidget className="widget" title="Blockchain">
                {formatBlockchainToString(rrr.blockchain as Blockchain)}
              </CnInfoWidget>
            </div>

            <CnDappChart />

          </div>
        </div>
      </div>
    );
  }
}
