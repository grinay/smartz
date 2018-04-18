// Widgets for contract instance page

import React from "react";
import BaseWidget from "./widgets/BaseWidget";
import Unixtime from "./widgets/Unixtime";
import EthCount from "./widgets/EthCount";
import Enum from "./widgets/Enum";

const ContractInstanceWidgets = {
  baseWidget: (fnDescr, contractInstance) => <BaseWidget fnDescription={fnDescr} contractInstance={contractInstance} />,
  unixtime: (fnDescr, contractInstance) => <Unixtime fnDescription={fnDescr} contractInstance={contractInstance} />,
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
