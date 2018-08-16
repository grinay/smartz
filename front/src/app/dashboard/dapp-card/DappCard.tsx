import * as React from 'react';

import { IDapp } from '../../../helpers/entities/dapp';
import ContractUi from './contract-ui/ContractUi';
import DappUi from './dapp-ui/DappUi';

import './DappCard.less';


interface IDappCardProps {
    dapp?: IDapp;
    contractUi?: any;
    className?: string;
}

export default class DappCard extends React.PureComponent<IDappCardProps, {}> {
    public render() {
        const { dapp = null, contractUi = null } = this.props;

        if (!dapp && !contractUi) {
            return null;
        }

        let content;
        if (dapp) {
            content = <DappUi dapp={dapp} {...this.props} />;
        }

        if (contractUi) {
            content = <ContractUi contract={contractUi} {...this.props} />;
        }

        return (
            <div className="dapp-card-container">
                {content}
            </div>
        );
    }
}
