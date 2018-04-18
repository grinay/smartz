// Widgets for instance page

import React from "react";
import BaseWidget from "./widgets/BaseWidget";
import Unixtime from "./widgets/Unixtime";
import EthCount from "./widgets/EthCount";
import Enum from "./widgets/Enum";

const ContractInstanceWidgets = {
  baseWidget: (fnDescr, instance) => <BaseWidget fnDescription={fnDescr} instance={instance} />,
  unixtime: (fnDescr, instance) => <Unixtime fnDescription={fnDescr} instance={instance} />,
  ethCount: (fnDescr, instance) => <EthCount fnDescription={fnDescr} instance={instance} />,
  enum: (fnDescr, instance) => <Enum fnDescription={fnDescr} instance={instance} />,
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
