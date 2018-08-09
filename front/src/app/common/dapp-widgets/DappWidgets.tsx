// Widgets for dapp page
import * as React from 'react';

import BaseWidget from './widgets/BaseWidget';
import Enum from './widgets/Enum';
import EthCount from './widgets/EthCount';
import UnixTime from './widgets/UnixTime';
import Url from './widgets/Url';


const dappWidgets = {
  baseWidget: (fnDescr, dapp) => <BaseWidget fnDescription={fnDescr} dapp={dapp} />,
  unixTime: (fnDescr, dapp) => <UnixTime fnDescription={fnDescr} dapp={dapp} />,
  ethCount: (fnDescr, dapp) => <EthCount fnDescription={fnDescr} dapp={dapp} />,
  enum: (fnDescr, dapp) => <Enum fnDescription={fnDescr} dapp={dapp} />,
  url: (fnDescr, dapp) => <Url fnDescription={fnDescr} dapp={dapp} />,
};

const renderDappWidget = (fnDescr, dapp) => {
  let widget;
  if ('ui:widget' in fnDescr && fnDescr['ui:widget'] in dappWidgets) {
    widget = dappWidgets[fnDescr['ui:widget']];
  } else {
    widget = dappWidgets.baseWidget;
  }

  return widget(fnDescr, dapp);
};

export default renderDappWidget;
