import * as data from './mock/constructors';

export default function subscribeMockRequests(mockApi) {
    mockApi
        .onAny('/constructors').reply(200, data.constructorListProd)
        .onAny(/\/constructors\/........................\/params/).reply(200, data.ctorAtomicSwap)
        // .onAny(/\/constructors\/........................\/params/).reply(200, data.ctorCustom)
        .onAny(/\/constructors\/........................\/construct/).reply(200, {
            // result: 'error',
            // error_descr: 'Some problem',
            result: 'success',
            errors: {
                check_transfers: 'Cho thie',
                participant2: ['ONe err', 'Two error'],
                participant1: {
                    count: 'Bad count'
                }
            }
        })
        .onAny().passThrough();

}