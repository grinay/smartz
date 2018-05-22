import React, { PureComponent } from 'react';

import NetworkItem from './network-item/NetworkItem';

import './SortBlockchain.less';

export default class SortBlockchain extends PureComponent {
    render() {
        const chains = [
            {
                name: 'Ethereum',
                select: true,
                img: {
                    on: 'ethereum-on.svg',
                    off: 'ethereum-off.svg'
                }
            },
            {
                name: 'EOS (Coming in september)',
                select: false,
                img: {
                    on: 'EOS-on.svg',
                    off: 'EOS-off.svg'
                }
            }
        ];

        return (
            <div className="sort-blockchain">
                <ul className="sort-blockchain-list flex">
                    {chains.map((item, i) =>
                        <li className="sort-blockchain-item" key={i}>
                            <NetworkItem
                                name={item.name}
                                img={item.img}
                                select={item.select} />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
};