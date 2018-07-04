// Widgets for dapp page

import React from 'react';
import BaseWidget from './widgets/BaseWidget';
import UnixTime from './widgets/UnixTime';
import EthCount from './widgets/EthCount';
import Enum from './widgets/Enum';
import Url from './widgets/Url';

const dappWidgets = {
  baseWidget: (fnDescr, dapp) => <BaseWidget fnDescription={fnDescr} dapp={dapp} />,
  unixTime: (fnDescr, dapp) => <UnixTime fnDescription={fnDescr} dapp={dapp} />,
  ethCount: (fnDescr, dapp) => <EthCount fnDescription={fnDescr} dapp={dapp} />,
  enum: (fnDescr, dapp) => <Enum fnDescription={fnDescr} dapp={dapp} />,
  url: (fnDescr, dapp) => <Url fnDescription={fnDescr} dapp={dapp} />
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
