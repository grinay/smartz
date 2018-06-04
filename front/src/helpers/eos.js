import Eos from 'eosjs';
import axios from 'axios';
import { eosConstants } from '../constants/constants';
import * as binaryen from 'binaryen';
import { wast } from './eos-pos';

// declare global {
//     interface Window { scatter: any; }
// }

const scatter = () => window.scatter ? window.scatter : null;

export const deployContract = (bin) => {
    return new Promise((res, rej) => {
        scatter().requireVersion(5.0);

        const network = {
            port: eosConstants.PORT,
            host: eosConstants.HOST,
            blockchain: eosConstants.BLOCKCHAIN,
        };

        scatter().suggestNetwork(network)
            .then((ok) => {
                scatter().getIdentity()
                    .then(identity => {
                        console.log('indentyt: ', identity);

                        const configEosInstance = {
                            binaryen,
                            chainId: eosConstants.CHAIN_ID,
                            // mockTransactions: () => 'pass',
                        };
                        const eos = scatter().eos(network, Eos, configEosInstance);


                        eos.setcode('gloryreteser', 0, 0, wast)
                            .then((result) => {
                                res(result);
                            })
                            .catch((err) => {
                                rej(err);
                            });
                    })
                    .catch((err) => {
                        rej(err);
                    })
            })
            .catch()
    });
};

// export default class Eos {
//     // public static scatter: any = window.scatter;

//     // public static checkScatterStatus() {
//     //     return Eos.scatter === null ? 'noScatter' : 'okScatter';
//     // }

//     // private static init(): void {
//     //     if (Eos.scatter === null) {
//     //         if (window.scatter) {
//     //             Eos.scatter = window.scatter;
//     //             window.scatter = null;

//     //             Eos.scatter.requireVersion(3.0);
//     //         } else {
//     //             throw Error('Scatter doesn`t init');
//     //         }
//     //     }
//     // }

//     static deployContract(bin) {
//         // Eos.init();

//         return new Promise((res, rej) => {
//             Eos.scatter.getIdentity()
//                 .then(identity => {
//                     console.log('indentyt');
//                     const network = {
//                         port: eosConstants.PORT,
//                         host: eosConstants.HOST,
//                         blockchain: eosConstants.BLOCKCHAIN,
//                     };

//                     const configEosInstance = {
//                         binaryen,
//                         chainId: eosConstants.CHAIN_ID,
//                         mockTransactions: () => 'pass',
//                     };

//                     const eos = Eos.scatter.eos(network, eosInstance.Localnet, configEosInstance);


//                     // Eos.scatter.suggestNetwork(network)
//                     //     .then((ok) => {

//                     //     })
//                     //     .catch()

//                     eos.setcode(identity.name, 0, 0, bin)
//                         .then((result) => {
//                             res(result);
//                         })
//                         .catch((err) => {
//                             rej(err);
//                         });
//                 })
//                 .catch((err) => {
//                     rej(err);
//                 })
//         });

//     }
// };