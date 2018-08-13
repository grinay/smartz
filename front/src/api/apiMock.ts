import * as constructors from './mock/constructors';
import * as dapp from './mock/currentDapp';
import * as dapps from './mock/dapps';


export default function subscribeMockRequests(mockApi) {
  mockApi
    .onAny('/constructors').reply(200, constructors.constructorList)
    // .onAny('/dapps').reply(200, dapps.dappList)
    .onGet(/\/dapps\/.{24}\/requests/).reply(dapp.getRequests)
    .onPost(/\/dapps\/.{24}\/requests/).reply(dapp.getRequests)
    .onAny(/\/dapps\/.{24}/).reply(200, dapp.currentDapp)
    .onAny('/dapps/add-to-dashbord').reply(dapp.addToDashboard)

    // .onAny('/dapps')
    // .reply(200, dapps.dappList)
    // go to deploy step 1 (request form)
    // .onAny(/\/constructors\/.{24}\/params/).reply(200, constructors.ctorAtomicSwap)
    // go to deploy step 2 (request code)
    // .onAny(/\/constructors\/.{24}\/construct/)
    // .replyOnce(500)

    // .onAny(/\/constructors\/.{24}\/construct/)
    // .replyOnce(200, dapps.dappCode)

    .onAny()
    .passThrough();
}
