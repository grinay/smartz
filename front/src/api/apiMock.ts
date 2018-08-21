import * as constructors from './mock/constructors';
import { addToDashboard, currentDapp, getRequests } from './mock/currentDapp';
import { dappList } from './mock/dapps';
import { search, searchAbi, searchContractUi, searchAbiNoType, searchNoAbi } from './mock/search';


export default function subscribeMockRequests(mockApi) {
  mockApi
    .onAny('/constructors').reply(200, constructors.constructorList)
    // .onAny('/dapps').reply(200, dapps.dappList)
    .onGet(/\/dapps\/.{24}\/requests/).reply(getRequests)
    .onPost(/\/dapps\/.{24}\/requests/).reply(getRequests)
    .onAny(/\/dapps\/.{24}/).reply(200, currentDapp)
    // .onAny('/dapps').reply(200, dappList)
    .onAny('/dapps/add-to-dashbord').reply(addToDashboard)
    .onAny('/search').reply(searchNoAbi)
    // .onAny('/search').reply(200, search)

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
