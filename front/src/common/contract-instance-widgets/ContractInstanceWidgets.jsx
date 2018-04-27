// Widgets for contract instance page

import React from "react";
import BaseWidget from "./widgets/BaseWidget";
import UnixTime from "./widgets/UnixTime";
import EthCount from "./widgets/EthCount";
import Enum from "./widgets/Enum";
import Url from "./widgets/Url";

const ContractInstanceWidgets = {
  baseWidget: (fnDescr, contractInstance) => <BaseWidget fnDescription={fnDescr} contractInstance={contractInstance} />,
  unixTime: (fnDescr, contractInstance) => <UnixTime fnDescription={fnDescr} contractInstance={contractInstance} />,
  url: (fnDescr, contractInstance) => <Url fnDescription={fnDescr} contractInstance={contractInstance} />,
  ethCount: (fnDescr, contractInstance) => <EthCount fnDescription={fnDescr} contractInstance={contractInstance} />,
  enum: (fnDescr, contractInstance) => <Enum fnDescription={fnDescr} contractInstance={contractInstance} />,
};

const renderInstanceWidget = (fnDescr, contractInstance) => {
  let widget;
  if ('ui:widget' in fnDescr && fnDescr['ui:widget'] in ContractInstanceWidgets) {
    widget = ContractInstanceWidgets[ fnDescr['ui:widget'] ];
  } else {
    widget = ContractInstanceWidgets.baseWidget;
  }

  return widget(fnDescr, contractInstance);
};

export default renderInstanceWidget;
