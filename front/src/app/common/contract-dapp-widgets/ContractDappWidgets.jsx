// Widgets for contract dapp page

import React from 'react';
import BaseWidget from './widgets/BaseWidget';
import UnixTime from './widgets/UnixTime';
import EthCount from './widgets/EthCount';
import Enum from './widgets/Enum';
import Url from './widgets/Url';

const ContractDappWidgets = {
  baseWidget: (fnDescr, contractDapp) => (
    <BaseWidget fnDescription={fnDescr} contractDapp={contractDapp} />
  ),
  unixTime: (fnDescr, contractDapp) => (
    <UnixTime fnDescription={fnDescr} contractDapp={contractDapp} />
  ),
  ethCount: (fnDescr, contractDapp) => (
    <EthCount fnDescription={fnDescr} contractDapp={contractDapp} />
  ),
  enum: (fnDescr, contractDapp) => <Enum fnDescription={fnDescr} contractDapp={contractDapp} />,
  url: (fnDescr, contractDapp) => <Url fnDescription={fnDescr} contractDapp={contractDapp} />
};

const renderDappWidget = (fnDescr, contractDapp) => {
  let widget;
  if ('ui:widget' in fnDescr && fnDescr['ui:widget'] in ContractDappWidgets) {
    widget = ContractDappWidgets[fnDescr['ui:widget']];
  } else {
    widget = ContractDappWidgets.baseWidget;
  }

  return widget(fnDescr, contractDapp);
};

export default renderDappWidget;
