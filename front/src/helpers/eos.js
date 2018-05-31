const binaryen = require('binaryen');
import { processResult } from './eth';

// declare global {
//     interface Window { scatter: any; }
// }

class Eos {
    // public init: string = 'okInit';

    constructor() {
        console.log('hi, i`m Eos');
        this.init();
    }

    init() {
        document.addEventListener('scatterLoaded', scatterExtension => {
            // Scatter will now be available from the window scope.
            // At this stage the connection to Scatter from the application is 
            // already encrypted. 
            const scatter = window.scatter;
            console.log('scatter here!');
            console.log(scatter);

            // It is good practice to take this off the window once you have 
            // a reference to it.
            window.scatter = null;

            // If you want to require a specific version of Scatter
            scatter.requireVersion(3.0);
            // console.log(scatter);




            scatter.getIdentity()
                .then(ident => {
                    console.log('ident', ident);
                    scatter.suggestNetwork({
                        blockchain: 'eos',
                        host: '79.137.175.6',
                        port: 8888,
                    })
                        .then((processResult) => {
                            console.log('processResult', processResult);
                            const eos = scatter.eos(Eos.Localnet, {});
                            console.log('eos: ', eos);

                            // eos.setcode(name, 0, 0, wast)
                            //     .then((result) => {
                            //         console.log('in promise:', result);
                            //     })
                            //     .catch((err) => {
                            //         console.log('err:', err);
                            //     });

                        })
                        .catch((err) => {
                            console.log('error from suggest: ', err);
                        })
                    // fetch("/eos-poc.wast")
                    //     .then(resp => { return resp.text() })
                    //     .then(wast => {
                    //         eos.setcode('mxpaul', 0, 0, wast)
                    //             .then(console.log)
                    //             .catch(console.error);
                    //     })
                    //     .catch(console.error)
                });

        })
    }
};

export default new Eos();