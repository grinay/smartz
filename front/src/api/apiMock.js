import * as constructors from './mock/constructors';
import * as instances from './mock/instances';

export default function subscribeMockRequests(mockApi) {
    mockApi
        .onAny('/constructors').reply(200, constructors.constructorListProd)
        .onAny('/instances').reply(200, instances.instanceList)
        .onAny(/\/constructors\/.{24}\/params/).reply(200, constructors.ctorAtomicSwap)
        // .onAny(/\/constructors\/.{24}\/params/).reply(200, constructors.ctorCustom)
        .onAny(/\/constructors\/.{24}\/construct/).reply(200, instances.instanceCode)
        .onAny().passThrough();

}